import React from "react";
import { Card, CardImage, CardContent, Image, Content } from "bloomer";
import { NewsSmall, NewsTitle, GridWrapper } from "./styled";
const GridCard = ({ noticia }) => (
  <GridWrapper href={noticia.url}>
    <Card className="card">
      <CardImage>
        <Image isRatio="4:3" src={noticia.img_url} />
      </CardImage>
      <CardContent>
        <Content
          style={{
            display: "flex",
            flexDirection: "column",
            height: "193px",
            justifyContent: "space-between"
          }}
        >
          <NewsTitle>{noticia.title}</NewsTitle>
          <br />
          <NewsSmall>{`${new Date(noticia.date).getHours()}:${new Date(
            noticia.date
          ).getMinutes()} | ${noticia.source_name}`}</NewsSmall>
        </Content>
      </CardContent>
    </Card>
  </GridWrapper>
);
export default GridCard;
