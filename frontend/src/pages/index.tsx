/** @jsxImportSource @emotion/react */
import SelectedProduct from "@/components/Modals/SelectedProduct";
import OrderComplete from "@/components/OrderConplete";
import PayList from "@/components/PayList";
import ShowProduct from "@/components/ShowProduct";
import { orderState } from "@/states/orderState";
import { productSelectState } from "@/states/productSelectState";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import {  useRecoilState, useRecoilValue } from "recoil";

const styles = {
  nav: css  `
    background-color: gray;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    position: fixed;
  `,
  main: css  `
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  productList: css  `
    width: 800px;
    display: flex;
    flex-wrap: wrap;
  `,
  product: css  `
    width: 100px;
  `,
  right: css  `
    width: 400px;
  `,
  selected: css  `
    background-color: #ccc;
    border-radius: 30px;
    width: 425px;
    height: 400px;
    margin-bottom: 10px;
  `,
  payList: css  `
    width: 400px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
  `,
  showItem: css  ``,
};

type resultProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  is_set: boolean;
  quantity: number;
  created_at: string;
  updated_at: string;
};

export default function Home() {
  const [result, setResult] = useState<resultProps[]>([]);
  const [error, setError] = useState({});

  // 選択された商品
  const [selectedProduct, setSelectedProduct] = useRecoilState(productSelectState);

  const isorderEvent = useRecoilValue(orderState)

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/vending/productslist/")
      .then((responce) => responce.json())
      .then((res) => setResult(res.slice(0, 24)))
      .catch((err) => setError(err));
  }, []);

  const showList = () => {
    const items: any = [];

    result.map((value) => {
      items.push(
        <div
        key={value.id}
          css={styles.product}
          onClick={() => {
            setSelectedProduct(value.id);
          }}
        >
          <ShowProduct url={value.image} price={value.price}></ShowProduct>
        </div>
      );
    });
    return <div css={styles.productList}>{items}</div>;
  };

  const showSelectedProduct = () => {
    if (selectedProduct < 0) {
      return;
    }else{
      return (
        <>
        <SelectedProduct
          url={result[selectedProduct - 1].image}
          name={result[selectedProduct - 1].name}
          price={result[selectedProduct - 1].price}
          ></SelectedProduct>
      </>
    );
  }
  };

  // 商品選択してから10秒経過したら選択状態を解除
  // useEffect(() => {
  //   // タイマーのセット
  //   const timer = setTimeout(() => {
  //     setSelectedProduct(-1);
  //   }, 10 * 1000);

  //   //クリーンアップ
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [selectedProduct]);
  return (
    <>
      {/* ナビゲーション */}
      <nav css={styles.nav}></nav>
      <main css={styles.main}>
        {/* 左側商品一覧 */}
        {showList()}
        {/* 右側　選択商品と支払い一覧 */}
        <div css={styles.right}>
          <div css={styles.selected}>
            <div css={styles.showItem}>{showSelectedProduct()}</div>
          </div>
          <div css={styles.payList}>
            <PayList></PayList>
          </div>
        </div>

        {/* 購入時の表示と処理 */}
      {isorderEvent> 0 ?<OrderComplete json={result}></OrderComplete>:""}

      </main>
    </>
  );
}
