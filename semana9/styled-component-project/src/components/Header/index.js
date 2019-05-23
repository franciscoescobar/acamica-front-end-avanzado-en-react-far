import React from "react";
import { HeaderWrapper, HeaderTitle, HeaderAvatar } from "./styled";

const Header = ({ image }) => (
  <div>
    <HeaderWrapper>
      <HeaderTitle>Send Money</HeaderTitle>
      <HeaderAvatar src={image} />
    </HeaderWrapper>
  </div>
);

export default Header;
