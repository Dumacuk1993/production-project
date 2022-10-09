import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from 'app/providers/router';
import { UseTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar/ui/Navbar';



export const App = () => {
  const { theme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar/>
      <AppRouter />
    </div>
  );
};
