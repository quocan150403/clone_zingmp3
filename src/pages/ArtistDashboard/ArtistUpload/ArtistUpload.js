import { Button, Helmet } from 'components';
import React from 'react';
import { BsCamera } from 'react-icons/bs';
import { Col, Row } from 'reactstrap';

function ArtistUpload(props) {
  <Helmet title="Đăng nhập">
    <div className="register">
      <div className="register-heading">
        <div className="block">
          <h1 className="register-title">Phát hành bài hát</h1>
        </div>
      </div>
      <div className="block">
        <div className="register-content">
          <h2 className="register-content__title">Thông tin bài hát</h2>
          <div className="register-form">
            <Row className="g-5">
              <Col sm="8" md="8" lg="8">
                <div className="register-group">
                  <label htmlFor="name">Tựa đề</label>
                  <input type="text" id="name" placeholder="Nhập họ và tên có dấu" />
                </div>

                <div className="register-group">
                  <label htmlFor="name">Nghệ sĩ tham gia</label>
                  <input type="text" id="name" placeholder="Nhập tên nghệ sĩ" />
                </div>

                <div className="register-group">
                  <label htmlFor="name">Nhập thể loại âm nhạc</label>
                  <input type="text" id="name" placeholder="Nhập thể loại âm nhạc của ca sĩ" />
                </div>

                <div className="register-group">
                  <label htmlFor="name">lời bài hát</label>
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    placeholder="Mô tả bản thân"
                  ></textarea>
                </div>

                <div className="register-group">
                  <label htmlFor="name">Nhập tên tác giả</label>
                  <input type="text" id="name" placeholder="Nhập tên tác giả" />
                </div>
                <h2 className="register-content__title">Upload bài hát</h2>
                <div className="register-group">
                  <label htmlFor="name">Nhập tên tác giả</label>
                  <Button primary>Chọn file tải lên</Button>
                  <input type="text" id="name" placeholder="Nhập tên tác giả" />
                </div>
              </Col>
              <Col sm="4" md="4" lg="4">
                <div className="register-group">
                  <label htmlFor="name">Ảnh bìa</label>
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
            <button>Hoàn thành</button>
          </div>
        </div>
      </div>
    </div>
  </Helmet>;
}

ArtistUpload.propTypes = {};

export default ArtistUpload;
