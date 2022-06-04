import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ToDoBlockStyle = styled.div`
  background-color: ${colors.lightGrey};
  color: ${colors.white};
`;

export const ToDoUp = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 30px 25px;
`;

export const DateStyle = styled.div`
  font-size: 30px;
`;

export const NumberStyle = styled.div`
  align-self: flex-end;
`;

export const ToDoDown = styled.div``;
