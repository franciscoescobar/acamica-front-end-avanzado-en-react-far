import React, { useEffect, useState } from "react";
import List from "../../components/List";
import Title from "../../components/Title";
import LoadingBar from "../../components/LoadingBar";
import TabBar from "../../components/TabBar";
const Search = ({ match }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.canillitapp.com/search/${match.params.query}`
        );
        const json = await response.json();
        const lastNews = json.slice(0, 21);
        setNews(lastNews);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [match.params.query]);

  return (
    <div>
      <TabBar />
      <Title title={`Resultados para: ${match.params.query}`} />
      <LoadingBar loading={loading} />
      {error ? <h1>{error}</h1> : <List noticias={news} />}
    </div>
  );
};

export default Search;
