/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const PlaygroundWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
`;

export const PlaygroundContainer = styled.div`
  width: 100%;
  height: 90vh;
`;

export const PreviewWrapper = styled.div``;

export const PreviewHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  padding-top: 30px;
  color: white;
`;

export const ErrorLists = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  & > button {
    border: none;
    font-size: 14px;
    margin: 0;
    background: white;
    color: #862940;
    cursor: pointer;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    border-radius: 5px;
    &:hover {
      box-shadow: 0px 10px 20px rgb(0 0 0 / 5%);
    }
  }
`;
