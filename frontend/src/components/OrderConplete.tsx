/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { orderState } from "@/states/orderState";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Vivus from "vivus";
import { productSelectState } from "@/states/productSelectState";


const styles = {
  cover: css `
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color:rgba(0,0,0,0.6);
    z-index:100;
  `,
  rect: css `
    width:400px;
    height:400px;
  `,
  text: css `
    font-size:5rem;
    color:white;
    // -webkit-text-stroke: 2px black;
  `
};

const OrderComplete = (props:any) => {

  const [isorderEvent,setOrderEvent] = useRecoilState(orderState)
  const [selectedProduct,setSelectedProduct] = useRecoilState(productSelectState)
  console.log(selectedProduct)

var sendValue = props.json
sendValue = sendValue[selectedProduct-1]

if(sendValue.quantity -1 > 0){
  sendValue.quantity = sendValue.quantity -1
}
else{
  sendValue.quantity = 0
  sendValue.is_set = false
}

const dt = new Date(Date.now());
const jdt = new Date(dt.getTime() + 9 * 60 * 60 * 1000);  // 9時間ずらす
const isoStr = jdt.toISOString().split('Z')[0] + '000+09:00';


fetch('http://127.0.0.1:8000/api/vending/products/'+sendValue.id, {
  method: 'PUT',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    sendValue
  })
})

console.log(sendValue);

  useEffect(()=>{
    new Vivus("Layer-1", {
      type: "delayed",
      duration:150,
      animTimingFunction: Vivus.EASE_OUT,
      start: "autostart",
    },()=>{
      gsap.to(".cover",{
        opacity:0,
        duration:1,
        onComplete: ()=>setOrderEvent(-1)
      })
    }
    );
  })
  return (
    <div css={styles.cover} className="cover">
      <div css={styles.text}>ご購入ありがとうございました</div>
      <div css={styles.rect}>
        <svg height="100%" width="100%" >
          <defs/>
          <g id="Layer-1" >
          <path d="M17.4806 200.677C17.4806 99.5508 99.9809 17.5719 201.75 17.5719C303.519 17.5719 386.02 99.5508 386.02 200.677C386.02 301.803 293.881 383.782 201.746 383.782C109.612 383.782 17.4806 301.803 17.4806 200.677Z" fill="none" opacity="1" stroke="#00cc00" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="16.0142"/>
          <path d="M99.5751 224.562L181.162 305.112L301.278 110.034" fill="none" opacity="1" stroke="#00cc00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="23.8529"/>
          </g>
        </svg>
      
      </div>
    </div>
  );
};
export default OrderComplete;
