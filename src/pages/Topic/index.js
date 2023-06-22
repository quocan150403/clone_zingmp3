import './Topic.scss';

function Topic() {
  return (
    // Following
    <div className="app__container tab--following">
      <div className="app__container-content">
        <div className="following__container">
          <div className="grid">
            {/* Following Navbar */}
            <div className="following__navbar">
              <div className="following__navbar-container">
                <ul className="following__navbar-menu">
                  <li className="following__navbar-item active hide-on-tablet">
                    <span>Việt Nam</span>
                  </li>
                  <li className="following__navbar-item">
                    <span>US-UK</span>
                  </li>
                  <li className="following__navbar-item">
                    <span>K-Pop</span>
                  </li>
                  <li className="following__navbar-item">
                    <span>Hoa Ngữ</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Singer slide */}
            <div className="row container__section mb-50">
              <div className="col l-12 m-12 c-12 singer__slide-row">
                <div className="row no-wrap singer-slide--container" />
              </div>
            </div>
            {/* Story posts */}
            <div className="row container__section">
              <div className="col l-12 m-12 c-12">
                <div className="row">
                  <div className="col l-6 m-6 c-12 story--container" />
                  <div className="col l-6 m-6 c-12 story--container" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topic;
