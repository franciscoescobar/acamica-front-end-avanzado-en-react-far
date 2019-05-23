import React from "react";

import {
  CreditCardWrapper,
  CreditCardHeader,
  CreditCardBody,
  CreditCardFooter
} from "./styled";

const CreditCard = ({ logo, lastNumbers, balance, side }) => (
  <CreditCardWrapper
    style={side ? { background: "#f0f1f4", color: "#757F8C" } : {}}
  >
    <CreditCardHeader>
      <p>{logo}</p>
    </CreditCardHeader>

    <CreditCardBody>
      <p>****</p>
      <p>{lastNumbers}</p>
    </CreditCardBody>

    <CreditCardFooter>
      <div>
        <p>{balance}</p>
      </div>
    </CreditCardFooter>
  </CreditCardWrapper>
);

export default CreditCard;
