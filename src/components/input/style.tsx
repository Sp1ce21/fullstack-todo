import styled from "styled-components";
import { colors } from "../../constants/colors";

export const InputStyle = styled.div`
  flex: 1 1 auto;
`;

export const Title = styled.div<{ isFocus: boolean }>`
  font-size: 12px;
  color: ${({ isFocus }) => (isFocus ? `${colors.yellow}` : `${colors.white}`)};
  transition: 0.1s;
`;

export const Line = styled.div<{ isFocus: boolean; errors: boolean }>`
  height: 1px;
  min-width: calc(100% + 8px);
  margin-top: 3px;
  background-color: ${({ isFocus }) =>
    isFocus ? `${colors.yellow}` : `${colors.white}`};
  background-color: ${({ errors }) => errors && `${colors.red}`};
  transition: 0.1s;
`;
export const Input = styled.input`
  min-width: 100%;
  background-color: ${colors.lightGrey};
  outline: none;
  border: none;
  color: ${colors.white};
`;

export const CheckboxStyle = styled.div`
  background-color: ${colors.lightGrey};
  width: 9px;
  height: 9px;
  outline: none;
  border: 3px solid ${colors.white};
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    border: 3px solid ${colors.yellow};
  }
`;
