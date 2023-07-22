import Helmet from 'components/Helmet';
import images from 'assets/images';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Helmet title="Đăng nhập">
      <div className="login">
        <div className="login-container">
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
            <div className="login-item">
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
          </div>
          <p class="login-footer">
            Bạn chưa có tài khoản? <a href="/">Đăng ký</a>
          </p>
        </div>
      </div>
    </Helmet>
  );
}

export default Login;
