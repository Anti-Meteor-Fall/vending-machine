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
cardList: css `
  margin:20px;
  width:400px;
`,
touch: css `
  padding:20px 80px;
  margin:10px;
  width: 350px;
  border: solid 10px gray;
  border-radius:120px;
`
};

const IdCard = () => {
  const setOder = useSetRecoilState(orderState)
  const audio = new Audio("http://127.0.0.1:8000/sounds/ic.mp3") //　コンストラクタでaudio要素を生成

  return (
    <div css={styles.cover} onClick={()=>{
      setOder(2)
      audio.play()
      }}>
        <img css={styles.cardList} src="http://127.0.0.1:8000/order_methods/order_method2.jpg"alt="交通ICカード一覧" />
        <img css={styles.touch} src="http://127.0.0.1:8000/images/icTouch.png"alt="ICタッチ"/>
    </div>
     

  );
};
export default IdCard;
