import { useEffect } from 'react';
import Modal from 'react-modal';
import { Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setError, setSuccess } from 'app/features/userSlice';
import LoginPage from './pages/LoginPage';
import LoadingPage from './pages/LoadingPage';

import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes, privateRoutes } from './routes';
import { auth } from './config/firebase';
import { userApi } from 'api';

Modal.setAppElement('#root');

function App() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const info = {
          UID: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };

        userApi
          .getByUID(info.UID)
          .then((userData) => {
            dispatch(setSuccess({ ...info, ...userData }));
          })
          .catch((error) => {
            dispatch(setError(error.message));
          });
      } else {
        dispatch(setError('User is not signed in'));
        console.log('User is not signed in');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <div className="app" id="app">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
            {privateRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    isAuth ? (
                      <Layout>
                        <Page />
                      </Layout>
                    ) : (
                      <LoginPage />
                    )
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
