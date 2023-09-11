import { Suspense, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setError, setSuccess } from 'app/features/userSlice';
import { fetchPlaylistsAsync } from 'app/features/playlistSlice';
import firebaseConfig from 'config/firebase';
import Modal from 'react-modal';
import { initializeApp } from 'firebase/app';
import { userApi } from 'api';
import { renderRoutes } from 'routes/renderRoutes';
import { publicRoutes, privateRoutes } from './routes';
import LoadingPage from './pages/LoadingPage';
import { getAuth } from 'firebase/auth';
import AuthForm from 'components/AuthForm';

Modal.setAppElement('#root');

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const { isAuth, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setLoading());
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userInfo = {
          email: user.email,
          fullName: user.displayName,
          imageUrl: user.photoURL,
          UID: user.uid,
        };

        try {
          const userRes = await userApi.getByUID(userInfo.UID);
          await dispatch(fetchPlaylistsAsync(userRes._id));
          dispatch(setSuccess({ ...userInfo, ...userRes }));
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
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        {loading ? (
          <LoadingPage />
        ) : (
          <div className="app position-relative" id="app">
            <Routes>
              {renderRoutes(publicRoutes, isAuth)}
              {renderRoutes(privateRoutes, isAuth)}
            </Routes>
            <AuthForm auth={auth} />
          </div>
        )}
      </Suspense>
    </Router>
  );
}

export default App;
