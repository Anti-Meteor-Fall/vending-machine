/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import IpadSelected from "@/components/Modals/IpadSelected";
import SelectedProduct from "@/components/Modals/SelectedProduct";
import Navi from "@/components/Navi";
import OrderComplete from "@/components/OrderComplete";
import PayList from "@/components/PayList";
import ShowProduct from "@/components/ShowProduct";
import { darkModeState } from "@/states/darkModeState";
import { ipadSelectedProduct } from "@/states/ipadSelectedProduct";
import { orderState } from "@/states/orderState";
import { productList } from "@/states/productList";
import { productSelectState } from "@/states/productSelectState";
import { Product } from "@/types/api";
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import useMedia from "use-media";
import { getProductList, getWeatherInfo } from "./api/vending";

interface Props {
  productListData: Product[];
}

export default function Home({ productListData }: Props) {
  const [result, setResult] = useRecoilState(productList);
  // 選択された商品
  const [selectedProduct, setSelectedProduct] =
    useRecoilState(productSelectState);
  const [darkMode] = useRecoilState(darkModeState);

  // pcサイズで選択された商品
  const [isOrderEvent] = useRecoilState(orderState);
  // ipadサイズで選択された商品
  const [ipadSelected, setIpadSelected] = useRecoilState(ipadSelectedProduct);

  // レスポンシブの範囲
  const isWide = useMedia({ minWidth: "1030px" });

  const styles = {
    main: darkMode
      ? css `
    padding-top:110px;

          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: #121315;
        `
      : css `
    padding-top:110px;

          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
          // background-color: #8ec5fc;
          // background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
          background: linear-gradient(220.55deg, #7CF7FF 0%, #4B73FF 100%);
        `,
    productList: css `
      width: 880px;
      display: flex;
      flex-wrap: wrap;
    `,
    product:isWide? css `
      border-radius: 20px;
      width: 100px;
      margin: 5px;
    `: css `
    border-radius: 20px;
    width: 100px;
    margin: 15px;
  `,
    soldOutProduct:isWide? css `
      border-radius: 20px;
      width: 100px;
      margin: 5px;
    `: css `
    border-radius: 20px;
    width: 100px;
    margin: 15px;
  `,
    right: css `
      width: 400px;
    `,
    selected: css `
      background-color: #d5d7db;
      border-radius: 30px;
      width: 425px;
      height: 400px;
      margin-bottom: 10px;
    `,
    payList: css `
      width: 400px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px;
    `,
  };

  useEffect( () => {
    if (isOrderEvent == -1) {
      setResult(productListData.slice(0, 24))
    }
  }, []);

  const showList = () => {
    const items: React.ReactNode[] = [];

    result.map((value) => {
      items.push(
        <div
          key={value.id}
          css={value.quantity > 0 ? styles.product : styles.soldOutProduct}
          onClick={() => {
            if (isWide) {
              value.quantity > 0 ? setSelectedProduct(value.id) : "";
            } else {
              value.quantity > 0 ? setSelectedProduct(value.id) : "";

              value.quantity > 0 ? setIpadSelected(value.id) : "";
            }
          }}
        >
          <ShowProduct
            url={value.image}
            price={value.price}
            quantity={value.quantity}
            name={value.name}
          ></ShowProduct>
        </div>
      );
    });
    return <div css={styles.productList}>{items}</div>;
  };

  const showSelectedProduct = () => {
    if (selectedProduct < 0) {
      return;
    } else {
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
  const showRightSelect = () => {
    return (
      <div css={styles.right}>
        <div css={styles.selected}>
          <div>{showSelectedProduct()}</div>
        </div>
        <div css={styles.payList}>
          <PayList></PayList>
        </div>
      </div>
    );
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
      <Navi></Navi>
      <main css={styles.main}>
        {/* 左側商品一覧 */}
          {showList()}
        {/* 右側　選択商品と支払い一覧 */}
        {isWide ? showRightSelect() : ""}
        {/* 購入時の表示と処理 */}
        {isOrderEvent > 0 ? <OrderComplete></OrderComplete> : ""}
        {ipadSelected > 0 ? <IpadSelected></IpadSelected> : ""}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const productListData = await getProductList();
  
  return {
    props : {
      productListData
    }
  };
};

