import { Suspense, useContext, useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { UseTheme } from './theme/UseTheme';
import { className } from './helpers/classNames/classNames';


export const App = () => {

  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={className('app', {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
