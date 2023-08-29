import { Suspense, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setError, setSuccess } from 'app/features/userSlice';
import { fetchPlaylistsAsync } from 'app/features/playlistSlice';
import Modal from 'react-modal';
import { auth } from './config/firebase';

import LoadingPage from './pages/LoadingPage';
import { userApi } from 'api';
import { renderRoutes } from 'routes/renderRoutes';
import { publicRoutes, privateRoutes } from './routes';

Modal.setAppElement('#root');

function App() {
  const { isAuth, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setLoading());
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const info = {
          UID: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };

        try {
          const userData = await userApi.getByUID(info.UID);
          await dispatch(fetchPlaylistsAsync(userData._id));
          dispatch(setSuccess({ ...info, ...userData }));
        } catch (error) {
          dispatch(setError(error.message));
        }
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
        {loading ? (
          <LoadingPage />
        ) : (
          <div className="app" id="app">
            <Routes>
              {renderRoutes(publicRoutes, isAuth)}
              {renderRoutes(privateRoutes, isAuth)}
            </Routes>
          </div>
        )}
      </Suspense>
    </Router>
  );
}

export default App;
