/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  showImg: css `
    font-size: 6rem;
  `,
};

const ShowProduct = (props:any) => {
  return (
    <>
    {/* 一時的にsvgで表示している */}
<div>

      <svg
        css={styles.showImg}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        >
        <path
          fill="currentColor"
          d={props.imgPath}
          />
      </svg>
      <div>{props.index}</div>
          </div>
     
    </>
  );
};
export default ShowProduct;
