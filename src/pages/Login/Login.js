import { Link } from 'react-router-dom';

import './Login.scss';
import images from 'assets/images';
import { Button, Helmet } from 'components';
import { BsChevronLeft } from 'react-icons/bs';

function Login() {
  return (
    <Helmet title="Đăng nhập">
      <div className="login">
        <div className="login-container">
          <div className="login-back">
            <BsChevronLeft />
          </div>
          <Link to="/" className="login-logo">
            <img src={images.logoSmall} alt="logo" />
          </Link>
          <h1 className="login-title">Đăng nhập vào ZingMp3</h1>
          <div className="login-body">
            <div className="form-group">
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
            </div>
            {/* <div className="login-item">
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

export default Login;
