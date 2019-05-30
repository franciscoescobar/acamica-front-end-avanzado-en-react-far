import React from "react";
import { Tabs, TabList, Tab } from "bloomer";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const TabBar = ({ selectedCategory }) => (
  <Tabs
    isAlign="centered"
    style={{ width: "100%", backgroundColor: "#ffffff", marginTop: "1px" }}
  >
    <TabList>
      <Tab isActive={selectedCategory === "Home"}>
        <Link to="/">Home</Link>
      </Tab>
      <Tab isActive={selectedCategory === "Política"}>
        <Link to="/category/1">Política</Link>
      </Tab>
      <Tab isActive={selectedCategory === "Internacionales"}>
        <Link to="/category/2">Internacionales</Link>
      </Tab>
      <Tab isActive={selectedCategory === "Tecnología"}>
        <Link to="/category/3">Tecnología</Link>
      </Tab>
      <Tab isActive={selectedCategory === "Espectáculos"}>
        <Link to="/category/4">Espectáculos</Link>
      </Tab>
      <Tab isActive={selectedCategory === "Deportes"}>
        <Link to="/category/5">Deportes</Link>
      </Tab>
    </TabList>
  </Tabs>
);
TabBar.propTypes = {
  selectedCategory: PropTypes.string.isRequired
};
export default TabBar;
