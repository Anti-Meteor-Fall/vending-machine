/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { orderState } from "@/states/orderState";
import { css } from "@emotion/react";
import { useSetRecoilState } from "recoil";

const styles = {
  cover: css `
    width: 800px;
    height: 400px;
  `,
  paypayImg: css `
    margin: 10px;
    width: 600px;
  `,
};

const PayPay = () => {
  const setOder = useSetRecoilState(orderState);

  return (
    <div
      css={styles.cover}
      onClick={() => {
        setOder(2);
      }}
    >
      <img
        src="http://127.0.0.1:8000/order_methods/order_method3.jpg"
        alt=""
        css={styles.paypayImg}
      />
    </div>
  );
};
export default PayPay;
