import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout';
import LoginPage from 'pages/LoginPage/LoginPage';

export const renderRoutes = (routes, isAuth) => {
  return routes.map((route, index) => {
    const Page = route.component;
    let Layout = route.layout || DefaultLayout;

    if (route.layout === null) {
      Layout = Fragment;
    }

    return (
      <Route
        key={index}
        path={route.path}
        element={<Layout>{isAuth || !route.private ? <Page /> : <LoginPage />}</Layout>}
      />
    );
  });
};
