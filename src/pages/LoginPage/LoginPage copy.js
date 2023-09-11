import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setLoading, setError, setSuccess } from 'app/features/userSlice';
import { useNavigate } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

import './LoginPage.scss';
import images from 'assets/images';
import { Helmet } from 'components';
import { userApi } from 'api';
import LoginEmailForm from './LoginEmailForm';
import RegisterEmailForm from './RegisterEmailForm';

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    dispatch(setLoading());
    const provider = new GoogleAuthProvider();
    try {
      const auth = getAuth();
      const credential = await signInWithPopup(auth, provider);
      if (credential) {
        const userInfo = {
          email: credential.user.email,
          fullName: credential.user.displayName,
          imageUrl: credential.user.photoURL,
          UID: credential.user.uid,
        };

        await checkAndCreateUser(userInfo);
        dispatch(setSuccess(userInfo));
        navigate('/');
      }
    } catch (error) {
      dispatch(setError(error));
      console.log(error);
    }
  };

  const handleLoginWithFacebook = async () => {
    try {
      const auth = getAuth();
      const result = await signInWithPopup(auth);
      const credential = FacebookAuthProvider.credentialFromResult(result);

      const user = result.user;
      console.log('object,', user);
    } catch (error) {
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log(credential);
    }
  };

  const checkAndCreateUser = async (info) => {
    try {
      const user = await userApi.getByUID(info.UID);
      if (user && user._id) {
        const result = await userApi.getById(user._id);
        info = { ...info, ...result };
      } else {
        await userApi.createUser(info);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Helmet title="Đăng nhập">
      <div className="login">
        <div className="login-inner">
          {isEmail && (
            <div onClick={() => setIsEmail(false)} className="login-back">
              <BsChevronLeft />
            </div>
          )}
          <Link to="/" className="login-logo">
            <img src={images.logoSmall} alt="logo" />
          </Link>
          <h1 className="login-title">
            {isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập vào'} ZingMp3
          </h1>

          <div className="login-body">
            {isEmail ? (
              isRegister ? (
                <RegisterEmailForm />
              ) : (
                <LoginEmailForm />
              )
            ) : (
              <div className="login-socials">
                <div onClick={() => setIsEmail(true)} className="login-item">
                  <div className="login-item__img">
                    <img src={images.socials.personal} alt="" />
                  </div>
                  <div className="login-item__text">
                    <span>Sử dụng tài khoản email</span>
                  </div>
                </div>
                <div onClick={handleLoginWithGoogle} className="login-item">
                  <div className="login-item__img">
                    <img src={images.socials.google} alt="" />
                  </div>
                  <div className="login-item__text">
                    <span>Tiếp tục bằng Google</span>
                  </div>
                </div>
                <div onClick={handleLoginWithFacebook} className="login-item">
                  <div className="login-item__img">
                    <img src={images.socials.facebook} alt="" />
                  </div>
                  <div className="login-item__text">
                    <span>Tiếp tục bằng Facebook</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className="login-footer">
            Bạn {isRegister ? 'chưa có' : ' có'} tài khoản?
            <span onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? ' Đăng nhập' : ' Đăng ký'}
            </span>
          </p>
        </div>
      </div>
    </Helmet>
  );
}
