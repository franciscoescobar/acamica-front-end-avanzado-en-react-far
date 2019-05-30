import React, { useEffect, useState } from "react";
import Grid from "../../components/Grid";
import Title from "../../components/Title";
import LoadingBar from "../../components/LoadingBar";
import TabBar from "../../components/TabBar";
const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.canillitapp.com/latest/${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
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
  }, []);
  return (
    <div>
      <TabBar selectedCategory="Home" />
      <Title title="Hoy" />
      <LoadingBar loading={loading} />
      <Grid noticias={news} />
    </div>
  );
};
export default Home;
