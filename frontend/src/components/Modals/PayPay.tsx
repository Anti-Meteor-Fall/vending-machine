/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { orderState } from "@/states/orderState";
import { css } from "@emotion/react";
import { style } from "@mui/system";
import { useSetRecoilState } from "recoil";

const styles = {
  cover: css `
    width: 500px;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerContent: css `
  `,
  paypayImg: css `
    width: 300px;
  `,
  qr: css `
    width: 300px;
  `,
};

const PayPay = () => {
  const setOder = useSetRecoilState(orderState);
  const audio = new Audio("http://127.0.0.1:8000/sounds/paypay.mp3"); //　コンストラクタでaudio要素を生成

  return (
    <div
      css={styles.cover}
      onClick={() => {
        audio.play();
        audio.currentTime = 1;
        setOder(2);
      }}
    >
      <div css={styles.centerContent}>
        <div>
          <img
            src="http://127.0.0.1:8000/order_methods/order_method3.jpg"
            alt=""
            css={styles.paypayImg}
          />
        </div>
        <div>
          <img
            css={styles.qr}
            src="http://127.0.0.1:8000/images/qrSample.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default PayPay;
