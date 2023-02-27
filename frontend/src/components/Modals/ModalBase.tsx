/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import gsap from "gsap";
import { useRecoilState } from "recoil";
import { modalState } from "@/states/modalState";
import { orderState } from "@/states/orderState";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

const styles = {
  cover: css `
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 15;
    overflow: hidden;
  `,
  position: css `
    position: fixed;
    width: auto;
    max-width:80vw;
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

type prop ={
  innerModal:EmotionJSX.Element
}
const ModalBase = (props: prop) => {

  const [,setShowModal] = useRecoilState(modalState);
  const [oederState,] = useRecoilState(orderState);



  // モーダル表示アニメーション
  const openAnimetion = () =>{
    gsap.to(".cash", { y: 800, duration: 0.5 });
    gsap.to(".cashPopCover", {
      backgroundColor: "rgba(0,0,0,0.6)",
      duration: 0.5,
    });
  }

  // モーダル非表示アニメーション
  const closeAnimetion = () => {
    gsap.to(".cash", { y: -300, duration: 0.5 });
      gsap.to(".cashPopCover", {
        backgroundColor:oederState<0? "rgba(0,0,0,0)":"",
        duration: 0.5,
        onComplete: () => {
          setShowModal(-1);
        },
      });
  };

// モーダルが選択されたらアニメーションを実行
  useEffect(() => {
    openAnimetion()
  });

// 購入確定時の処理
  useEffect(() => {
    if(oederState>0)closeAnimetion()
  }),[oederState];

  return (
    <>
      <div
        css={styles.cover}
        className="cashPopCover"
        onClick={closeAnimetion}
      ></div>
      <div css={styles.position} className="cash">
        {props.innerModal}
        <div css={styles.closeButton}>
          <IconButton aria-label="delete" size="large" onClick={closeAnimetion}>
            <CloseIcon sx={{ fontSize: "50px" }} />
          </IconButton>
        </div>
      </div>
    </>
  );
};
export default ModalBase;
