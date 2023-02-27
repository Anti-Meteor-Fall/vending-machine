/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/** @jsxImportSource @emotion/react */
import { ipadSelectedProduct } from "@/states/ipadSelectedProduct";
import { productList } from "@/states/productList";
import { orderState } from "@/states/orderState";
import { useRecoilState } from "recoil";
import SelectedProduct from "./SelectedProduct";
import { css } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import PayList from "../PayList";
import gsap from "gsap";
import { modalState } from "@/states/modalState";


const styles = {
  cover: css `
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    overflow: hidden;
  `,
  position: css `
  padding:10px 60px ;
    position: fixed;
    width: auto;
    height: auto;
    top: calc(50% - 800px);
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #eee;
    border-radius: 30px;
    z-index: 100;
  `,
  closeButton: css `
    position: fixed;
    top: 10px;
    right: 10px;
  `,
};
const IpadSelected = () => {
  const [result] = useRecoilState(productList);
  const [ipadSelected, setIpadSelected] = useRecoilState(ipadSelectedProduct);
  const [order] = useRecoilState(orderState);
  const [showModal,setShowModal] = useRecoilState(modalState);


  const find = result.find((u) => u.id === ipadSelected);

  const showInner = (
    <>
      <SelectedProduct url={find!.image} name={find!.name} price={find!.price} />
      <PayList />
    </>
  );

  const openAnimation = () => {
    gsap.to(".product", { y: 800, duration: 0.5 });
    gsap.to(".productPopCover", { backgroundColor: "rgba(0,0,0,0.6)", duration: 0.5 });
  };

  const closeAnimation = () => {
    gsap.to(".product", { y: -300, duration: 0.5 });
    gsap.to(".productPopCover", {
      backgroundColor: "rgba(0,0,0,0)",
      duration: 0.5,
      onComplete: () => {
        setIpadSelected(-1);
      },
    });
  };

  useEffect(() => {
    openAnimation();
  }, []);

  useEffect(() => {
    if (order > 0) closeAnimation();
  }, [order]);

  return (
    <>
      <div css={styles.cover} className="productPopCover" onClick={showModal? closeAnimation : ()=>{} }></div>
      <div css={styles.position} className="product">
        {find && showInner}
        <div css={styles.closeButton}>
          <IconButton aria-label="delete" size="large" onClick={closeAnimation}>
            <CloseIcon sx={{ fontSize: "50px" }} />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default IpadSelected;
