import React from "react";
import CreditCard from "../CreditCard";
import NewCreditCard from "../NewCreditCard";
import { CreditCardsWrapper } from "./styled";
const CreditCards = ({ cards }) => (
  <CreditCardsWrapper>
    <NewCreditCard className="credit-flex" />

    {cards.map(card => {
      return (
        <CreditCard
          side={card.side}
          logo={card.logo}
          balance={card.balance}
          lastNumbers={card.lastNumbers}
          className="credit-flex"
          key={card.lastNumbers}
        />
      );
    })}
  </CreditCardsWrapper>
);

export default CreditCards;
