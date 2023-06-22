import images from 'assets/images';
import './Header.scss';

function Header() {
  return (
    <header class="header grid">
      <div class="header__with-search">
        <button class="header__button">
          <i class="bi bi-arrow-left header__button-icon"></i>
        </button>
        <button class="header__button button--disabled">
          <i class="bi bi-arrow-right header__button-icon"></i>
        </button>
        <div class="header__search">
          <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." class="header__search-input" />
          <div class="header__search-btn">
            <i class="bi bi-search header__search-icon"></i>
          </div>
          <div class="header__search-history">
            <ul class="header__search-list">
              <li class="header__search-item">
                <i class="bi bi-search header__item-icon"></i>
                <a href="/" class="header__item-link">
                  Tình bạn diệu kì
                </a>
              </li>
              <li class="header__search-item">
                <i class="bi bi-search header__item-icon"></i>
                <a href="/" class="header__item-link">
                  Gác lại âu lo
                </a>
              </li>
              <li class="header__search-item">
                <i class="bi bi-search header__item-icon"></i>
                <a href="/" class="header__item-link">
                  Hongkong1
                </a>
              </li>
              <li class="header__search-item">
                <i class="bi bi-search header__item-icon"></i>
                <a href="/" class="header__item-link">
                  #zingchart
                </a>
              </li>
              <li class="header__search-item">
                <i class="bi bi-search header__item-icon"></i>
                <a href="/" class="header__item-link">
                  Cheating on You
                </a>
              </li>
              <li class="header__search-item">
                <i class="bi bi-search header__item-icon"></i>
                <a href="/" class="header__item-link">
                  BlackJack
                </a>
              </li>
            </ul>
          </div>

          {/* <i class="bi bi-x header__search-icon"></i> */}
        </div>
      </div>
      <div class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <div class="header__nav-btn nav-btn--theme">
              <svg width="20" height="20" class="header__nav-icon" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%">
                    <stop offset="0%" stop-color="#F81212"></stop>
                    <stop offset="100%" stop-color="red"></stop>
                  </linearGradient>
                  <linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%">
                    <stop offset="0%" stop-color="#00F"></stop>
                    <stop offset="100%" stop-color="#0031FF"></stop>
                  </linearGradient>
                  <linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%">
                    <stop offset="0%" stop-color="#FFA600"></stop>
                    <stop offset="100%" stop-color="orange"></stop>
                  </linearGradient>
                  <linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%">
                    <stop offset="0%" stop-color="#13EFEC"></stop>
                    <stop offset="100%" stop-color="#00E8DF"></stop>
                  </linearGradient>
                  <filter id="4a7imk8mze" width="230%" height="230%" x="-65%" y="-65%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                  </filter>
                  <filter
                    id="301mo6jeah"
                    width="312.7%"
                    height="312.7%"
                    x="-106.4%"
                    y="-106.4%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                  </filter>
                  <filter
                    id="b2zvzgq7fj"
                    width="295%"
                    height="295%"
                    x="-97.5%"
                    y="-97.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                  </filter>
                  <filter id="a1wq161tvl" width="256%" height="256%" x="-78%" y="-78%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                  </filter>
                  <path
                    id="qtpqrj1oda"
                    d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                  ></path>
                  <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
                  <path
                    id="2eiwxjmc7m"
                    d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                  ></path>
                </defs>
                <g fill="none" fill-rule="evenodd" transform="translate(2 3)">
                  <mask id="tinejqaasb" fill="#fff">
                    <path
                      id="qtpqrj1oda"
                      d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                    ></path>
                  </mask>
                  <path
                    id="qtpqrj1oda"
                    d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                  ></path>
                  <g mask="url(#tinejqaasb)">
                    <g transform="translate(-2 -3)">
                      <mask id="uf3ckvfvpf" fill="#fff">
                        <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
                      </mask>
                      <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
                      <circle
                        cx="8.9"
                        cy="6.8"
                        r="9"
                        fill="url(#j32lhg93hd)"
                        filter="url(#4a7imk8mze)"
                        mask="url(#uf3ckvfvpf)"
                      ></circle>
                      <circle
                        cx="9.3"
                        cy="13.7"
                        r="5.5"
                        fill="url(#hjoavsus6g)"
                        filter="url(#301mo6jeah)"
                        mask="url(#uf3ckvfvpf)"
                      ></circle>
                      <circle
                        cx="15.9"
                        cy="6.9"
                        r="6"
                        fill="url(#la1y5u3dvi)"
                        filter="url(#b2zvzgq7fj)"
                        mask="url(#uf3ckvfvpf)"
                      ></circle>
                      <circle
                        cx="16.4"
                        cy="17.7"
                        r="7.5"
                        fill="url(#2dsmrlvdik)"
                        filter="url(#a1wq161tvl)"
                        mask="url(#uf3ckvfvpf)"
                      ></circle>
                    </g>
                  </g>
                  <path
                    id="2eiwxjmc7m"
                    d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                  ></path>
                </g>
              </svg>
            </div>
          </li>
          <li class="header__nav-item hide-on-mobile">
            <div class="header__nav-btn">
              <input type="file" name="upload song" id="header__nav-input" />
              <label for="header__nav-input">
                <i class="bi bi-upload header__nav-icon"></i>
              </label>
            </div>
          </li>
          <li class="header__nav-item hide-on-mobile">
            <div class="header__nav-btn btn--nav-setting">
              <i class="bi bi-gear header__nav-icon"></i>
              <div class="setting__menu">
                <div class="setting__nav">
                  <div class="setting__item">
                    <div class="setting__item-content">
                      <i class="bi bi-shield-lock setting__item-icon"></i>
                      <span>Danh sách chặn</span>
                    </div>
                  </div>
                  <div class="setting__item">
                    <div class="setting__item-content">
                      <i class="bi bi-badge-hd setting__item-icon"></i>
                      <span>Chất lượng nhạc</span>
                    </div>
                    <i class="bi bi-chevron-right setting__item-icon"></i>
                  </div>
                  <div class="setting__item">
                    <div class="setting__item-content">
                      <i class="bi bi-play-circle setting__item-icon"></i>
                      <span>Trình phát nhạc</span>
                    </div>
                    <i class="bi bi-chevron-right setting__item-icon"></i>
                  </div>
                </div>
                <div class="setting__subnav">
                  <div class="setting__item">
                    <div class="setting__item-content">
                      <i class="bi bi-exclamation-circle setting__item-icon"></i>
                      <span>Giới thiệu</span>
                    </div>
                  </div>
                  <div class="setting__item">
                    <div class="setting__item-content">
                      <i class="bi bi-flag setting__item-icon"></i>
                      <span>Góp ý</span>
                    </div>
                  </div>
                  <div class="setting__item">
                    <div class="setting__item-content">
                      <i class="bi bi-telephone setting__item-icon"></i>
                      <span>Liên hệ</span>
                    </div>
                  </div>
                  <div class="setting__item">
                    <div class="setting__item-content">
                      <i class="bi bi-badge-ad setting__item-icon"></i>
                      <span>Quảng cáo</span>
                    </div>
                  </div>
                  <div class="setting__item">
                    <div class="setting__item-content">
                      <i class="bi bi-file-text setting__item-icon"></i>
                      <span>Thỏa thuận sử dụng</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="header__nav-item">
            <img src={images.avatar} alt="" class="header__nav-btn" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
