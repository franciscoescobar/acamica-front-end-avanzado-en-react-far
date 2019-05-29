import React, { useEffect, useState } from "react";
import List from "../../components/List";
import Title from "../../components/Title";
import TabBar from "../../components/TabBar";
const Search = ({ match }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.canillitapp.com/search/${match.params.query}`
      );
      const json = await response.json();
      const lastNews = json.slice(0, 21);
      setNews(lastNews);
    };
    fetchData();
  }, [match.params.query]);

  return (
    <div>
      <TabBar />
      <Title title={`Resultados para: ${match.params.query}`} />
      <List noticias={news} />
    </div>
  );
};

export default Search;
