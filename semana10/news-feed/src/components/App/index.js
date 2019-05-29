import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Category from "../../pages/Category";
import Search from "../../pages/Search";
import Header from "../Header";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/category/:categoryId" component={Category} />
        <Route path="/search/:query" component={Search} />
      </div>
    </Router>
  );
};

export default App;
