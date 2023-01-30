/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import qr from "@/images/qr.png"
import paypay from "@/images/paypay.png"


const styles = {

cover: css `
  width:1000px;
  height:400px;
`,
paypayImg :css `
  width: 200px;
  height: 200px;
  `

};

const PayPay = () => {

  return (
    <div css={styles.cover}>
<Image src={paypay} alt="" css={styles.paypayImg} />   
<Image src={qr} alt="" />   
 </div>
     

  );
};
export default PayPay;
