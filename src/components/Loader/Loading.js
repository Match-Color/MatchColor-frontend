// Loading.js
import React from "react";
import { Background, LoadingText } from "./Styles";
import Spinner from "../../assets/images/spinner.gif";
import "./Loading.css";

export function Loading() {
  return (
    <Background>
      <LoadingText className="loadingText">
        색 추출중...
        <br />
        잠시만 기다려 주세요.
      </LoadingText>
      <img src={Spinner} alt="로딩중" width="10%" />
    </Background>
  );
}

export default Loading;
