/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import gsap from "gsap";

const styles = {
  cover: css `
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 15;
  `,
  position: css `
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

const ModalBase = (props: any) => {

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
    gsap.to(".cash", { y: 0, duration: 0.5 });
    gsap.to(".cashPopCover", {
      backgroundColor: "rgba(0,0,0,0)",
      duration: 0.5,
      onComplete: () => {
        props.setShowModal(-1);
      },
    });
  };

  useEffect(() => {
    openAnimetion()
  });

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
