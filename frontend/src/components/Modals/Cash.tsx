/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import { useSetRecoilState } from "recoil";
import { orderState } from "@/states/orderState";


const styles = {

cover: css `
  width:1000px;
  height:500px;
  padding:50px;
`,
showInputValue: css `
width:200px;
  font-size:3rem;
  font-family: 'Orbitron', sans-serif;
  background-color:#323D33;
  color: #00C914;
  margin:30px;
  padding:10px;
  display:inline;
`,
inputHall: css `
  position:fixed;
  top:15px;
  right:0;
`,
Conins: css `
  width:400px;
  margin:20px;
  display:flex;
  flex-wrap: wrap;
  flex:auto;
  align-items:center;
  `,


};

const Cash = () => {
  const [inputValue,setInputValue] =  useState<number>(0)
  const [isDragging,setIsDragging] = useState<number>(0)
  const [isDroppable, setIsDroppable] = useState(false);

  const setOder = useSetRecoilState(orderState)


    /**
   * drag item に関するイベント
   */
  /* drag itemを持ったとき */
  const onDragStart = (e: React.DragEvent<HTMLDivElement>, num:number) => {
    console.log('non drag start', e);
    console.log(num);
    setIsDragging(num);
    // e.dataTransfer.setData('text/plain', e.currentTarget.id);
    // e.dataTransfer.dropEffect = 'move';
  };

  /* drag itemを放したとき */
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('on drag end', e);
    console.log(isDroppable);

    if(isDroppable){
          setInputValue((prevCount) => prevCount + isDragging);
          setIsDroppable(false);

    }
    setIsDragging(-1);
  };

  /**
   * drop zone に関するイベント
   */
  /* Itemがdrag zoneに入ったとき */
  const onDragEnter = (e: React.DragEvent<HTMLDivElement> ) => {
    console.log('on drag enter', e);
    setIsDroppable(true);
  };

  /* Itemがdrag zoneから出たとき */
  const onDragLeave = (e: React.DragEvent<HTMLDivElement> ) => {
    // 放しても実行される
    console.log('on drag leave', e);
      setIsDroppable(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('on drop', e);
  };
  const buttonProp = { width: 120, padding: 2, margin: 2 , zIndex:10};

  return (
    <div css={styles.cover}>
      <div draggable css={styles.showInputValue}>
      {inputValue+"円"}
      </div>
      <div 
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={(e) => {
          e.preventDefault(); // これがないとdropイベントが発火しない
        }}
        onDrop={onDrop} css={styles.inputHall}
        onClick={()=>setInputValue(0)}>
        <img src="http://127.0.0.1:8000/images/coin_tounyuguchi.png" alt="" width={500}/>
      </div>
      <div css={styles.Conins}>
        <img draggable 
        onDragStart={(e) => {
          onDragStart(e, 1);
        }}
        onDragEnd={onDragEnd} src="http://127.0.0.1:8000/images/1yen.png" alt="" width={80} height={80}/>
        <img draggable 
        onDragStart={(e) => {
          onDragStart(e, 5);
        }}
        onDragEnd={onDragEnd}  src="http://127.0.0.1:8000/images/5yen.png" alt="" width={85} height={85}/>
        <img draggable 
        onDragStart={(e) => {
          onDragStart(e, 10);
        }}
        onDragEnd={onDragEnd}  src="http://127.0.0.1:8000/images/10yen.png" alt="" width={100} height={100}/>
        <img draggable 
        onDragStart={(e) => {
          onDragStart(e, 50);
        }}
        onDragEnd={onDragEnd}  src="http://127.0.0.1:8000/images/50yen.png" alt="" width={90} height={90}/>
        <img draggable 
        onDragStart={(e) => {
          onDragStart(e, 100);
        }}
        onDragEnd={onDragEnd}  src="http://127.0.0.1:8000/images/100yen.png" alt="" width={100} height={100}/>
        <img draggable 
        onDragStart={(e) => {
          onDragStart(e, 500);
        }}
        onDragEnd={onDragEnd}  src="http://127.0.0.1:8000/images/500yen.png" alt="" width={120} height={120}/>
      </div>
        <div>
          <Button variant="contained" size="large" sx={buttonProp}  
            onClick={()=>{
              if(inputValue > 160)
              setOder(1)
              }}>
            購入
          </Button>
          </div>
    </div>
     
  );
};
export default Cash;
