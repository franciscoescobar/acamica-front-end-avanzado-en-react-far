import React from "react";
import { Media, MediaLeft, MediaContent, Content } from "bloomer";
import PropTypes from "prop-types";
import { ListWrapper } from "./styled";

const ListCard = ({ noticia }) => {
  return (
    <ListWrapper href={noticia.url}>
      <Media
        style={{
          backgroundColor: "#ffffff",
          width: "1068px",
          paddingTop: 0,
          borderRadius: "5px"
        }}
      >
        <MediaLeft>
          <div
            style={{
              width: "200px",
              height: "120px",
              backgroundImage: `url(${noticia.img_url})`,
              backgroundSize: "auto 100%",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px"
            }}
          />
        </MediaLeft>
        <MediaContent
          style={{
            display: "flex",
            alignItems: "center",
            height: "120px",
            borderRadius: "5px"
          }}
        >
          <Content style={{ flex: 1 }}>
            <h4>{noticia.title}</h4>
            <small>{`${new Date(noticia.date).getHours()}:${new Date(
              noticia.date
            ).getMinutes()} | ${noticia.source_name}`}</small>
          </Content>
        </MediaContent>
      </Media>
    </ListWrapper>
  );
};
ListCard.propTypes = {
  noticia: PropTypes.shape({
    date: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    source_name: PropTypes.string.isRequired
  }).isRequired
};
export default ListCard;
