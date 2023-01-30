/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IDImage from "@/images/id.png"
import Image from "next/image";


const styles = {

cover: css `
  width:1000px;
  height:400px;
`,

};

const IdCard = () => {

  return (
    <div css={styles.cover} onClick={()=>{alert("購入完了")}}>
      <Image src={IDImage} alt="" />
      Touch
    </div>
     

  );
};
export default IdCard;
