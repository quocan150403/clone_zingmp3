import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeAuthForm, setSuccess } from 'app/features/userSlice';

import './AuthForm.scss';
import images from 'assets/images';
import { userApi } from 'api';

export default function AuthForm({ auth }) {
  const dispatch = useDispatch();
  const { isShowAuthForm, isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          signInSuccess(authResult);
          return false;
        },
        uiShown: function () {
          document.getElementById('loader').style.display = 'none';
        },
      },
      signInFlow: 'popup',
      signInSuccessUrl: '',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      ],
      tosUrl: '<your-tos-url>',
      privacyPolicyUrl: '<your-privacy-policy-url>',
    });
  }, [isAuth, auth]);

  async function checkUser(UID) {
    try {
      const user = await userApi.getByUID(UID);
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  const signInSuccess = async (authResult) => {
    if (authResult) {
      const userInfo = {
        email: authResult.user.email,
        fullName: authResult.user.displayName,
        imageUrl: authResult.user.photoURL,
        UID: authResult.user.uid,
      };

      try {
        const existingUser = await checkUser(userInfo.UID);
        if (!existingUser) {
          const newInfo = await userApi.createUser(userInfo);
          dispatch(setSuccess(newInfo));
        } else {
          dispatch(setSuccess(existingUser));
        }
        dispatch(closeAuthForm());
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleCloseAuthForm = () => {
    dispatch(closeAuthForm());
  };

  const isShow = isShowAuthForm ? 'open' : null;

  return (
    <div className={`auth-form ${isShow}`}>
      <div onClick={handleCloseAuthForm} className="auth-form__overlay" />
      <div className="auth-form__inner">
        <Link to="/" className="auth-form__logo">
          <img src={images.logoSmall} alt="logo" />
        </Link>
        <h1 className="auth-form__title">Đăng nhập vào Zingmp3</h1>
        <div id="firebaseui-auth-container"></div>
      </div>
      <div id="loader">Loading...</div>
    </div>
  );
}
