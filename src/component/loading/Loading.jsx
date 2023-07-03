import { Spin } from "antd";
import React from "react";
import styled from "styled-components";
const LoadingStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loading = () => {
  return (
    <LoadingStyled>
      <Spin></Spin>
    </LoadingStyled>
  );
};

export default Loading;
