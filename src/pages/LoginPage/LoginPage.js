import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from 'app/features/userSlide';
import { useNavigate } from 'react-router-dom';

import './LoginPage.scss';
import { auth } from 'config/firebase';
import images from 'assets/images';
import { Button, Helmet } from 'components';
import { BsChevronLeft } from 'react-icons/bs';
import { userApi } from 'api';

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const credential = await signInWithPopup(auth, provider);
      if (credential) {
        const userInfo = {
          email: credential.user.email,
          fullName: credential.user.displayName,
          imageUrl: credential.user.photoURL,
          UID: credential.user.uid,
        };

        await checkAndCreateUser(userInfo);
        dispatch(setCurrentUser(userInfo));
        navigate('/');
      }
    } catch (error) {
      console.log(error);
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
        <div className="login-container">
          {isRegister && (
            <div className="login-back">
              <BsChevronLeft />
            </div>
          )}
          <Link to="/" className="login-logo">
            <img src={images.logoSmall} alt="logo" />
          </Link>
          <h1 className="login-title">Đăng nhập vào ZingMp3</h1>
          <div className="login-body">
            <div className="login-item">
              <div className="login-item__img">
                <img src={images.socials.personal} alt="" />
              </div>
              <div className="login-item__text">
                <span>Đăng nhập bằng số điện thoại</span>
              </div>
            </div>
            <div onClick={handleLoginWithGoogle} className="login-item">
              <div className="login-item__img">
                <img src={images.socials.google} alt="" />
              </div>
              <div className="login-item__text">
                <span>Đăng nhập bằng Google</span>
              </div>
            </div>
            <div className="login-item">
              <div className="login-item__img">
                <img src={images.socials.facebook} alt="" />
              </div>
              <div className="login-item__text">
                <span>Đăng nhập bằng Facebook</span>
              </div>
            </div>
            {/* <div className="form-group">
              <label htmlFor="username">Tên của bạn</label>
              <div className="form-input">
                <input type="text" id="username" placeholder="Nhập tên của bạn" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-label">
                <label htmlFor="username">Email</label>
                <label>Đăng ký với SĐT</label>
              </div>
              <div className="form-input">
                <input type="email" id="email" placeholder="Nhập địa chỉ email" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-input">
                <input type="password" id="password" placeholder="Nhập mât khẩu" />
              </div>
              <span className="form-help">Gợi ý: Mật khẩu phải có ít nhất 6 ký tự</span>
            </div>
            <div className="form-group">
              <div className="form-input">
                <input type="number" id="code" placeholder="Nhập mã xác nhận" />
                <button>Xác nhận</button>
              </div>
            </div>

            <div className="form-btn">
              <Button primary fullWidth>
                Đăng nhập
              </Button>
            </div> */}
          </div>
          <p className="login-footer">
            Bạn chưa có tài khoản? <a href="/">Đăng ký</a>
          </p>
        </div>
      </div>
    </Helmet>
  );
}
