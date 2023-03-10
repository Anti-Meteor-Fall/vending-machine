/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { orderState } from "@/states/orderState";
import { css } from "@emotion/react";
import { useSetRecoilState } from "recoil";

const styles = {
  cover: css`
    width: 500px;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerContent: css``,
  paypayImg: css`
    width: 300px;
  `,
  qr: css`
    width: 300px;
  `,
};

const PayPay = () => {
  const setOder = useSetRecoilState(orderState);
  const audio = new Audio(
    "http://"+process.env.NEXT_PUBLIC_HOST_ADDRES+":8000/sounds/paypay.mp3"
  ); //　コンストラクタでaudio要素を生成

  return (
    <div
      css={styles.cover}
      onClick={() => {
        audio.play();
        audio.currentTime = 1;
        setOder(3);
      }}
    >
      <div css={styles.centerContent}>
        <div>
          <img
            src={"http://"+process.env.NEXT_PUBLIC_HOST_ADDRES+":8000/order_methods/order_method3.jpg"}
            alt="paypay"
            css={styles.paypayImg}
          />
        </div>
        <div>
          <img
            css={styles.qr}
            src={"http://"+process.env.NEXT_PUBLIC_HOST_ADDRES+":8000/images/qrSample.jpeg"}
            alt="paypay QRコード"
          />
        </div>
      </div>
    </div>
  );
};
export default PayPay;
