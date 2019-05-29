import React from "react";
import GridCard from "../GridCard";
import { GridWrapper } from "./styled";
const Grid = ({ noticias }) => (
  <GridWrapper>
    {noticias.map(noticia => (
      <GridCard key={noticia.news_id} noticia={noticia} />
    ))}
  </GridWrapper>
);

export default Grid;
