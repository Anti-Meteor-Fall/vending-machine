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
  height:400px;
  padding:50px;
`,
buttonList: css `
  display:flex;
`,
buttonSpace: css `
  margin:10px;
`

};

const Cash = () => {
  const [inputValue,setInputValue] =  useState<number>(0)

  const setOder = useSetRecoilState(orderState)

  return (
    <div css={styles.cover}>
      <div>
      {"投入金額    "+inputValue+"円"}
      </div>
      <div css={styles.buttonList}>


        <div css={styles.buttonSpace}>
          <Button variant="contained" size="small" onClick={()=>setInputValue((prev)=>prev - 10)}>
              <RemoveIcon fontSize="small"></RemoveIcon>
            </Button> 
            10円
            <Button variant="contained" size="small" onClick={()=>setInputValue((prev)=>prev + 10)}>
              <AddIcon fontSize="small"></AddIcon>
            </Button>
        </div>
        <div css={styles.buttonSpace}>
          <Button variant="contained" size="small" onClick={()=>setInputValue((prev)=>prev - 100)}>
              <RemoveIcon fontSize="small"></RemoveIcon>
            </Button> 
            100円
            <Button variant="contained" size="small" onClick={()=>setInputValue((prev)=>prev + 100)}>
              <AddIcon fontSize="small"></AddIcon>
            </Button>
        </div>
      </div>
        <div><Button onClick={()=>{setOder(1)}}>購入</Button></div>
    </div>
     

  );
};
export default Cash;
