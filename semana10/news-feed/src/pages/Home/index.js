import React, { useEffect, useState } from "react";
import Grid from "../../components/Grid";
import Title from "../../components/Title";
import TabBar from "../../components/TabBar";
const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.canillitapp.com/latest/${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
      );
      const json = await response.json();
      const lastNews = json.slice(0, 21);
      setNews(lastNews);
    };
    fetchData();
  }, []);
  return (
    <div>
      <TabBar selectedCategory="Home" />
      <Title title="Hoy" />
      <Grid noticias={news} />
    </div>
  );
};
export default Home;
