import React from "react";

import { UserCardWrapper, UserCardBody } from "./styled";
import { HeaderAvatar } from "../Header/styled";

const UserCard = ({ image, name, selected }) => (
  <UserCardWrapper style={selected ? { background: "#613eea" } : {}}>
    <UserCardBody>
      <HeaderAvatar src={image} className="body-value" />
      <p className="body-value">{name}</p>
    </UserCardBody>
  </UserCardWrapper>
);

export default UserCard;
