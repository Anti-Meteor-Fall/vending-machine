/* eslint-disable @next/next/no-img-element */
import { getWeatherInfo } from "@/pages/api/vending";
import { cashInputValue } from "@/states/cashInputValue";
import { darkModeState } from "@/states/darkModeState";
import { WeatherData } from "@/types/api";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useTime } from "react-timer-hook";
import { useRecoilState } from "recoil";

export default function Navi() {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>();

  const [inputValue] = useRecoilState<number>(cashInputValue);

  const [darkMode] = useRecoilState(darkModeState);


  useEffect(() => {
    getWeatherInfo().then((res) => setWeatherData(res));
  }, []);

  const { minutes, hours, ampm } = useTime({ format: "12-hour" });

  let url;
  let text;
  let title;
  if (weatherData) {
    title = weatherData.forecasts[0].telop;

    text = weatherData.description.text;
    url = weatherData.forecasts[0].image.url;
  }
  const styles = {
    navi: darkMode? css`
      color: #fff;
      position: fixed;
      width: 100vw;
    `:
    css`
      position: fixed;
      width: 100vw;
    `
    ,
    rightDiv: css`
      position: absolute;
      top: 0;
      right: 0;
      margin: 0px 40px;
    `,
    flex: css`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;
    `,
    time: css`
      margin-right: 30px;
      height: 0px;
      font-size: 1.4rem;
      font-family: "Noto Sans JP", sans-serif;
    `,
    input: css`
      font-size: 1.4rem;
      font-family: "Noto Sans JP", sans-serif;
      margin-right: 30px;
    `,
  };
  return (
    <nav css={styles.navi}>
      {/* {text} */}
      <div css={styles.rightDiv}>
        <div css={styles.flex}>
          <div css={styles.time}>
            {ampm.toUpperCase()} {("00" + hours).slice(-2)}:
            {("00" + minutes).slice(-2)}
          </div>
          <img src={url} alt={title} />
        </div>
        <div css={styles.input}>投入金額　{inputValue}円</div>
      </div>
    </nav>
  );
}
