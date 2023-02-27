/** @jsxImportSource @emotion/react */
import IpadSelected from "@/components/Modals/IpadSelected";
import SelectedProduct from "@/components/Modals/SelectedProduct";
import OrderComplete from "@/components/OrderConplete";
import PayList from "@/components/PayList";
import ShowProduct from "@/components/ShowProduct";
import { darkModeState } from "@/states/darkModeState";
import { ipadSelectedProduct } from "@/states/ipadSelectedProduct";
import { orderState } from "@/states/orderState";
import { productList } from "@/states/productList";
import { productSelectState } from "@/states/productSelectState";
import { css } from "@emotion/react";
import { useEffect } from "react";
import {  useRecoilState, useRecoilValue } from "recoil";
import useMedia from "use-media";


export default function Home() {
  const [result, setResult] = useRecoilState(productList);

  // 選択された商品
  const [selectedProduct, setSelectedProduct] = useRecoilState(productSelectState);
  const [darkMode] = useRecoilState(darkModeState);

  // pcサイズで選択された商品
  const [isorderEvent,setIsOrderEvent] = useRecoilState(orderState)
  // ipadサイズで選択された商品
  const [ipadSelected,setIpadSelected] = useRecoilState(ipadSelectedProduct)
  

  // レスポンシブの範囲
  const isWide = useMedia({minWidth: "1030px"})

  const styles = {

  main:darkMode? css `
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #121315;
  `: 
  css `
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
`,
  productList: css  `
    width: 880px;
    display: flex;
    flex-wrap: wrap;
  `,
  product: css  `
  border-radius: 20px;
  width: 100px;
  margin:5px;
  `,
  soldOutProduct: css `
  border-radius: 20px;
  width: 100px;
  margin:5px;
  `,
  right: css  `
    width: 400px;
  `,
  selected: css  `
    background-color:#d5d7db;
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
};

  useEffect(() => {
    if(isorderEvent==-1){
      fetch("http://127.0.0.1:8000/api/vending/productslist/")
      .then((responce) => responce.json())
      .then((res) => setResult(res.slice(0, 24)))
      .catch((err) => console.log(err));
    }
  }, [isorderEvent, setResult]);

  const showList = () => {
    const items: React.ReactNode[] = [];

    result.map((value) => {
      items.push(
        <div
        key={value.id}
          css={value.quantity > 0 ? styles.product :styles.soldOutProduct}
          onClick={() => {
            if(isWide){
              value.quantity > 0 ? setSelectedProduct(value.id):""
            }else{
              value.quantity > 0 ? setSelectedProduct(value.id):""

              value.quantity > 0 ? setIpadSelected(value.id):""
            }
          }}
        >
          <ShowProduct url={value.image} price={value.price} quantity={value.quantity}></ShowProduct>
        </div>
      );
    });
    return <div css={styles.productList}>{items}</div>;
  };

  const showSelectedProduct = () => {
    if (selectedProduct < 0) {
      return;
    }else{
      const find = result.find((u) => u.id === selectedProduct);
      return (
        <>
        <SelectedProduct
          url={find!.image}
          name={find!.name}
          price={find!.price}
          ></SelectedProduct>
      </>
    );
  }
  };
  const showRightSelect = ()=>{
    return(

      <div css={styles.right}>
    <div css={styles.selected}>
      <div>{showSelectedProduct()}</div>
    </div>
    <div css={styles.payList}>
      <PayList></PayList>
    </div>
  </div>
      )
  }

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
      <main css={styles.main}>
        {/* 左側商品一覧 */}
        {showList()}
        {/* 右側　選択商品と支払い一覧 */}
        {isWide ? showRightSelect():""}
        {/* 購入時の表示と処理 */}
      {isorderEvent > 0 ?<OrderComplete></OrderComplete>:""}
      {ipadSelected > 0 ?<IpadSelected></IpadSelected>:""}
      
      </main>
    </>
  );
}
