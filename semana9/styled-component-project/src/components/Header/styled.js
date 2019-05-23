import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.h1`
  margin-left: 20px;
  font-weight: 600;
  font-size: 26px;
  line-height: 42px;

  /* identical to box height, or 131% */
  letter-spacing: 0.5px;

  color: #171d33;
`;
export const HeaderAvatar = styled.img`
  margin-top: 10px;
  margin-right: 20px;
  flex-basis: 40px;
  border-radius: 50%;
  border: 3px solid #dcdcdc;
`;
