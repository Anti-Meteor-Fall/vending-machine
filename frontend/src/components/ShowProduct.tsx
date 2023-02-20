/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { type } from "os";

const styles = {
  coverImg: css  `
    margin: 30px;
    width: auto;
    height: 150px;
    position:relative;
  `,
  showImg: css  `
    width: auto;
    height: 150px;
  `,
  showImgGray: css `
    width: auto;
    height: 150px;
    filter: grayscale(100%);
  `,
  productInfo: css  `
    margin-top: 8px;
    text-align: center;
  `,
  soldOut: css `
    position: absolute;
    width:200px;
    width:150px;
    transform-origin: center bottom;
    transform: rotate(-60deg) translate(40px,0px);
    z-index:15;
  `
};

// 売り切れ表示
const showSoldOut = ( <>
  < img css={styles.soldOut} src="http://127.0.0.1:8000/images/soldOut.png" alt="" />
</>)

type prop = {
  "url":string,
  "price":number,
  "quantity":number
}

const ShowProduct = (props: prop) => {
  return (
    <>
     
      <div css={styles.coverImg}>
       {props.quantity == 0 ? showSoldOut:""}
        <div css={props.quantity == 0 ? styles.showImgGray :styles.showImg }>
          <img src={props.url} alt="" css={styles.showImg} />
        </div>
        <div css={styles.productInfo}>
          {props.price}円
        </div>
      </div>
    </>
  );
};
export default ShowProduct;
