import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledHeader = styled.header`
  background-color: #ffffff;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  flex-basis: 55px;
  margin-left: -146px;
`;
export const StyledSpan = styled.span`
  margin-right: 20px;
  font-size: 24px;
`;
export const LogoTitle = styled.h1`
  margin-left: 20px;
  font-size: 36px;
`;
