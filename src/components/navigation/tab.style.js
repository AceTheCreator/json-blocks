import styled from "styled-components";

export const TabWrapper = styled.div`
  width: 100px;
  height: 100%;
  padding: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`;

export const BlocksTabWrapper = styled(TabWrapper)`
  width: 200px;
  box-shadow: none;
  border: 1px solid #e3e9ed;
  border-left: none;
`;

export const TabLists = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: -10px;
`;

export const TabList = styled.li`
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  background: ${(props) => props.active && "#ced4da"};
  &:hover {
    background: #ced4da;
  }
  & > span {
    margin-top: 10px;
    font-size: 12px;
    font-weight: bold;
  }
`;
