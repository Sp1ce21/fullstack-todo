import React, { FC } from "react";
import { HeaderContainer, HeaderStyles, Title } from "./style";

const Header: FC = () => (
  <HeaderStyles>
    <div className="container">
      <HeaderContainer>
        <Title>To Do List</Title>
      </HeaderContainer>
    </div>
  </HeaderStyles>
);

export default Header;
