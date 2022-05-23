import React, { useState } from "react";
import './style.css';
import Menu from './menuApi.js';
import MenuCard from './MenuCard';
import Navbar from "./Navbar";


const uniqueMenuList =[
  ...new Set(
    Menu.map((currEle) => {
      return currEle.category;
    })
  ), 
  "All",
];

console.log(uniqueMenuList);

const Restaurant = () => {

  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueMenuList);
  console.log(menuData);

  const onBreakfastClick = (category) => {
    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    // console.log(category);
    const filteredData  = Menu.filter((currEle)=>{console.log(currEle.category);return currEle.category === category});
    // console.log(filteredData);
    setMenuData(filteredData);
  };

  return (
    <>
      <Navbar onBreakfastClick={onBreakfastClick} menuList={ menuList} />
      <MenuCard data={ menuData }/>
    </>
  );
};

export default Restaurant;
