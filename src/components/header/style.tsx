import styled from "styled-components";
import { colors } from "../../constants/colors";

export const HeaderStyles = styled.header`
  background-color: ${colors.yellow};
`;
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const Title = styled.header`
  color: ${colors.darkGrey};
  font-size: 24px;
  font-weight: 600;
`;
