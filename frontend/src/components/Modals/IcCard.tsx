/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { orderState } from "@/states/orderState";
import { useSetRecoilState } from "recoil";

const styles = {

cover: css `
  width:1000px;
  height:400px;
`,
};

const IdCard = () => {
  const setOder = useSetRecoilState(orderState)


  return (
    <div css={styles.cover} onClick={()=>{setOder(4)}}>
        <img src="http://127.0.0.1:8000/order_methods/order_method2.jpg"alt="" />
      Touch 
    </div>
     

  );
};
export default IdCard;
