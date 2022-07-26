import React from "react";
import { Route, Routes } from "react-router-dom";

import { CardContainer } from "./Card/CardContainer";
import DetailContainer from "./Detail/DetailContainer";
import Cart from "./Cart/Cart";
import Favorites from "./Favorites/Favorites";
import Checkout from "./Checkout/Checkout";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/category/:categoria" element={<CardContainer />} />
        <Route path="/detail/:id" element={<DetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/checkout/:idCompra" element={<Checkout/>}/>
      </Routes>
    </div>
  );
};

export default Main;
