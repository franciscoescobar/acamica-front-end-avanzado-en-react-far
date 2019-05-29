import React, { useState } from "react";
import {
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose,
  Input,
  Control,
  Field
} from "bloomer";
import { withRouter } from "react-router-dom";
import { StyledHeader, StyledLink, StyledSpan, LogoTitle } from "./styled";
const Header = ({ history }) => {
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleIconClick = () => {
    setModal(!modal);
  };
  const handleKeyDown = event => {
    if (event.key === "Enter") {
      handleIconClick();
      history.push(`/search/${inputValue}`);
    }
  };
  const handleOnInputChange = event => {
    setInputValue(event.target.value);
  };
  return (
    <StyledHeader>
      <LogoTitle>Canillitapp</LogoTitle>
      <StyledLink to="/">
        <img src="https://www.canillitapp.com/static/icon.png" />
      </StyledLink>
      <StyledSpan className="icon" onClick={handleIconClick}>
        <i className="fa fa-search" />
      </StyledSpan>
      <Modal isActive={modal}>
        <ModalBackground />
        <ModalContent>
          <Field>
            <Control>
              <Input
                type="text"
                placeholder="Buscar Noticias"
                onKeyDown={handleKeyDown}
                onChange={handleOnInputChange}
                value={inputValue}
              />
            </Control>
          </Field>
        </ModalContent>
        <ModalClose onClick={handleIconClick} />
      </Modal>
    </StyledHeader>
  );
};

export default withRouter(Header);
