import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { BsX } from 'react-icons/bs';
import Modal from 'react-modal';
import { Col, Row } from 'reactstrap';

import images from 'assets/images';
import { Button } from 'components';

const THEMES = [
  {
    type: 'Chủ đề',
    list: [
      {
        name: 'Zing Music Awards',
        image: images.themeModal.theme11,
        background: images.themes.theme11,
        playerBackground: images.themes.player,
        colors: {
          bgContentColor: '#ffffff1a',
          borderBox: 'rgb(255 255 255 / 20%)',
          borderPrimary: 'rgb(255 255 255 / 10%)',
          layoutBg: '#37075d',
          linkTextHover: '#fe63da',
          modalScrollbar: 'rgba(16,31,63,0.8)',
          playerBg: 'rgba(0,0,0,0.2)',
          purplePrimary: '#ed2b91',
          primaryBg: '#6a39af',
          sidebarPopupBg: '#572f90',
          textColor: '#fff',
          textItemHover: '#fff',
          textSecondary: 'rgb(255 255 255 / 50%)',
          navigationText: '#dadada',
          placeholderText: '#dadada',
        },
      },
      {
        name: 'Tháp Eiffel',
        image: images.themeModal.theme12,
        background: images.themes.theme12,
        colors: {
          bgContentColor: '#ffffff1a',
          borderBox: 'rgb(255 255 255 / 20%)',
          borderPrimary: 'rgb(255 255 255 / 10%)',
          layoutBg: '#282828',
          linkTextHover: '#c662ef',
          modalScrollbar: 'rgba(12,3,3,0.8)',
          playerBg: 'rgba(0,0,0,0.2)',
          purplePrimary: '#7200a1',
          primaryBg: '#3d3d3d',
          sidebarPopupBg: '#292929',
          textColor: '#fff',
          textItemHover: '#fff',
          textSecondary: 'rgb(255 255 255 / 50%)',
          navigationText: '#a0a0a0',
          placeholderText: '#757575',
        },
      },
    ],
  },
  {
    type: 'Nghệ Sĩ',
    list: [
      {
        name: 'Rosé',
        image: images.themeModal.theme21,
        background: images.themes.theme21,
        colors: {
          bgContentColor: '#ffffff1a',
          borderBox: 'rgb(255 255 255 / 20%)',
          borderPrimary: 'rgb(255 255 255 / 10%)',
          layoutBg: '#061d50',
          linkTextHover: '#6e8ffb',
          modalScrollbar: 'rgba(16,31,63,0.8)',
          playerBg: 'rgba(0,0,0,0.2)',
          purplePrimary: '#3460f5',
          primaryBg: '#192f60',
          sidebarPopupBg: '#1d2a49',
          textColor: '#fff',
          textItemHover: '#fff',
          textSecondary: 'rgb(255 255 255 / 50%)',
          navigationText: '#dadada',
          placeholderText: '#dadada',
        },
      },
      {
        name: 'IU',
        image: images.themeModal.theme22,
        background: images.themes.theme22,
        colors: {
          bgContentColor: 'rgba(0,0,0,0.05)',
          borderBox: 'rgba(0,0,0,0.2)',
          borderPrimary: 'rgba(0,0,0,0.1)',
          layoutBg: '#e7dfdd',
          linkTextHover: '#8c8471',
          modalScrollbar: 'rgba(12,3,3,0.8)',
          playerBg: '#d0ccc5',
          purplePrimary: '#409abc',
          primaryBg: '#fffffe',
          sidebarPopupBg: '#f2f2f2',
          textColor: '#32323d',
          textItemHover: '#409abc',
          textSecondary: '#696969',
          navigationText: '#32323d',
          placeholderText: '#757575',
        },
      },
      {
        name: 'Ji Chang Wook',
        image: images.themeModal.theme23,
        background: images.themes.theme23,
        colors: {
          bgContentColor: '#ffffff4d',
          borderBox: 'rgba(0,0,0,0.2)',
          borderPrimary: 'rgba(0,0,0,0.1)',
          layoutBg: '#b2d8db',
          linkTextHover: '#239292',
          modalScrollbar: 'rgba(12,3,3,0.8)',
          playerBg: '#b4d0d0',
          purplePrimary: '#239292',
          primaryBg: '#e1e8e8',
          sidebarPopupBg: '#cce0e0',
          textColor: '#32323d',
          textItemHover: '#239292',
          textSecondary: '#696969',
          navigationText: '#32323d',
          placeholderText: '#757575',
        },
      },
      {
        name: 'Lisa',
        image: images.themeModal.theme24,
        background: images.themes.theme24,
        colors: {
          bgContentColor: 'rgba(0,0,0,0.05)',
          borderBox: 'rgba(0,0,0,0.2)',
          borderPrimary: 'rgba(0,0,0,0.1)',
          layoutBg: '#f9dbdb',
          linkTextHover: '#ea7aa0',
          modalScrollbar: 'rgba(12,3,3,0.8)',
          playerBg: '#f9c6c5',
          purplePrimary: '#ea7aa0',
          primaryBg: '#fff8f8',
          sidebarPopupBg: '#fbd3d2',
          textColor: '#32323d',
          textItemHover: '#ea7aa0',
          textSecondary: '#696969',
          navigationText: '#32323d',
          placeholderText: '#757575',
        },
      },
      {
        name: 'Jennie Kim',
        image: images.themeModal.theme25,
        background: images.themes.theme25,
        colors: {
          bgContentColor: 'rgba(0,0,0,0.05)',
          borderBox: 'rgba(0,0,0,0.2)',
          borderPrimary: 'rgba(0,0,0,0.1)',
          layoutBg: '#bab8c3',
          linkTextHover: '#8c8471',
          modalScrollbar: 'rgba(12,3,3,0.8)',
          playerBg: '#c6c4d1',
          purplePrimary: '#346875',
          primaryBg: '#e2e7f5',
          sidebarPopupBg: '#f2f2f2',
          textColor: '#32323d',
          textItemHover: '#2a5e6b',
          textSecondary: '#696969',
          navigationText: '#32323d',
          placeholderText: '#757575',
        },
      },
      {
        name: 'Jisoo',
        image: images.themeModal.theme26,
        background: images.themes.theme26,
        colors: {
          bgContentColor: 'rgba(0,0,0,0.05)',
          borderBox: 'rgba(0,0,0,0.2)',
          borderPrimary: 'rgba(0,0,0,0.1)',
          layoutBg: '#fff',
          linkTextHover: '#9c32ca',
          modalScrollbar: 'rgba(12,3,3,0.8)',
          playerBg: '#fff',
          purplePrimary: '#6b3483',
          primaryBg: '#fff',
          sidebarPopupBg: '#f2f2f2',
          textColor: '#32323d',
          textItemHover: '#6b3483',
          textSecondary: 'rgba(0,0,0,0.6)',
          navigationText: '#32323d',
          placeholderText: '#757575',
        },
      },
    ],
  },
  {
    type: 'Màu Tối',
    list: [
      {
        name: 'Tối',
        image: images.themeModal.theme31,
        colors: {
          bgContentColor: '#ffffff1a',
          borderBox: 'rgb(255 255 255 / 20%)',
          borderPrimary: 'rgb(255 255 255 / 10%)',
          layoutBg: '#1e1e1e',
          linkTextHover: '#c662ef',
          modalScrollbar: 'rgba(12,3,3,0.8)',
          playerBg: 'rgba(0,0,0,0.2)',
          purplePrimary: '#7200a1',
          primaryBg: '#282828',
          sidebarPopupBg: '#292929',
          textColor: '#fff',
          textItemHover: '#fff',
          textSecondary: 'rgb(255 255 255 / 50%)',
          navigationText: '#a0a0a0',
          placeholderText: '#757575',
        },
      },
      {
        name: 'Tím',
        image: images.themeModal.theme32,
        colors: {
          bgContentColor: '#ffffff1a',
          borderBox: 'rgb(255 255 255 / 20%)',
          borderPrimary: 'rgb(255 255 255 / 10%)',
          layoutBg: '#170f23',
          linkTextHover: '#c662ef',
          modalScrollbar: 'rgba(41,21,71,0.8)',
          playerBg: 'rgba(0,0,0,0.2)',
          purplePrimary: '#7200a1',
          primaryBg: '#432275',
          sidebarPopupBg: '#2a213a',
          textColor: '#fff',
          textItemHover: '#fff',
          textSecondary: 'rgb(255 255 255 / 50%)',
          navigationText: '#dadada',
          placeholderText: '#dadada',
        },
      },
      {
        name: 'Xanh Đậm',
        image: images.themeModal.theme33,
        colors: {
          bgContentColor: '#ffffff1a',
          borderBox: 'rgb(255 255 255 / 20%)',
          borderPrimary: 'rgb(255 255 255 / 10%)',
          layoutBg: '#101f3f',
          linkTextHover: '#6e8ffb',
          modalScrollbar: 'rgba(16,31,63,0.8)',
          playerBg: 'rgba(0,0,0,0.2)',
          purplePrimary: '#3460f5',
          primaryBg: '#192f60',
          sidebarPopupBg: '#1d2a49',
          textColor: '#fff',
          textItemHover: '#fff',
          textSecondary: 'rgb(255 255 255 / 50%)',
          navigationText: '#dadada',
          placeholderText: '#dadada',
        },
      },
      {
        name: 'Xanh Biển',
        image: images.themeModal.theme34,
        colors: {
          bgContentColor: '#ffffff1a',
          borderBox: 'rgb(255 255 255 / 20%)',
          borderPrimary: 'rgb(255 255 255 / 10%)',
          layoutBg: '#1d375a',
          linkTextHover: '#6e8ffb',
          modalScrollbar: 'rgba(29,55,90,0.8)',
          playerBg: 'rgba(0,0,0,0.2)',
          purplePrimary: '#3460f5',
          primaryBg: '#274a78',
          sidebarPopupBg: '#2a4162',
          textColor: '#fff',
          textItemHover: '#fff',
          textSecondary: 'rgb(255 255 255 / 50%)',
          navigationText: '#dadada',
          placeholderText: '#dadada',
        },
      },
      {
        name: 'Xanh Lá',
        image: images.themeModal.theme35,
        colors: {
          bgContentColor: '#ffffff1a',
          borderBox: 'rgb(255 255 255 / 20%)',
          borderPrimary: 'rgb(255 255 255 / 10%)',
          layoutBg: '#124534',
          linkTextHover: '#309785',
          modalScrollbar: 'rgba(18,69,52,0.8)',
          playerBg: 'rgba(0,0,0,0.2)',
          purplePrimary: '#309785',
          primaryBg: '#126e54',
          sidebarPopupBg: '#244f3f',
          textColor: '#fff',
          textItemHover: '#fff',
          textSecondary: 'rgb(255 255 255 / 50%)',
          navigationText: '#dadada',
          placeholderText: '#dadada',
        },
      },
      {
        name: 'Nâu',
        image: images.themeModal.theme36,
        colors: {
          bgContentColor: '#ffffff1a',
          borderBox: 'rgb(255 255 255 / 20%)',
          borderPrimary: 'rgb(255 255 255 / 10%)',
          layoutBg: '#57403b',
          linkTextHover: '#d8987f',
          modalScrollbar: 'rgba(87,64,59,0.8)',
          playerBg: 'rgba(0,0,0,0.2)',
          purplePrimary: '#986d5c',
          primaryBg: '#6f514c',
          sidebarPopupBg: '#604a45',
          textColor: '#fff',
          textItemHover: '#fff',
          textSecondary: 'rgb(255 255 255 / 50%)',
          navigationText: '#dadada',
          placeholderText: '#dadada',
        },
      },
      {
        name: 'Hồng',
        image: images.themeModal.theme37,
        colors: {
          bgContentColor: '#ffffff1a',
          borderBox: 'rgb(255 255 255 / 20%)',
          borderPrimary: 'rgb(255 255 255 / 10%)',
          layoutBg: '#800064',
          linkTextHover: '#fe63da',
          modalScrollbar: 'rgba(128,0,100,0.8)',
          playerBg: 'rgba(0,0,0,0.2)',
          purplePrimary: '#d820b0',
          primaryBg: '#a22687',
          sidebarPopupBg: '#883c6c',
          textColor: '#fff',
          textItemHover: '#fff',
          textSecondary: 'rgb(255 255 255 / 50%)',
          navigationText: '#dadada',
          placeholderText: '#dadada',
        },
      },
      {
        name: 'Đỏ',
        image: images.themeModal.theme38,
        colors: {
          bgContentColor: '#ffffff1a',
          borderBox: 'rgb(255 255 255 / 20%)',
          borderPrimary: 'rgb(255 255 255 / 10%)',
          layoutBg: '#731717',
          linkTextHover: '#f36565',
          modalScrollbar: 'rgba(115,23,23,0.8)',
          playerBg: 'rgba(0,0,0,0.2)',
          purplePrimary: '#aa1c1c',
          primaryBg: '#883236',
          sidebarPopupBg: '#7a2922',
          textColor: '#fff',
          textItemHover: '#fff',
          textSecondary: 'rgb(255 255 255 / 50%)',
          navigationText: '#dadada',
          placeholderText: '#dadada',
        },
      },
    ],
  },
  {
    type: 'Màu Sáng',
    list: [
      {
        name: 'Sáng',
        image: images.themeModal.theme41,
        colors: {
          bgContentColor: 'rgba(0,0,0,0.05)',
          borderBox: 'rgba(0,0,0,0.2)',
          borderPrimary: 'rgba(0,0,0,0.1)',
          layoutBg: '#fff',
          linkTextHover: '#9c32ca',
          modalScrollbar: 'rgba(12,3,3,0.8)',
          playerBg: '#fff',
          purplePrimary: '#6b3483',
          primaryBg: '#fff',
          sidebarPopupBg: '#f2f2f2',
          textColor: '#32323d',
          textItemHover: '#6b3483',
          textSecondary: 'rgba(0,0,0,0.6)',
          navigationText: '#32323d',
          placeholderText: '#757575',
        },
      },
      {
        name: 'Xám',
        image: images.themeModal.theme42,
        colors: {
          bgContentColor: 'rgba(0,0,0,0.05)',
          borderBox: 'rgba(0,0,0,0.2)',
          borderPrimary: 'rgba(0,0,0,0.1)',
          layoutBg: '#e5e3df',
          linkTextHover: '#8c8471',
          modalScrollbar: 'rgba(12,3,3,0.8)',
          playerBg: '#d0ccc5',
          purplePrimary: '#8c8471',
          primaryBg: '#fffffe',
          sidebarPopupBg: '#f2f2f2',
          textColor: '#32323d',
          textItemHover: '#8c8471',
          textSecondary: '#696969',
          navigationText: '#32323d',
          placeholderText: '#757575',
        },
      },
      {
        name: 'Xanh Nhạt',
        image: images.themeModal.theme43,
        colors: {
          bgContentColor: '#ffffff4d',
          borderBox: 'rgba(0,0,0,0.2)',
          borderPrimary: 'rgba(0,0,0,0.1)',
          layoutBg: '#ced9d9',
          linkTextHover: '#239292',
          modalScrollbar: 'rgba(12,3,3,0.8)',
          playerBg: '#b4d0d0',
          purplePrimary: '#239292',
          primaryBg: '#e1e8e8',
          sidebarPopupBg: '#cce0e0',
          textColor: '#32323d',
          textItemHover: '#239292',
          textSecondary: '#696969',
          navigationText: '#32323d',
          placeholderText: '#757575',
        },
      },
      {
        name: 'Hồng Cánh Sen',
        image: images.themeModal.theme44,
        colors: {
          bgContentColor: 'rgba(0,0,0,0.05)',
          borderBox: 'rgba(0,0,0,0.2)',
          borderPrimary: 'rgba(0,0,0,0.1)',
          layoutBg: '#f9dbdb',
          linkTextHover: '#ea7aa0',
          modalScrollbar: 'rgba(12,3,3,0.8)',
          playerBg: '#f9c6c5',
          purplePrimary: '#ea7aa0',
          primaryBg: '#fff8f8',
          sidebarPopupBg: '#fbd3d2',
          textColor: '#32323d',
          textItemHover: '#ea7aa0',
          textSecondary: '#696969',
          navigationText: '#32323d',
          placeholderText: '#757575',
        },
      },
    ],
  },
];

function Theme({ isOpen, onRequestClose }) {
  const handleApplyTheme = (currentThemeColor) => {
    const colors = currentThemeColor.colors;
    document.documentElement.style.setProperty('--bg-content-color', colors.bgContentColor);
    document.documentElement.style.setProperty('--border-box', colors.borderBox);
    document.documentElement.style.setProperty('--border-primary', colors.borderPrimary);
    document.documentElement.style.setProperty('--layout-bg', colors.layoutBg);
    document.documentElement.style.setProperty('--link-text-hover', colors.linkTextHover);
    document.documentElement.style.setProperty('--modal-scrollbar', colors.modalScrollbar);
    document.documentElement.style.setProperty('--player-bg', colors.playerBg);
    document.documentElement.style.setProperty('--purple-primary', colors.purplePrimary);
    document.documentElement.style.setProperty('--primary-bg', colors.primaryBg);
    document.documentElement.style.setProperty('--sidebar-popup-bg', colors.sidebarPopupBg);
    document.documentElement.style.setProperty('--text-color', colors.textColor);
    document.documentElement.style.setProperty('--text-item-hover', colors.textItemHover);
    document.documentElement.style.setProperty('--text-secondary', colors.textSecondary);
    document.documentElement.style.setProperty('--navigation-text', colors.navigationText);
    document.documentElement.style.setProperty('--placeholder-text', colors.placeholderText);

    const appEl = document.querySelector('.app-container');
    const playerEl = document.querySelector('.player');
    const playerBackground = document.querySelector('.player-background');
    if (currentThemeColor?.background) {
      appEl.style.backgroundImage = `url('${currentThemeColor.background}')`;
      if (playerBackground)
        playerBackground.style.backgroundImage = `url('${currentThemeColor.background}')`;
    } else {
      appEl.style.backgroundImage = 'none';
      if (playerBackground) playerBackground.style.backgroundImage = 'none';
    }

    if (playerEl)
      if (currentThemeColor?.playerBackground) {
        playerEl.style.backgroundImage = `url('${currentThemeColor.playerBackground}')`;
      } else {
        playerEl.style.backgroundImage = 'none';
      }
  };

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
        {THEMES.map((theme, index) => (
          <div key={index} className="theme-item">
            <h3 className="theme-container__title">{theme.type}</h3>
            <Row className="g-4">
              {theme.list.map((item, index) => (
                <Col key={index} xs="6" sm="4" md="3" xl="2">
                  <div className="theme-container__item">
                    <div className="theme-container__overlay"></div>
                    <img src={item.image} alt="theme" />
                    <div className="theme-container__inner">
                      <Button
                        onClick={() => handleApplyTheme(item)}
                        column
                        fullWidth
                        small
                        primary
                        uppercase
                      >
                        Áp dụng
                      </Button>
                      <Button column fullWidth small outline uppercase>
                        Xem trước
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
    </Modal>
  );
}

Theme.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default memo(Theme);
