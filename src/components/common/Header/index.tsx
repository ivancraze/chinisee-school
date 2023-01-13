import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header header--home  ">
      <div className="container">
        <div className="header__wrap">
          <a className="header__logo">
            <img
              className="header__logo-icon header__logo-img"
              src="static/img/svg/logo-page.svg"
              alt="logo"
            />
            <svg className="header__logo-icon header__logo-svg">
              <use xlinkHref="img/sprite_auto.svg#logo"></use>
            </svg>
            <span>Сhinese Empire</span>
          </a>

          <div className="header__info">
            <button className="header__info-close" type="button"></button>
            <nav className="header__menu">
              <ul className="header__menu-list">
                <li className="header__nav-item">
                  <a className="header__nav-link active">Главная</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link " href="./about.html">
                    О компании
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link " href="./courses.html">
                    Курсы
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link " href="./reviews.html">
                    Отзывы
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link " href="./news.html">
                    Новости
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__btns header__btns--mob">
              <a className="header__btns-item header__btns-enter btn" href="#">
                Войти
              </a>
            </div>
          </div>
          <div className="header__btns ">
            <a className="header__btns-item header__btns-enter btn" href="#">
              Вход
            </a>
          </div>
          <div className="header__user user-header hidden">
            <button className="user-header__btn js_user-btn" type="button">
              <div className="user-header__btn-photo">
                <img src="static/img/page/user-photo.jpg" alt="photo" />
              </div>
              <span className="user-header__btn-name">Никита</span>
            </button>
            <div className="user-header__popup js_user-popup">
              <div className="user-header__popup-info">
                <div className="user-header__popup-photo">
                  <img src="static/img/page/user-photo.jpg" alt="photo" />
                </div>
                <div className="user-header__popup-info-wrap">
                  <a className="user-header__popup-name" href="#">
                    Никита
                  </a>
                  <span className="user-header__popup-mail">
                    nikita@gmail.com
                  </span>
                </div>
              </div>
              <ul className="user-header__popup-menu">
                <li className="user-header__popup-menu-item">
                  <a href="#">Мои курсы</a>
                </li>
                <li className="user-header__popup-menu-item">
                  <a href="#">Задания</a>
                </li>
                <li className="user-header__popup-menu-item">
                  <a href="#">Сообщения</a>
                </li>
                <li className="user-header__popup-menu-item">
                  <a href="#">Личная информация</a>
                </li>
              </ul>
              <a className="user-header__popup-exit" href="#">
                Выйти
              </a>
            </div>
          </div>
          <button className="header__burger" type="button">
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
