import React from "react";
import { Title, ExpandLink, FlexContainer, ContainerWrapper } from "./styled";
const Container = ({ title, linkTo, linkText, content }) => (
  <ContainerWrapper>
    <FlexContainer>
      <Title>{title}</Title>
      <ExpandLink href={linkTo ? linkTo : ""}>
        {linkText ? linkText : ""}
      </ExpandLink>
    </FlexContainer>
    {content}
  </ContainerWrapper>
);

export default Container;
