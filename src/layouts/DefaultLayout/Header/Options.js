import {
  BsBadgeAd,
  BsBadgeHd,
  BsBoxArrowLeft,
  BsChevronRight,
  BsExclamationCircle,
  BsFileText,
  BsFlag,
  BsGear,
  BsPlayCircle,
  BsShieldLock,
  BsTelephone,
  BsUpload,
} from 'react-icons/bs';
import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import { BasicIcon, ThemeIcon } from 'components/Icons';
import { Wrapper, MenuItem, Button } from 'components';
import images from 'assets/images';
import config from 'config';

function Options({ onClickOpenModal }) {
  const [isShowSetting, setIsShowSetting] = useState(false);
  const [isShowAvatar, setIsShowAvatar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <nav className="header-nav">
      <ul className="header-nav__list">
        <Tippy content="Chủ đề">
          <li onClick={onClickOpenModal} className="header-nav__item">
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
                    <Button to={config.routes.login} fullWidth primary>
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
  );
}

Options.propTypes = {
  onClickOpenModal: PropTypes.func,
};

export default memo(Options);
