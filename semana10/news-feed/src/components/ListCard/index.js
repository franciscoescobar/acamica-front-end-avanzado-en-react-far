import React from "react";
import {
  Media,
  MediaLeft,
  MediaContent,
  Content,
  Level,
  LevelLeft,
  LevelItem,
  Icon
} from "bloomer";
const ListCard = ({ noticia }) => {
  const handleCardClick = () => {
    document.location.href = noticia.url;
  };
  return (
    <Media onClick={handleCardClick}>
      <MediaLeft>
        <div
          style={{
            width: "200px",
            height: "120px",
            backgroundImage: `url(${noticia.img_url})`,
            backgroundSize: "auto 100%"
          }}
        />
      </MediaLeft>
      <MediaContent>
        <Content>
          <h4>{noticia.title}</h4>
          <p>{`${new Date(noticia.date).getHours()}:${new Date(
            noticia.date
          ).getMinutes()} | ${noticia.source_name}`}</p>
        </Content>
        <Level isMobile>
          <LevelLeft>
            <LevelItem href="#">
              <Icon isSize="small">
                <span className="fa fa-reply" aria-hidden="true" />
              </Icon>
            </LevelItem>
            <LevelItem href="#">
              <Icon isSize="small">
                <span className="fa fa-retweet" aria-hidden="true" />
              </Icon>
            </LevelItem>
            <LevelItem href="#">
              <Icon isSize="small">
                <span className="fa fa-heart" aria-hidden="true" />
              </Icon>
            </LevelItem>
          </LevelLeft>
        </Level>
      </MediaContent>
    </Media>
  );
};

export default ListCard;
