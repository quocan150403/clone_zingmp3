import { memo } from 'react';
import PropTypes from 'prop-types';
import { BsX } from 'react-icons/bs';
import Modal from 'react-modal';
import { Col, Row } from 'reactstrap';

import images from 'assets/images';
import { Button } from 'components';

function Theme({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      className="modal-theme"
      overlayClassName="overlay"
    >
      <div onClick={onRequestClose} className="modal-close">
        <BsX />
      </div>
      <div className="theme-header">
        <h3>Giao Diện</h3>
      </div>
      <div className="theme-container">
        <div className="theme-item">
          <h3 className="theme-container__title">Chủ đề</h3>
          <Row className="g-4">
            {/* 5 */}
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="theme-item">
          <h3 className="theme-container__title">Chủ đề</h3>
          <Row className="g-4">
            {/* 5 */}
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="theme-item">
          <h3 className="theme-container__title">Chủ đề</h3>
          <Row className="g-4">
            {/* 5 */}
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md="3" xl="2">
              <div className="theme-container__item">
                <div className="theme-container__overlay"></div>
                <img src={images.theme} alt="" />
                <div className="theme-container__inner">
                  <Button column fullWidth small primary uppercase>
                    Áp dụng
                  </Button>
                  <Button column fullWidth small outline uppercase>
                    Xem trước
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
  );
}

Theme.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default memo(Theme);
