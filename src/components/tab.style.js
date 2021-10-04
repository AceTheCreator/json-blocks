import styled from "styled-components";


export const TabWrapper = styled.div`
  min-width: 200px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`;

export const TabLists = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -5px;
`;

export const TabList = styled.li`
  cursor: pointer;
  width: 25px;
  padding: 8px;
  background: #e9ecef;
  display: flex;
  align-items: center;
  margin-left: 5px;
  justify-content: center;
  height: 25px;
  border-radius: 5px;
  &:hover {
    background: #ced4da;
  }
`;