import { Col, Row } from 'reactstrap';
import { BsCamera } from 'react-icons/bs';

import './ArtistRegister.scss';
import { Helmet } from 'components';

function ArtistRegister() {
  return (
    <Helmet title="Đăng nhập">
      <div className="register">
        <div className="register-heading">
          <div className="block">
            <h1 className="register-title">Đăng kí tài khoản</h1>
          </div>
        </div>
        <div className="block">
          <div className="register-content">
            <h2 className="register-content__title">Tài khoản Zing MP3 INDIE</h2>
            <div className="register-form">
              <Row className="g-5">
                <Col sm="8" md="8" lg="8">
                  <div className="register-group">
                    <label htmlFor="name">Nhập tên đầy đủ</label>
                    <input type="text" id="name" placeholder="Nhập họ và tên có dấu" />
                  </div>

                  <div className="register-group">
                    <label htmlFor="name">Nghệ danh</label>
                    <input type="text" id="name" placeholder="Nhập nghệ danh" />
                  </div>

                  <div className="register-group">
                    <label htmlFor="name">Nhập thể loại âm nhạc</label>
                    <input type="text" id="name" placeholder="Nhập thể loại âm nhạc của ca sĩ" />
                  </div>

                  <div className="register-group">
                    <label htmlFor="name">Chọn danh xưng</label>
                    <select name="country" id="country">
                      <option value="khac">Khác</option>
                      <option value="ca_si">Ca sĩ</option>
                      <option value="nghe_si">Nghệ sĩ</option>
                      <option value="nhac_si">Nhạc sĩ</option>
                    </select>
                  </div>

                  <div className="register-group">
                    <label htmlFor="name">Chọn quốc gia</label>
                    <select name="country" id="country">
                      <option value="vietnam">Việt Nam</option>
                      <option value="japan">Hàn Quốc</option>
                      <option value="korea">US - UK</option>
                    </select>
                  </div>

                  <div className="register-group">
                    <label htmlFor="name">Mô tả bản thân</label>
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="10"
                      placeholder="Mô tả bản thân"
                    ></textarea>
                  </div>
                </Col>
                <Col sm="4" md="4" lg="4">
                  <div className="register-group">
                    <label htmlFor="name">Chọn ảnh đại diện</label>
                    <input type="file" hidden id="file" placeholder="Nhập họ và tên có dấu" />
                    <label htmlFor="file" className="register-avatar">
                      {/* <img src={images.avatar} alt="avatar" /> */}
                      <div className="register-avatar__icon">
                        <BsCamera />
                      </div>
                    </label>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="register-btn">
              <button>Đăng kí</button>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default ArtistRegister;
