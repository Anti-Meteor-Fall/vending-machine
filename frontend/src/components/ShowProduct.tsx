/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { darkModeState } from "@/states/darkModeState";
import { css } from "@emotion/react";
import { useRecoilState } from "recoil";

type prop = {
  url: string;
  price: number;
  quantity: number;
  name: string;
};

const ShowProduct = (props: prop) => {
  const [darkMode] = useRecoilState(darkModeState);

  const styles = {
    coverImg: css`
      margin: 30px 50px;
      width: auto;
      height: 170px;
      position: relative;
      &:hover {
        cursor: pointer;
      }
    `,
    showImg: darkMode
      ? css`
          width: auto;
          height: 150px;
          filter: drop-shadow(0px 0px 4px #00fff6);
        `
      : css`
          width: auto;
          height: 150px;
        `,
    showImgGray: css`
      width: auto;
      height: 150px;
      filter: grayscale(100%);

    `,
    productInfo: darkMode
      ? css`
          width: 50px;
          margin-top: 8px;
          text-align: center;
          color: #fff;
          font-family: "Noto Sans JP", sans-serif;
        `
      : css`
          width: 50px;
          margin-top: 8px;
          text-align: center;
          font-family: "Noto Sans JP", sans-serif;
        `,
    soldOut: css`
      position: absolute;
      height: 90%;
      transform-origin: center bottom;
      transform: rotate(-60deg) translate(45px, 0px);
      z-index: 10;
    `,
  };
  // 売り切れ表示
  const showSoldOut = (
    <>
      <img
        css={styles.soldOut}
        src="http://192.168.148.225:8000/images/soldOut.png"
        alt="SOLD OUT"
      />
    </>
  );

  return (
    <>
      <div css={styles.coverImg}>
        {props.quantity == 0 ? showSoldOut : ""}
        <div css={props.quantity == 0 ? styles.showImgGray : styles.showImg}>
          <img src={props.url} alt={props.name} css={styles.showImg} />
        </div>
        <div css={styles.productInfo}>{props.price}円</div>
      </div>
    </>
  );
};
export default ShowProduct;
