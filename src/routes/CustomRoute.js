// router.js
import { Navigate, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CustomRoute({ isPrivate, ...route }) {
  const { isAuth } = useSelector((state) => state.user);

  if (isPrivate && !isAuth) {
    return <Navigate to="/login" />;
  }

  return <Route {...route} />;
}

export default CustomRoute;
