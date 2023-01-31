/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  cover: css  `
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: space-between;
  `,

  imgCover: css  `
    display: flex;
    align-items: center;
    justify-content: center;

    width: 150px;
    height: 400px;
  `,
  showImg: css  `
    width: auto;
    height: 300px;
  `,
  productInfo: css  `
    text-align: center;
    width: 250px;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

const SelectedProduct = (props: any) => {
  return (
    <>
      <div css={styles.cover}>
        <div css={styles.imgCover}>
          <img src={props.url} alt="" css={styles.showImg} />
        </div>
        <div css={styles.productInfo}>
          {props.name}
          <br />
          <br />
          {props.price}円
        </div>
      </div>
    </>
  );
};
export default SelectedProduct;