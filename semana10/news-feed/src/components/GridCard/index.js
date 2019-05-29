import React from "react";
import { Card, CardImage, CardContent, Image, Content } from "bloomer";
import { withRouter } from "react-router-dom";
const GridCard = ({ noticia }) => {
  const handleOnClick = () => {
    document.location.href = noticia.url;
  };
  return (
    <Card
      style={{ flexBasis: "375px", marginBottom: "40px" }}
      onClick={handleOnClick}
    >
      <CardImage>
        <Image isRatio="4:3" src={noticia.img_url} />
      </CardImage>
      <CardContent>
        <Content>
          <h3>{noticia.title}</h3>
          <br />
          <small>{`${new Date(noticia.date).getHours()}:${new Date(
            noticia.date
          ).getMinutes()} | ${noticia.source_name}`}</small>
        </Content>
      </CardContent>
    </Card>
  );
};
export default withRouter(GridCard);
