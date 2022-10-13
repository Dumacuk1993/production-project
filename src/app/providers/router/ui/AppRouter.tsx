import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routConfig } from 'shared/config/routeConfig/routeConfig';

export function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div key={path} className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
