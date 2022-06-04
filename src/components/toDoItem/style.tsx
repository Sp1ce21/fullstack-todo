import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Row = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

export const Column = styled.div<{ isDone: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  ${({ isDone }) => isDone && `margin-left: 15px`}
`;

export const Task = styled.div<{ isDone: boolean }>`
  font-size: 15px;
  ${({ isDone }) =>
    isDone &&
    `text-decoration: line-through;
     color: ${colors.yellow}`}
`;

export const DateStyle = styled.div`
  font-size: 13px;
`;

export const DeleteIcon = styled.div`
  font-weight: 600;
  background-color: ${colors.white};
  color: ${colors.darkGrey};
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.1s;
  &:hover {
    background-color: ${colors.yellow};
    transition: 0.1s;
  }
`;
