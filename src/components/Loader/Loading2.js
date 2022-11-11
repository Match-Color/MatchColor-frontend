// Loading2.js
import React from "react";
import { Background, LoadingText } from "./Styles2";
import Spinner from "../../assets/images/spinner2.gif";
import "./Loading.css";

export function Loading2() {
  return (
    <Background>
      <LoadingText className="loadingText">
        컬러 매칭중...
        <br />
        잠시만 기다려 주세요.
      </LoadingText>
      <img src={Spinner} alt="로딩중" width="10%" />
    </Background>
  );
}

export default Loading2;
