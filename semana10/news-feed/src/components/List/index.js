import React from "react";
import ListCard from "../ListCard";
import { ListWrapper } from "./styled";
const List = ({ noticias }) => (
  <ListWrapper>
    {noticias.map(noticia => (
      <ListCard noticia={noticia} key={noticia.news_id} />
    ))}
  </ListWrapper>
);

export default List;
