import React from "react";
import GridCard from "../GridCard";
import { GridWrapper } from "./styled";
import PropTypes from "prop-types";
const Grid = ({ noticias }) => (
  <GridWrapper>
    {noticias.map(noticia => (
      <GridCard key={noticia.news_id} noticia={noticia} />
    ))}
  </GridWrapper>
);

Grid.propTypes = {
  noticias: PropTypes.arrayOf(
    PropTypes.shape({
      news_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired
    })
  ).isRequired
};
export default Grid;
