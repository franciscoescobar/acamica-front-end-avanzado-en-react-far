import React from "react";
import { HeaderWrapper, HeaderTitle, HeaderAvatar, image } from "./styled";

const Header = ({ image }) => (
  <div>
    <HeaderWrapper>
      <HeaderTitle>Send Money</HeaderTitle>
      <HeaderAvatar src={image} />
    </HeaderWrapper>
  </div>
);

export default Header;
