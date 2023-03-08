/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Button } from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";
import { orderState } from "@/states/orderState";
import { cashInputValue } from "@/states/cashInputValue";

const styles = {
  cover: css `
    max-width: 1000px;
    min-height: 500px;
    padding: 20px;
   `,
  showInputValue: css `
    width: 200px;
    font-size: 3rem;
    font-family: "Orbitron", sans-serif;
    background-color: #323d33;
    color: #00c914;
    margin: 30px;
    padding: 10px;
    display: inline;
   `,
  inputHall: css `
    &:hover {
      cursor: pointer;
    }
   `,
  Conins: css `
    width: 400px;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    flex: auto;
    align-items: center;
   `,
  coin: css `
    &:hover {
      cursor: pointer;
    }
   `,
  flex: css `
    flex-wrap: wrap;
   `,
};

const Cash = () => {
  const [inputValue, setInputValue] = useRecoilState<number>(cashInputValue);
  const [isDragging, setIsDragging] = useState<number>(0);
  const [isDroppable, setIsDroppable] = useState(false);

  const setOder = useSetRecoilState(orderState);

  /**
   * drag item に関するイベント
   */
  /* drag itemを持ったとき */
  const onDragStart = (e: React.DragEvent<HTMLDivElement>, num: number) => {
    console.log("non drag start", e);
    console.log(num);
    setIsDragging(num);
    // e.dataTransfer.setData('text/plain', e.currentTarget.id);
    // e.dataTransfer.dropEffect = 'move';
  };

  /* drag itemを放したとき */
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("on drag end", e);
    console.log(isDroppable);

    if (isDroppable) {
      setInputValue((prevCount) => prevCount + isDragging);
      setIsDroppable(false);
    }
    setIsDragging(-1);
  };

  /**
   * drop zone に関するイベント
   */
  /* Itemがdrag zoneに入ったとき */
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("on drag enter", e);
    setIsDroppable(true);
  };

  /* Itemがdrag zoneから出たとき */
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    // 放しても実行される
    console.log("on drag leave", e);
    setIsDroppable(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("on drop", e);
  };
  
  const onClick =  (num: number)=>{
    setInputValue((prevCount) => prevCount + num);
    
  }
  const buttonProp = { width: 120, padding: 2, margin: 2, zIndex: 10 };

  type coinInfo = {
    name:string,
    range:number,
    url:string
}
const CoinData:coinInfo[] = [
  {
    name:"一円",
    range:80,
    url:"1yen.png"
  },
    {
    name:"五円",
    range:85,
    url:"5yen.png"
  },
    {
    name:"十円",
    range:100,
    url:"10yen.png"
  },
    {
    name:"五十円",
    range:90,
    url:"50yen.png"
  },
    {
    name:"百円",
    range:100,
    url:"100yen.png"
  },
    {
    name:"五百円",
    range:120,
    url:"500yen.png"
  },
  
]

const value= [
  1,5,10,50,100,500
]
const CoinConmponent = (coinin:coinInfo,index:number) =>{
  const coin = <img 
    onClick={()=>{onClick(value[index])}}
    onDragStart={(e)=>onDragStart(e,value[index])} 
    onDragEnd={(e)=>onDragEnd(e)} 
    key={index} 
    src={"http://"+process.env.NEXT_PUBLIC_HOST_ADDRES+":8000/images/"+coinin.url} 
    alt={coinin.name} 
    width={coinin.range}/>
  return coin
}


  return (
    <div css={styles.cover}>
      <div draggable css={styles.showInputValue}>
        {inputValue + "円"}
      </div>
      <div css={styles.flex}>
        <div
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={(e) => {
            e.preventDefault(); // これがないとdropイベントが発火しない
          }}
          onDrop={onDrop}
          css={styles.inputHall}
          onClick={() => setInputValue(0)}
        >
          <img
            src={"http://"+process.env.NEXT_PUBLIC_HOST_ADDRES+":8000/images/coin_tounyuguchi.png"}
            alt="硬貨投入口"
            width={400}
          />
        </div>
        <div css={styles.Conins}>
        {CoinData.map((coin, index) => (
                  CoinConmponent(coin, index)
        ))}
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          size="large"
          sx={buttonProp}
          onClick={() => {
            if (inputValue > 160) setOder(1);
          }}
        >
          購入
        </Button>
      </div>
    </div>
  );
};
export default Cash;
