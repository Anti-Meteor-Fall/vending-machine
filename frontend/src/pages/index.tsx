/** @jsxImportSource @emotion/react */
import ShowProduct from "@/components/ShowProduct";
import { css } from "@emotion/react";

const styles = {
  nav: css `
    background-color: gray;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    position: fixed;
  `,
  main: css `
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  productList: css `
    width: 800px;
  `,
  right: css `
    width: 400px;
  `,
  selected: css `
    background-color: #ccc;
    border-radius: 30px;
    width: 400px;
    height: 400px;
    margin-bottom: 10px;
  `,
  payList: css `
    background-color: #ff0000;
    border-radius: 30px;
    width: 400px;
    height: 200px;
  `,
  showItem: css `
    width: 100px;
    height: 100px;
    transform-origin: left top;
    transform: scale(2.8);
  `,
};

export default function Home() {
  return (
    <>
    {/* ナビゲーション */}
      <nav css={styles.nav}></nav>
      <main css={styles.main}>
        {/* 左側商品一覧 */}
            {(() => {
              const items = [];
              for (let i = 0; i < 32; i++) {
                items.push(
                  <ShowProduct
                    imgPath={`M8.5 2h3a1.5 1.5 0 0 1 .547 2.897c.121.487.477.856 1.022 1.393l.01.01c.384.378.839.826 1.237 1.423a4.144 4.144 0 0 1 .674 2.558c.007.072.01.145.01.219v5a2.5 2.5 0 0 1-3.75 2.165A2.49 2.49 0 0 1 10 18a2.49 2.49 0 0 1-1.25-.335A2.5 2.5 0 0 1 5 15.5v-5c0-.074.003-.147.01-.22A4.11 4.11 0 0 1 5 10c0-1.33.639-2.512 1.63-3.326c.113-.12.224-.234.328-.342l.002-.001c.533-.55.881-.925.997-1.432A1.5 1.5 0 0 1 8.5 2ZM14 14v-3.5c0-.055-.003-.108-.008-.161a.501.501 0 0 1-.002-.093a3.148 3.148 0 0 0-.529-2.002A5.206 5.206 0 0 0 13.287 8H6.718a3.191 3.191 0 0 0-.708 2.246a.5.5 0 0 1-.001.093A1.526 1.526 0 0 0 6 10.5V14h8Zm-8 1v.5a1.5 1.5 0 0 0 2.437 1.171a.5.5 0 0 1 .626 0c.257.206.582.329.937.329c.355 0 .68-.123.937-.329a.5.5 0 0 1 .626 0A1.5 1.5 0 0 0 14 15.5V15H6Zm5.046-10h-2.09c-.157.872-.714 1.446-1.24 1.987L7.705 7h4.661l-.042-.041C11.79 6.434 11.211 5.864 11.046 5ZM8.5 4h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1Z`}
                    ></ShowProduct>
                );
              }
              return <div css={styles.productList}>{items}</div>;
            })()}
        {/* 右側　選択商品と支払い一覧 */}
        <div css={styles.right}>
          <div css={styles.selected}>
            <div css={styles.showItem}>
              <ShowProduct
                imgPath={`M8.5 2h3a1.5 1.5 0 0 1 .547 2.897c.121.487.477.856 1.022 1.393l.01.01c.384.378.839.826 1.237 1.423a4.144 4.144 0 0 1 .674 2.558c.007.072.01.145.01.219v5a2.5 2.5 0 0 1-3.75 2.165A2.49 2.49 0 0 1 10 18a2.49 2.49 0 0 1-1.25-.335A2.5 2.5 0 0 1 5 15.5v-5c0-.074.003-.147.01-.22A4.11 4.11 0 0 1 5 10c0-1.33.639-2.512 1.63-3.326c.113-.12.224-.234.328-.342l.002-.001c.533-.55.881-.925.997-1.432A1.5 1.5 0 0 1 8.5 2ZM14 14v-3.5c0-.055-.003-.108-.008-.161a.501.501 0 0 1-.002-.093a3.148 3.148 0 0 0-.529-2.002A5.206 5.206 0 0 0 13.287 8H6.718a3.191 3.191 0 0 0-.708 2.246a.5.5 0 0 1-.001.093A1.526 1.526 0 0 0 6 10.5V14h8Zm-8 1v.5a1.5 1.5 0 0 0 2.437 1.171a.5.5 0 0 1 .626 0c.257.206.582.329.937.329c.355 0 .68-.123.937-.329a.5.5 0 0 1 .626 0A1.5 1.5 0 0 0 14 15.5V15H6Zm5.046-10h-2.09c-.157.872-.714 1.446-1.24 1.987L7.705 7h4.661l-.042-.041C11.79 6.434 11.211 5.864 11.046 5ZM8.5 4h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1Z`}
              ></ShowProduct>
            </div>
          </div>
          <div css={styles.payList}></div>
        </div>
      </main>
    </>
  );
}
