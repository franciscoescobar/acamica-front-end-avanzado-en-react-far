import React from "react";
import UserCard from "../UserCard";
import { UserCardsWrapper } from "./styled";
const UserCards = ({ cards }) => (
  <UserCardsWrapper>
    {cards.map(card => {
      return (
        <UserCard
          selected={card.selected}
          image={card.image}
          name={card.name}
          key={card.name}
        />
      );
    })}
  </UserCardsWrapper>
);

export default UserCards;
