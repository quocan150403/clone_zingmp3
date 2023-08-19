import { useEffect } from 'react';
import Modal from 'react-modal';
import { Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from 'app/features/userSlide';
import Login from './pages/Login';

import { DefaultLayout } from './layouts';
import { publicRoutes, privateRoutes } from './routes';
import { auth } from './config/firebase';
import { userApi } from 'api';

Modal.setAppElement('#root');

function App() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserInfo = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const info = {
            UID: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          };
          const userData = await userApi.getByUID(info.UID);
          dispatch(setCurrentUser({ ...info, ...userData }));
        } else {
          console.log('user is not signed in');
        }
      });
    };

    fetchUserInfo();
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback={<p> Loading...</p>}>
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
                      <Login />
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
