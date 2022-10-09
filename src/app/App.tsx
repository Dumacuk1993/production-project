import { Link } from "react-router-dom";
import "./styles/index.scss";
import { className } from "shared/lib/classNames/classNames";
import { AppRouter } from 'app/providers/router';
import { UseTheme } from 'app/providers/ThemeProvider';



export const App = () => {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={className("app", {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter/>
    </div>
  );
};
