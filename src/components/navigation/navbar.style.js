/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const NavbarWrapper = styled.div`
  height: 10vh;
  width: 99.85%;
  height: 7vh;
  border: 1px solid #e3e9ed;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0px;
  border: none;
  background: #f3f3f3;
  border-radius: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  &:hover {
    background: #0998fa;
    & > div {
      & > span {
        color: white;
      }
    }
  }
  & > div {
    padding-top: 3px;
    & > span {
      color: #808080;
      font-size: 15px;
    }
  }
`;

export const LeftNavLink = styled.div`
  padding-left: 10px;
  width: 20%;
  display: flex;
  align-items: center;
  & > div {
    font-size: 14px;
    font-weight: bold;
    color: #403a34;
    padding-left: 5px;
  }
  & > button {
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0px;
    border: none;
    background: #f3f3f3;
    border-radius: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    & > div {
      padding-top: 3px;
      & > span {
        color: #808080;
        font-size: 15px;
      }
    }
  }
`;

export const RightNavLink = styled.div`
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
  alig-items: center;
  width: 20%;
`;

export const CenterNavLink = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: -50px;
  }
`;

export const CenterNavLinks = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  &:hover {
    & > span {
      color: #0998fa;
    }
    & > button {
      background: #0998fa;
      & > div {
        & > span {
          color: white;
        }
      }
    }
  }
  & > button {
    width: 28px;
    height: 28px;
    background: ${(props) => props.active && "#0998fa"};
    & > div {
      & > span {
        color: ${(props) => (props.active && "white") || "#808080"};
      }
    }
  }
  & > span {
    font-size: 12px;
    color: ${(props) => (props.active && "#0998fa") || "#808080"};
    margin-top: 3px;
  }
`;
