/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";

const styles = {
  flex: css `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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
const buttonProp = { width: 120, padding: 2, margin: 2 };

const PayList = () => {
  return (
    <>
      <ul css={styles.flex}>
        <li css={styles.payButton}>
          <Button variant="contained" size="large" sx={buttonProp}>
            現金
          </Button>
        </li>
        <li css={styles.payButton}>
          <Button variant="contained" size="large" sx={buttonProp}>
            PayPay
          </Button>
        </li>
        <li css={styles.payButton}>
          <Button variant="contained" size="large" sx={buttonProp}>
            ID
          </Button>
        </li>
        <li css={styles.payButton}>
          <Button variant="contained" size="large" sx={buttonProp}>
            ICカード
          </Button>
        </li>
      </ul>
    </>
  );
};
export default PayList;
