import React from 'react';
import { useDispatch } from 'react-redux';

const AuthModal: React.FC = () => {
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch({ type: 'saga/closeModal' });
  };

  return (
    <>
      <div className="modal-enter">
        <div className="modal-enter__cover">
          <img
            className="modal-enter__logo"
            src="static/img/svg/logo-modal-enter.svg"
            alt="logo"
          />
          <div className="modal-enter__cover-img">
            <img src="static/img/page/modal-enter.jpg" alt="logo" />
          </div>
          <div className="modal-enter__cover-link">
            <a href="https://chinese-empire.ru">https://chinese-empire.ru</a>
          </div>
        </div>
        <div className="modal-enter__content">
          <div className="modal-enter__tabs js_modal-enter-tabs">
            <button
              className="modal-enter__title modal-enter__tabs-item js_modal-enter-tab active"
              type="button"
            >
              Регистрация
            </button>
            <button
              className="modal-enter__title modal-enter__tabs-item js_modal-enter-tab"
              type="button"
            >
              Вход
            </button>
          </div>
          <form className="modal-enter__form modal-enter__form--tab active js_modal-enter-form">
            <label className="modal-enter__label label">
              <p className="label__name">Введите ваше имя</p>
              <input className="input" type="text" name="name" value="Никита" />
            </label>
            <label className="modal-enter__label label">
              <p className="label__name">Введите вашу фамилию</p>
              <input
                className="input"
                type="text"
                name="last-name"
                value="Ковалев"
              />
            </label>
            <label className="modal-enter__label label">
              <p className="label__name">Введите адрес электронной почты</p>
              <input className="input" type="email" name="mail" />
            </label>
            <label className="modal-enter__label label">
              <p className="label__name">Придумайте пароль</p>
              <input className="input" type="password" name="password" />
            </label>
            <label className="modal-enter__label label">
              <p className="label__name">Подтвердите пароль</p>
              <input
                className="input"
                type="password"
                name="password-confirm"
              />
            </label>
            <label className="modal-enter__label checkbox">
              <input className="visually-hidden" type="checkbox" />
              <div className="checkbox__wrap">
                <span className="checkbox__el"></span>
                <p>Даю согласие на обработку моих личных данных</p>
              </div>
            </label>
            <div className="modal-enter__form-footer">
              <button
                className="modal-enter__form-btn btn btn--red"
                type="submit"
              >
                Зарегистрироваться
              </button>
              <p className="modal-enter__form-forgot">
                Забыли пароль? <a href="#">Сбросить</a>
              </p>
            </div>
          </form>
          <form className="modal-enter__form modal-enter__form--tab js_modal-enter-form">
            <label className="modal-enter__label label">
              <p className="label__name">Введите адрес электронной почты</p>
              <input className="input" type="email" name="mail" />
            </label>
            <label className="modal-enter__label label">
              <p className="label__name">Придумайте пароль</p>
              <input className="input" type="password" name="password" />
            </label>
            <label className="modal-enter__label checkbox">
              <input className="visually-hidden" type="checkbox" />
              <div className="checkbox__wrap">
                <span className="checkbox__el"></span>
                <p>Запомнить меня</p>
              </div>
            </label>
            <div className="modal-enter__form-footer">
              <button
                className="modal-enter__form-btn btn btn--red"
                type="submit"
              >
                Войти
              </button>
              <p className="modal-enter__form-forgot">
                Забыли пароль? <a href="#">Сбросить</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <button
        onClick={onCloseModal}
        className="modal__close-btn"
        type="button"
        aria-label="Закрыть попап"
      ></button>
    </>
  );
};

export default AuthModal;
