/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import IdCard from "./Modals/IdCard";
import IcCard from "./Modals/IcCard";
import Cash from "./Modals/Cash";
import ModalBase from "./Modals/ModalBase";
import PayPay from "./Modals/PayPay";
import { useRecoilState } from "recoil";
import { modalState } from "@/states/modalState";
import { productSelectState } from "@/states/productSelectState";



const styles = {
  flex: css `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `,
  lockSelect: css `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  filter: grayscale(80%);
  `,
  payButton: css `
    height: 80px;
    min-width: 150px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
  `,
};
const buttonProp = { width: 120, padding: 2, margin: 2 , zIndex:10};


const PayList = () => {

const [showModal,setShowModal] = useRecoilState(modalState);
const [selectedProduct,setSelectedProduct] = useRecoilState(productSelectState)



// モーダルウィンドウ一覧
const modalComponents = [
  <Cash key="1"></Cash>,
  <PayPay key="2"></PayPay>,
  <IdCard key="3"></IdCard>,
  <IcCard key="4"></IcCard>,
];

  return (
    <>
      {/* モーダルウィンドウ表示 */}
         { showModal > 0 && showModal <= 4 ? (
      <ModalBase
        innerModal={modalComponents[showModal - 1]}
        setShowModal={(e: number) => setShowModal(e)}
      ></ModalBase>
    ) : null}
      <ul css={selectedProduct>0 ? styles.flex:styles.lockSelect}>
        <li css={styles.payButton}>
          <Button variant="contained" size="large" sx={buttonProp} onClick={()=>{setShowModal(1)}}>
            現金
          </Button>
        </li>
        <li css={styles.payButton}>
          <Button variant="contained" size="large" sx={buttonProp} onClick={()=>{setShowModal(2)}}>
            PayPay
          </Button>
        </li>
        <li css={styles.payButton}>
          <Button variant="contained" size="large" sx={buttonProp} onClick={()=>{setShowModal(3)}}>
            ID
          </Button>
        </li>
        <li css={styles.payButton}>
          <Button variant="contained" size="large" sx={buttonProp} onClick={()=>{setShowModal(4)}}>
            ICカード
          </Button>
        </li>
      </ul>
    </>
  );
};
export default PayList;
