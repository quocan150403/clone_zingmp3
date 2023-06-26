import images from 'assets/images';
import './Header.scss';
import Tippy from '@tippyjs/react/headless';
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
import { ImSpinner } from 'react-icons/im';
import { BasicIcon, ThemeIcon } from 'components/Icons';
import Popper from 'components/Popper';
import Button from 'components/Button';
import { useEffect, useState } from 'react';
import MediaItem from 'components/MediaItem';

function Header() {
  const [isShowSetting, setIsShowSetting] = useState(false);
  const [isShowAvatar, setIsShowAvatar] = useState(false);
  const [isShowTheme, setIsShowTheme] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setSearchResult([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }, []);

  return (
    <header className="header grid">
      <div className="header__with-search">
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
              <Popper className="p-3 popper--search">
                <h3 className="header__search-title">Lịch sử tìm kiếm</h3>
                <div className="header__search-list">
                  {searchResult.map((item, index) => (
                    <MediaItem key={index} />
                  ))}
                </div>
              </Popper>
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
      <div className="header__nav">
        <ul className="header__nav-list">
          <li onClick={() => setIsShowTheme(!isShowTheme)} className="header__nav-item">
            <div className="header__nav-btn nav-btn--theme">
              <ThemeIcon className="header__nav-icon" />
            </div>
          </li>
          <li className="header__nav-item hide-on-mobile">
            <div className="header__nav-btn">
              <input type="file" name="upload song" id="header__nav-input" />
              <label htmlFor="header__nav-input">
                <BsUpload className="header__nav-icon" />
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
                <Popper className="p-2">
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
                </Popper>
              </div>
            )}
          >
            <li onClick={() => setIsShowSetting(!isShowSetting)} className="header__nav-item hide-on-mobile">
              <div className="header__nav-btn btn--nav-setting">
                <BsGear className="header__nav-icon" />
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
                <Popper className="p-2">
                  {isLogin ? (
                    <>
                      <div className="p-3 mb-2 header__avatar-box">
                        <div className="mb-4 d-flex align-items-center">
                          <img src={images.avatar} alt="" className="header__avatar-img me-3" />
                          <div className="d-flex flex-column header__avatar-info">
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
                </Popper>
              </div>
            )}
          >
            <li onClick={() => setIsShowAvatar(!isShowAvatar)} className="header__nav-item">
              <img src={images.avatar} alt="" className="header__nav-btn" />
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
            className="modal__close-btn"
          >
            <BsX className="close__btn-icon" />
          </div>
          <div className="theme__header">
            <h3 className="theme__header-title">Giao Diện</h3>
          </div>
          <div className="theme__content">
            <div className="grid theme__container">
              <div className="row sm-gutter theme__list">
                <div className="col l-12 m-12 c-12">
                  <div className="theme__container-info">
                    <h3 className="theme__info-name">Chủ đề</h3>
                  </div>
                </div>

                <div className="col l-2 m-4 c-6 mb-20">
                  <div className="theme__container-item" data-index="0">
                    <div className="theme__item-display row__item-display br-5">
                      <div
                        className="theme__item-img row__item-img"
                        style={{
                          background: `url(${images.theme})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center center',
                          backgroundSize: 'cover',
                        }}
                      ></div>
                      <div className="overlay"></div>
                      <div className="theme__item-actions row__item-actions">
                        <Button full primary>
                          Áp dụng
                        </Button>
                        <Button full outline>
                          Xem trước
                        </Button>
                      </div>
                    </div>
                    <div className="theme__item-info">
                      <div className="theme__item-name">Zing Music Awards</div>
                    </div>
                  </div>
                </div>

                <div className="col l-2 m-4 c-6 mb-20">
                  <div className="theme__container-item" data-index="1">
                    <div className="theme__item-display row__item-display br-5">
                      <div
                        className="theme__item-img row__item-img"
                        style={{
                          background: `url(${images.theme})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center center',
                          backgroundSize: 'cover',
                        }}
                      ></div>
                      <div className="overlay"></div>
                      <div className="theme__item-actions row__item-actions">
                        <button className="button theme__actions-btn btn--apply-theme button-primary">
                          <span className="theme__btn-title">Áp dụng</span>
                        </button>
                        <button className="button theme__actions-btn btn--preview hide-on-mobile">
                          <span className="theme__btn-title">Xem trước</span>
                        </button>
                      </div>
                    </div>
                    <div className="theme__item-info">
                      <div className="theme__item-name">Tháp Eiffel</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
