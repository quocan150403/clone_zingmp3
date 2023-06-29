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
import { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import Tippy from '@tippyjs/react/headless';
import { ImSpinner } from 'react-icons/im';

import { BasicIcon, ThemeIcon } from 'components/Icons';
import images from 'assets/images';
import Wrapper from 'components/Wrapper';
import Button from 'components/Button';
import MediaItem from 'components/Media/MediaItem';
import './Header.scss';

function Header() {
  const [isShowSetting, setIsShowSetting] = useState(false);
  const [isShowAvatar, setIsShowAvatar] = useState(false);
  const [isShowTheme, setIsShowTheme] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [isActiveHeader, setIsActiveHeader] = useState(false);

  useEffect(() => {
    const containerElement = document.querySelector('.app-container');
    containerElement.addEventListener('scroll', (e) => {
      setIsActiveHeader(e.target.scrollTop > 0);
    });
  }, []);

  useEffect(() => {
    setSearchResult([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }, []);

  return (
    <header className={`header ${isActiveHeader ? 'active' : ''}`}>
      <div className="header-search">
        <button className="header__button">
          <BsArrowLeft className="header__button-icon" />
        </button>
        <button className="header__button button--disabled">
          <BsArrowRight className="header__button-icon" />
        </button>

        {/* Search */}
        <Tippy
          interactive="true"
          visible={isShowSearch}
          placement="bottom-start"
          offset={[0, 0]}
          onClickOutside={() => setIsShowSearch(false)}
          appendTo={document.body}
          render={(attrs) => (
            <div {...attrs} tabIndex="-1" className="header__search-history">
              <Wrapper className="p-3 wrapper--search">
                <h3 className="header__search-title">Lịch sử tìm kiếm</h3>
                <div className="header__search-list">
                  {searchResult.map((item, index) => (
                    <MediaItem key={index} />
                  ))}
                </div>
              </Wrapper>
            </div>
          )}
        >
          <div
            onClick={() => setIsShowSearch(!isShowSearch)}
            className={`header__search ${isShowSearch ? 'active' : ''}`}
          >
            <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." className="header__search-input" />
            <div className="header__search-btn">
              <BsSearch className="header__search-icon" />
            </div>
            <BsX className="header__search-close" />
            <ImSpinner className="header__search-loading" />
          </div>
        </Tippy>
      </div>
      <div className="header-nav">
        <ul className="header-nav__list">
          <li onClick={() => setIsShowTheme(!isShowTheme)} className="header-nav__item">
            <div className="header-nav__btn">
              <ThemeIcon className="header-nav__icon" />
            </div>
          </li>
          <li className="header-nav__item hide-on-mobile">
            <div className="header-nav__btn">
              <input type="file" name="upload song" id="header-nav__input" />
              <label htmlFor="header-nav__input">
                <BsUpload className="header-nav__icon" />
              </label>
            </div>
          </li>

          {/* Setting */}
          <Tippy
            appendTo={document.body}
            interactive="true"
            placement="bottom-end"
            visible={isShowSetting}
            onClickOutside={() => setIsShowSetting(false)}
            render={(attrs) => (
              <div {...attrs} tabIndex="-1" className="header__setting">
                <Wrapper className="p-2">
                  <Button option large leftIcon={<BsShieldLock />}>
                    Danh sách chặn
                  </Button>
                  <Button option large leftIcon={<BsBadgeHd />}>
                    Chất lượng nhạc
                  </Button>
                  <Button option large leftIcon={<BsPlayCircle />} linkIcon={<BsChevronRight />}>
                    Trình phát nhạc
                  </Button>
                  <div className="line-separator"></div>
                  <Button option large leftIcon={<BsExclamationCircle />}>
                    Giới thiệu
                  </Button>
                  <Button option large leftIcon={<BsFlag />}>
                    Gợi ý
                  </Button>
                  <Button option large leftIcon={<BsTelephone />}>
                    Liên hệ
                  </Button>
                  <Button option large leftIcon={<BsBadgeAd />}>
                    Quảng cáo
                  </Button>
                  <Button option large leftIcon={<BsFileText />}>
                    Thỏa thuận sử dụng
                  </Button>
                </Wrapper>
              </div>
            )}
          >
            <li onClick={() => setIsShowSetting(!isShowSetting)} className="header-nav__item hide-on-mobile">
              <div className="header-nav__btn btn--nav-setting">
                <BsGear className="header-nav__icon" />
              </div>
            </li>
          </Tippy>

          {/* Avatar */}
          <Tippy
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
                        <Button center full primary>
                          Nâng cấp tài khoản
                        </Button>
                      </div>
                      <div className="line-separator"></div>
                      <Button option large leftIcon={<BsBoxArrowLeft />}>
                        Đăng xuất
                      </Button>
                    </>
                  ) : (
                    <div className="p-3 pb-4">
                      <Button center full primary>
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
          </Tippy>
        </ul>
      </div>

      {/* Theme */}
      <div onClick={() => setIsShowTheme(false)} className={`modal-theme grid ${isShowTheme ? 'open' : ''}`}>
        <div
          onClick={(event) => {
            event.stopPropagation();
            setIsShowTheme(isShowTheme);
          }}
          className="modal-container"
        >
          <div
            onClick={(event) => {
              event.stopPropagation();
              setIsShowTheme(false);
            }}
            className="modal-close"
          >
            <BsX />
          </div>
          <div className="theme-header">
            <h3>Giao Diện</h3>
          </div>
          <div className="theme-container">
            <h3 className="theme-container__title">Chủ đề</h3>
            <Row className="row row-cols-6">
              <Col>
                <div className="theme-container__item">
                  <div className="theme-container__overlay"></div>
                  <img src={images.theme} alt="" />
                  <div className="theme-container__inner">
                    <Button full small primary uppercase textCenter>
                      Áp dụng
                    </Button>
                    <Button full small outline uppercase textCenter>
                      Xem trước
                    </Button>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="theme-container__item">
                  <img src={images.theme} alt="" />
                  <div className="theme-container__inner">
                    <Button full small primary uppercase textCenter>
                      Áp dụng
                    </Button>
                    <Button full small outline uppercase textCenter>
                      Xem trước
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
