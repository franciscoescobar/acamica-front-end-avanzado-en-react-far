import React, { useEffect, useState } from "react";
import List from "../../components/List";
import Title from "../../components/Title";
import TabBar from "../../components/TabBar";
import LoadingBar from "../../components/LoadingBar";
const Category = ({ match }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const categories = [
    { id: 1, name: "Política" },
    { id: 2, name: "Internacionales" },
    { id: 3, name: "Tecnología" },
    { id: 4, name: "Espectáculos" },
    { id: 5, name: "Deportes" }
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.canillitapp.com/news/category/${match.params.categoryId}`
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
  }, [match.params.categoryId]);
  const selectedCategory = categories[match.params.categoryId - 1].name;
  return (
    <div>
      <TabBar selectedCategory={selectedCategory} />
      <Title title={`${selectedCategory}`} />
      <LoadingBar loading={loading} />
      {error ? <h1>{error}</h1> : <List noticias={news} />}
    </div>
  );
};

export default Category;
