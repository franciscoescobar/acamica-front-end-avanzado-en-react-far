import React from "react";
import { NewCreditCardWrapper, NewCreditCardBody } from "./styled";
const NewCreditCard = () => (
  <NewCreditCardWrapper>
    <NewCreditCardBody>
      <i className="body-value fas fa-plus" />
      <p className="body-value">New credit card</p>
    </NewCreditCardBody>
  </NewCreditCardWrapper>
);

export default NewCreditCard;
