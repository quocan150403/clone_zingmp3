import Modal from 'react-modal';
import { Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts';
import { publicRoutes } from './routes';

import './App.scss';

Modal.setAppElement('#root');

function App() {
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
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
