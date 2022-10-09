import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from "react";
import { Route, Routes} from "react-router-dom";
import { routConfig } from 'shared/config/routeConfig/routeConfig';


export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ) )}
      </Routes>
    </Suspense>
  );
};


