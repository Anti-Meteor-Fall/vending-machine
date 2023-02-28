/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { orderState } from "@/states/orderState";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Vivus from "vivus";
import { productSelectState } from "@/states/productSelectState";
import { productList } from "@/states/productList";
import { postOrderMethod, putProductQuantity } from "@/pages/api/vending";

const styles = {
  cover: css `
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
  `,
  rect: css `
    width: 400px;
    height: 400px;
  `,
  text: css `
    text-align: center;
    font-size: 5rem;
    color: white;
  `,
};

const OrderComplete = () => {
  const [result,setResult] = useRecoilState(productList);
  const [orderEvent, setOrderEvent] = useRecoilState(orderState);
  const [selectedProduct, setSelectedProduct] =useRecoilState(productSelectState);

  let sendValue = result.find((u: { id: number }) => u.id === selectedProduct);
  let quantity: number;

  if (sendValue!.quantity - 1 > 0) {
    quantity = sendValue!.quantity - 1;
  } else {
    quantity = 0;
  }

  // バックエンドへ商品在庫の送信
  putProductQuantity(sendValue!.id,quantity)
  
  // バックエンドへ購入方法の送信
  postOrderMethod(sendValue!.id,orderEvent)


  useEffect(() => {
    new Vivus(
      "Layer-1",
      {
        type: "delayed",
        duration: 150,
        animTimingFunction: Vivus.EASE_OUT,
        start: "autostart",
      },
      () => {
        gsap.to(".cover", {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            setOrderEvent(-1);
            setSelectedProduct(-1);
            setResult((prevState) =>
            prevState.map((obj) => (obj.id === selectedProduct ? {
              id: obj.id,
              name: obj.name,
              price: obj.price,
              image: obj.image,
              is_set: obj.is_set,
              quantity: quantity,
              created_at: obj.created_at,
              updated_at: obj.updated_at,
              } : obj))
          );
          },
        });
      }
    );
  }, [setOrderEvent, setSelectedProduct]);
  return (
    <div css={styles.cover} className="cover">
      <div css={styles.text}>
        ご購入
        <br />
        ありがとうございました
      </div>
      <div css={styles.rect}>
        <svg height="100%" width="100%">
          <defs />
          <g id="Layer-1">
            <path
              d="M17.4806 200.677C17.4806 99.5508 99.9809 17.5719 201.75 17.5719C303.519 17.5719 386.02 99.5508 386.02 200.677C386.02 301.803 293.881 383.782 201.746 383.782C109.612 383.782 17.4806 301.803 17.4806 200.677Z"
              fill="none"
              opacity="1"
              stroke="#00cc00"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth="16.0142"
            />
            <path
              d="M99.5751 224.562L181.162 305.112L301.278 110.034"
              fill="none"
              opacity="1"
              stroke="#00cc00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="23.8529"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default OrderComplete;
