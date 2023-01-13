import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import ModalLayout from '../../../layouts/ModalLayout';
import AuthModal from '../modals/AuthModal';
import { useDispatch } from 'react-redux';

const Header: React.FC = () => {
  const [burgerSidebarActive, setBurgerSidebarActive] =
    useState<boolean>(false);
  const dispatch = useDispatch();

  const onEnterButtonClick = () => {
    dispatch({ type: 'saga/showModal' });
  };

  const onBurgerButtonClick = () =>
    setBurgerSidebarActive(!burgerSidebarActive);

  return (
    <>
      <header className="header header--home ">
        <div className="container">
          <div className="header__wrap">
            <Link to="/" className="header__logo">
              <img
                className="header__logo-icon header__logo-img"
                src="static/img/svg/logo-page.svg"
                alt="logo"
              />
              <svg className="header__logo-icon header__logo-svg">
                <use xlinkHref="img/sprite_auto.svg#logo"></use>
              </svg>
              <span>Сhinese Empire</span>
            </Link>

            <div
              className={
                burgerSidebarActive ? 'header__info active' : 'header__info'
              }
            >
              <button
                onClick={onBurgerButtonClick}
                className="header__info-close"
                type="button"
              ></button>
              <nav className="header__menu">
                <ul className="header__menu-list">
                  <li className="header__nav-item">
                    <NavLink to="/" className="header__nav-link">
                      Главная
                    </NavLink>
                  </li>
                  <li className="header__nav-item">
                    <NavLink to="/about" className="header__nav-link ">
                      О компании
                    </NavLink>
                  </li>
                  <li className="header__nav-item">
                    <NavLink to="/courses" className="header__nav-link ">
                      Курсы
                    </NavLink>
                  </li>
                  <li className="header__nav-item">
                    <NavLink to="/reviews" className="header__nav-link ">
                      Отзывы
                    </NavLink>
                  </li>
                  <li className="header__nav-item">
                    <NavLink to="/news" className="header__nav-link ">
                      Новости
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="header__btns header__btns--mob">
                <div
                  onClick={onEnterButtonClick}
                  className="header__btns-item ывапывапывапывап header__btns-enter btn"
                >
                  Войти
                </div>
              </div>
            </div>
            <div className="header__btns ">
              <a
                className="header__btns-item header__btns-enter btn"
                href="#"
                onClick={onEnterButtonClick}
              >
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
            <button
              onClick={onBurgerButtonClick}
              className="header__burger"
              type="button"
            >
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <ModalLayout>
        <AuthModal />
      </ModalLayout>
    </>
  );
};

export default Header;
