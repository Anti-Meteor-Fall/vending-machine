/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { orderState } from "@/states/orderState";
import { useSetRecoilState } from "recoil";


const styles = {

cover: css`
  max-width:700px;
  min-height:400px;
  align-content: center;
  text-align: center
`,
cardOption: css`
  width: 300px;
  margin: 0 0 20px 0;
`,
touch: css`
  width: 600px;
  margin:35px;
  &:hover {
      cursor: pointer;
    }
`
};

const IdCard = () => {
  const setOder = useSetRecoilState(orderState)
  const audio = new Audio("http://127.0.0.1:8000/sounds/id.mp3") //　コンストラクタでaudio要素を生成

  return (
    <div css={styles.cover} onClick={()=>{
      setOder(4)
      audio.play()
      }}>
      <img css={styles.touch} src="http://127.0.0.1:8000/images/creditCardTouch.jpg" alt="クレジットカード一覧" />
      <img css={styles.cardOption} src="http://127.0.0.1:8000/order_methods/order_method4.png" alt="クレジットカード一覧" />
    </div>

  );
};
export default IdCard;
