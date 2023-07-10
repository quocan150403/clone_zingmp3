import {
  BsArrowLeft,
  BsArrowRight,
  BsBadgeAd,
  BsBadgeHd,
  BsBoxArrowLeft,
  BsChevronRight,
  BsExclamationCircle,
  BsFileText,
  BsFlag,
  BsGear,
  BsPlayCircle,
  BsSearch,
  BsShieldLock,
  BsTelephone,
  BsUpload,
  BsX,
} from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import { ImSpinner } from 'react-icons/im';
import { Col, Row } from 'reactstrap';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Modal from 'react-modal';

import { BasicIcon, ThemeIcon } from 'components/Icons';
import images from 'assets/images';
import Wrapper from 'components/Wrapper';
import Button from 'components/Button';
import MediaItem from 'components/Media/MediaItem';
import MenuItem from 'components/Wrapper/Menu';
import './Header.scss';

function Header() {
  const [isShowSetting, setIsShowSetting] = useState(false);
  const [isShowAvatar, setIsShowAvatar] = useState(false);
  const [isShowTheme, setIsShowTheme] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [isShowSearch, setIsShowSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [isActiveHeader, setIsActiveHeader] = useState(false);

  const searchRef = useRef();

  useEffect(() => {
    const containerElement = document.querySelector('.app-container');
    containerElement.addEventListener('scroll', (e) => {
      setIsActiveHeader(e.target.scrollTop > 0);
    });
  }, []);

  useEffect(() => {
    setSearchResult([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }, []);

  const openModal = () => {
    setIsShowTheme(true);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsShowTheme(false);
  };

  return (
    <>
      <header className={`header ${isActiveHeader ? 'active' : ''}`}>
        <div className="header-navigate d-none-mobile">
          <Button large circle leftIcon={<BsArrowLeft />} />
          <Button large circle leftIcon={<BsArrowRight />} />
        </div>

        {/* Search */}
        <HeadlessTippy
          interactive="true"
          visible={isShowSearch}
          placement="bottom-start"
          offset={[0, 0]}
          onClickOutside={() => setIsShowSearch(false)}
          reference={searchRef}
          appendTo={searchRef.current}
          render={(attrs) => (
            <div
              {...attrs}
              tabIndex="-1"
              style={{
                width: searchRef.current?.clientWidth + 1.6,
              }}
            >
              <Wrapper className="p-3 wrapper--search">
                <h3 className="header-search__title">Lịch sử tìm kiếm</h3>
                <div className="header-search__list">
                  {searchResult.map((item, index) => (
                    <MediaItem grow key={index} />
                  ))}
                </div>
              </Wrapper>
            </div>
          )}
        >
          <div
            ref={searchRef}
            className={`header-search ${isShowSearch ? 'active' : ''}`}
            onClick={() => setIsShowSearch(!isShowSearch)}
          >
            <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." className="header-search__input" />
            <span className="header-search__btn">
              <BsSearch className="header-search__icon" />
            </span>
            <BsX className="header-search__close" />
            <ImSpinner className="header-search__loading" />
          </div>
        </HeadlessTippy>

        {/* Header nav */}
        <nav className="header-nav">
          <ul className="header-nav__list">
            <Tippy content="Chủ đề">
              <li onClick={openModal} className="header-nav__item">
                <div className="header-nav__btn">
                  <ThemeIcon className="header-nav__icon" />
                </div>
              </li>
            </Tippy>
            <Tippy content="Tải lên">
              <li className="header-nav__item d-none-mobile">
                <div className="header-nav__btn">
                  <input type="file" name="upload song" id="header-nav__input" />
                  <label htmlFor="header-nav__input">
                    <BsUpload className="header-nav__icon" />
                  </label>
                </div>
              </li>
            </Tippy>

            {/* Setting */}
            <HeadlessTippy
              appendTo={document.body}
              interactive="true"
              placement="bottom-end"
              visible={isShowSetting}
              onClickOutside={() => setIsShowSetting(false)}
              render={(attrs) => (
                <div {...attrs} tabIndex="-1" className="header__setting">
                  <Wrapper className="p-2">
                    <MenuItem option icon={<BsShieldLock />} title="Danh sách chặn" />
                    <MenuItem option icon={<BsBadgeHd />} title="Chất lượng nhạc" />
                    <MenuItem option icon={<BsPlayCircle />} title="Trình phát nhạc" chevron={<BsChevronRight />} />
                    <div className="line-separator"></div>
                    <MenuItem option icon={<BsExclamationCircle />} title="Giới thiệu" />
                    <MenuItem option icon={<BsFlag />} title="Gợi ý" />
                    <MenuItem option icon={<BsTelephone />} title="Liên hệ" />
                    <MenuItem option icon={<BsBadgeAd />} title="Quảng cáo" />
                    <MenuItem option icon={<BsFileText />} title="Thỏa thuận sử dụng" />
                  </Wrapper>
                </div>
              )}
            >
              <Tippy content="Cài đặt">
                <li onClick={() => setIsShowSetting(!isShowSetting)} className="header-nav__item d-none-mobile">
                  <div className="header-nav__btn btn--nav-setting">
                    <BsGear className="header-nav__icon" />
                  </div>
                </li>
              </Tippy>
            </HeadlessTippy>

            {/* Avatar */}
            <HeadlessTippy
              interactive="true"
              placement="bottom-end"
              visible={isShowAvatar}
              onClickOutside={() => setIsShowAvatar(false)}
              appendTo={document.body}
              render={(attrs) => (
                <div {...attrs} tabIndex="-1" className="header__avatar">
                  <Wrapper className="p-2">
                    {isLogin ? (
                      <>
                        <div className="p-3 mb-2 header-avatar">
                          <div className="mb-4 d-flex align-items-center">
                            <img src={images.avatar} alt="" className="header-avatar__img me-3" />
                            <div className="d-flex flex-column header-avatar__info">
                              <h3>Nguyễn Văn A</h3>
                              <BasicIcon width="50" height="16" />
                            </div>
                          </div>
                          <Button fullWidth secondary>
                            Nâng cấp tài khoản
                          </Button>
                        </div>
                        <div className="line-separator"></div>
                        <MenuItem option icon={<BsBoxArrowLeft />} title="Đăng xuất" />
                      </>
                    ) : (
                      <div className="p-3 pb-4">
                        <Button fullWidth primary>
                          Đăng nhập
                        </Button>
                      </div>
                    )}
                  </Wrapper>
                </div>
              )}
            >
              <li onClick={() => setIsShowAvatar(!isShowAvatar)} className="header-nav__item">
                <img src={images.avatar} alt="" className="header-nav__btn" />
              </li>
            </HeadlessTippy>
          </ul>
        </nav>
      </header>

      {/* Theme */}
      <Modal
        isOpen={isShowTheme}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal-theme"
        overlayClassName="overlay"
      >
        <div onClick={closeModal} className="modal-close">
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
    </>
  );
}

export default Header;
