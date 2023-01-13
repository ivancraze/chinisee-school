import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <Link to="/" className="footer__logo">
            <svg className="footer__logo-icon">
              <use xlinkHref="img/sprite_auto.svg#logo"></use>
            </svg>
            <span>Сhinese Empire</span>
          </Link>
          <div className="footer__info">
            <nav className="footer__menu">
              <ul className="footer__menu-list">
                <li className="footer__nav-item">
                  <Link to="/" className="footer__nav-link ">
                    Главная
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/about" className="footer__nav-link ">
                    О компании
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/courses" className="footer__nav-link ">
                    Курсы
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/reviews" className="footer__nav-link ">
                    Отзывы
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/news" className="footer__nav-link ">
                    Новости
                  </Link>
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
