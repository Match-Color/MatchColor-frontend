// Styles.js
import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 200vh;
  bottom: 0;
  right: -140px;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 2rem "Noto Sans KR";
  text-align: center;
`;
