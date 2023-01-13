import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <a className="footer__logo" href="home.html">
            <svg className="footer__logo-icon">
              <use xlinkHref="img/sprite_auto.svg#logo"></use>
            </svg>
            <span>Сhinese Empire</span>
          </a>
          <div className="footer__info">
            <nav className="footer__menu">
              <ul className="footer__menu-list">
                <li className="footer__nav-item">
                  <a className="footer__nav-link " href="/home.html">
                    Главная
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link " href="./programs.html">
                    О компании
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link " href="./programs.html">
                    Курсы
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link " href="./programs.html">
                    Отзывы
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a className="footer__nav-link " href="./programs.html">
                    Новости
                  </a>
                </li>
              </ul>
            </nav>
            <div className="footer__info-wrap">
              <ul className="footer__soc">
                <li className="footer__soc-item">
                  <a className="footer__soc-link" href="#">
                    <svg className="footer__soc-icon">
                      <use xlinkHref="img/sprite_auto.svg#instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="footer__soc-item">
                  <a className="footer__soc-link" href="#">
                    <svg className="footer__soc-icon">
                      <use xlinkHref="img/sprite_auto.svg#telegram"></use>
                    </svg>
                  </a>
                </li>
                <li className="footer__soc-item">
                  <a className="footer__soc-link" href="#">
                    <svg className="footer__soc-icon">
                      <use xlinkHref="img/sprite_auto.svg#vk"></use>
                    </svg>
                  </a>
                </li>
              </ul>
              <a className="footer__info-link" href="#">
                Политика конфиденциальности
              </a>
              <a className="footer__info-link" href="#">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
