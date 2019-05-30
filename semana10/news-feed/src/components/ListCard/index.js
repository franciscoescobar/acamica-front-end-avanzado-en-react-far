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
import styled from "styled-components";
const ListWrapper = styled.a`
  margin-bottom: 20px;
`;

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
    </ListWrapper>
  );
};

export default ListCard;
