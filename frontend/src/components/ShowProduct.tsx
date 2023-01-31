/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  coverImg: css  `
    margin: 30px;
    width: auto;
    height: 150px;
  `,
  showImg: css  `
    width: auto;
    height: 150px;
  `,
  productInfo: css  `
    margin-top: 8px;
    text-align: center;
  `,
};

const ShowProduct = (props: any) => {
  return (
    <>
      <div css={styles.coverImg}>
        <div css={styles.showImg}>
          <img src={props.url} alt="" css={styles.showImg} />
        </div>
        <div css={styles.productInfo}>
          {props.name}
          {props.price}円
        </div>
      </div>
    </>
  );
};
export default ShowProduct;
