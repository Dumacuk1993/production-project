import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import { className } from "../shared/lib/classNames/classNames";
import { UseTheme } from './providers/ThemeProvider';
import { AboutPage } from '../pages/AboutPage';
import { MainPage } from '../pages/MainPage';

export const App = () => {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={className("app", {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
