import React, { useEffect, useState } from "react";
import List from "../../components/List";
import Title from "../../components/Title";
import TabBar from "../../components/TabBar";
const Category = ({ match }) => {
  const [news, setNews] = useState([]);
  const [categories] = useState([
    { id: 1, name: "Política" },
    { id: 2, name: "Internacionales" },
    { id: 3, name: "Tecnología" },
    { id: 4, name: "Espectáculos" },
    { id: 5, name: "Deportes" }
  ]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.canillitapp.com/news/category/${match.params.categoryId}`
      );
      const json = await response.json();
      const lastNews = json.slice(0, 21);
      setNews(lastNews);
    };
    fetchData();
  }, [match.params.categoryId]);
  const selectedCategory = categories[match.params.categoryId - 1].name;
  return (
    <div>
      <TabBar selectedCategory={selectedCategory} />
      <Title title={`${selectedCategory}`} />
      <List noticias={news} />
    </div>
  );
};

export default Category;
