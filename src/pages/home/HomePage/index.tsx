import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main className="main">
      <section className="home-hero">
        <img
          className="home-hero__grid"
          src="static/img/home/hero-bg.png"
          alt="grid"
        />
        <img
          className="home-hero__iroglyphs"
          src="static/img/svg/home-hero-iroglyphs.svg"
          alt="iroglyphs"
        />
        <div className="container">
          <div className="home-hero__wrap">
            <div className="home-hero__course">
              <span className="home-hero__course-tag">Новое</span>
              <p>Новый курс “Курс для подготовки к HSK1”</p>
            </div>
            <h1 className="home-hero__title">
              Онлайн-школа изучения китайского языка
            </h1>
            <p className="home-hero__subtitle">
              Chinese Empire-это занятия из любой точки мира, увлекательное
              изучение языка, удобная онлайн платформа
            </p>
            <a className="home-hero__btn btn btn--red" href="#">
              Присоединиться
              <svg className="btn__icon">
                <use xlinkHref="img/sprite_auto.svg#arrow-btn"></use>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="home-courses landing-section">
        <div className="container">
          <div className="home-courses__head landing-section__head">
            <span className="landing-section__tag">Список наших курсов</span>
            <h2 className="landing-section__title">
              Наши курсы составлены сразу несколькими носителями языка
            </h2>
            <p className="landing-section__subtitle">
              Наша команда состоит из людей, которые взаимно дополняют друг
              друга и создают лучший продукт для изучения, практики и обширного
              применения Китайского языка
            </p>
          </div>
          <div className="home-courses__slider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="home-courses__item">
                  <div className="home-courses__item-info">
                    <p className="home-courses__item-name">
                      Курс для подготовки к HSK1
                    </p>
                    <p className="home-courses__item-descr">
                      Первая ступень для тех, кто хочет начать изучать Китайский
                      язык и освоить базу
                    </p>
                    <ul className="home-courses__item-features course-features">
                      <li className="course-features__item">
                        Доступ к платформе
                        <br />
                        со всеми материалами
                      </li>
                      <li className="course-features__item">
                        Статистика успеваемости
                      </li>
                      <li className="course-features__item">500 новых слов</li>
                      <li className="course-features__item">Грамматика 1HSK</li>
                    </ul>
                  </div>
                  <div className="home-courses__item-footer">
                    <p className="home-courses__item-price">4500₽</p>
                    <a className="home-courses__item-btn btn" href="#">
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="home-courses__item">
                  <div className="home-courses__item-info">
                    <p className="home-courses__item-name">
                      Курс для подготовки к HSK1
                    </p>
                    <p className="home-courses__item-descr">
                      Первая ступень для тех, кто хочет начать изучать Китайский
                      язык и освоить базу
                    </p>
                    <ul className="home-courses__item-features course-features">
                      <li className="course-features__item">
                        Доступ к платформе
                        <br />
                        со всеми материалами
                      </li>
                      <li className="course-features__item">
                        Статистика успеваемости
                      </li>
                      <li className="course-features__item">500 новых слов</li>
                      <li className="course-features__item">Грамматика 1HSK</li>
                    </ul>
                  </div>
                  <div className="home-courses__item-footer">
                    <p className="home-courses__item-price">4500₽</p>
                    <a className="home-courses__item-btn btn" href="#">
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="home-courses__item">
                  <div className="home-courses__item-info">
                    <p className="home-courses__item-name">
                      Курс для подготовки к HSK1
                    </p>
                    <p className="home-courses__item-descr">
                      Первая ступень для тех, кто хочет начать изучать Китайский
                      язык и освоить базу
                    </p>
                    <ul className="home-courses__item-features course-features">
                      <li className="course-features__item">
                        Доступ к платформе
                        <br />
                        со всеми материалами
                      </li>
                      <li className="course-features__item">
                        Статистика успеваемости
                      </li>
                      <li className="course-features__item">500 новых слов</li>
                      <li className="course-features__item">Грамматика 1HSK</li>
                    </ul>
                  </div>
                  <div className="home-courses__item-footer">
                    <p className="home-courses__item-price">4500₽</p>
                    <a className="home-courses__item-btn btn" href="#">
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-promotion landing-section">
        <div className="home-promotion__head">
          <div className="container">
            <div className="landing-section__head">
              <span className="landing-section__tag">Акции</span>
              <h2 className="landing-section__title">
                Наши специальные предложения по изучению китайского языка
              </h2>
              <p className="landing-section__subtitle">
                Наша команда состоит из людей, которые взаимно дополняют друг
                друга и создают лучший продукт для изучения, практики и
                обширного применения Китайского языка
              </p>
            </div>
            <div className="home-promotion__nav">
              <button className="home-promotion__nav-btn home-promotion__nav-btn-prev">
                <svg className="home-promotion__nav-btn-icon">
                  <use xlinkHref="img/sprite_auto.svg#arrow-btn"></use>
                </svg>
              </button>
              <button className="home-promotion__nav-btn home-promotion__nav-btn-next">
                <svg className="home-promotion__nav-btn-icon">
                  <use xlinkHref="img/sprite_auto.svg#arrow-btn"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="home-promotion__slider">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="home-promotion__item promotion">
                  <p className="promotion__name">
                    Сделай подарок своей второй половинке на любой праздник
                  </p>
                  <ul className="promotion__features course-features">
                    <li className="course-features__item">
                      Доступ к платформе
                      <br />
                      со всеми материалами
                    </li>
                    <li className="course-features__item">
                      Статистика успеваемости
                    </li>
                  </ul>
                  <a className="promotion__btn btn btn--white" href="#">
                    Узнать больше
                    <svg className="btn__icon">
                      <use xlinkHref="img/sprite_auto.svg#arrow-btn"></use>
                    </svg>
                  </a>
                  <div className="promotion__bg">
                    <img
                      className="promotion__bg-img"
                      src="static/img/home/promotion.png"
                      alt="el"
                    />
                    <img
                      className="promotion__bg-img-mob"
                      src="static/img/home/promotion-mob.png"
                      alt="el"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="home-promotion__item promotion">
                  <p className="promotion__name">
                    Сделай подарок своей второй половинке на любой праздник
                  </p>
                  <ul className="promotion__features course-features">
                    <li className="course-features__item">
                      Доступ к платформе
                      <br />
                      со всеми материалами
                    </li>
                    <li className="course-features__item">
                      Статистика успеваемости
                    </li>
                  </ul>
                  <a className="promotion__btn btn btn--white" href="#">
                    Узнать больше
                    <svg className="btn__icon">
                      <use xlinkHref="img/sprite_auto.svg#arrow-btn"></use>
                    </svg>
                  </a>
                  <div className="promotion__bg">
                    <img
                      className="promotion__bg-img"
                      src="static/img/home/promotion.png"
                      alt="el"
                    />
                    <img
                      className="promotion__bg-img-mob"
                      src="static/img/home/promotion-mob.png"
                      alt="el"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="home-promotion__item promotion">
                  <p className="promotion__name">
                    Сделай подарок своей второй половинке на любой праздник
                  </p>
                  <ul className="promotion__features course-features">
                    <li className="course-features__item">
                      Доступ к платформе
                      <br />
                      со всеми материалами
                    </li>
                    <li className="course-features__item">
                      Статистика успеваемости
                    </li>
                  </ul>
                  <a className="promotion__btn btn btn--white" href="#">
                    Узнать больше
                    <svg className="btn__icon">
                      <use xlinkHref="img/sprite_auto.svg#arrow-btn"></use>
                    </svg>
                  </a>
                  <div className="promotion__bg">
                    <img
                      className="promotion__bg-img"
                      src="static/img/home/promotion.png"
                      alt="el"
                    />
                    <img
                      className="promotion__bg-img-mob"
                      src="static/img/home/promotion-mob.png"
                      alt="el"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-news landing-section">
        <div className="container">
          <div className="landing-news__head landing-section__head">
            <span className="landing-section__tag">Новости</span>
            <h2 className="landing-section__title">Последние новости</h2>
            <p className="landing-section__subtitle">
              Наша команда состоит из людей, которые взаимно дополняют друг
              друга и создают лучший продукт для изучения, практики и обширного
              применения Китайского языка
            </p>
          </div>
          <div className="landing-news__grid news-grid">
            <div className="news-grid__item news-card">
              <div className="news-card__img">
                <img src="static/img/page/video-2.jpg" alt="photo" />
              </div>
              <p className="news-card__descr">
                Стратегическое планирование, написание и сопровождение
                документации проекта.
              </p>
              <a className="news-card__link" href="#">
                Читать далее
              </a>
            </div>
            <div className="news-grid__item news-card">
              <div className="news-card__img">
                <img src="static/img/page/video-2.jpg" alt="photo" />
              </div>
              <p className="news-card__descr">
                Стратегическое планирование, написание и сопровождение
                документации проекта.
              </p>
              <a className="news-card__link" href="#">
                Читать далее
              </a>
            </div>
            <div className="news-grid__item news-card">
              <div className="news-card__img">
                <img src="static/img/page/video-2.jpg" alt="photo" />
              </div>
              <p className="news-card__descr">
                Стратегическое планирование, написание и сопровождение
                документации проекта.
              </p>
              <a className="news-card__link" href="#">
                Читать далее
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-reviews landing-section">
        <div className="container">
          <div className="landing-reviews__head landing-section__head">
            <span className="landing-section__tag">Отзывы</span>
            <h2 className="landing-section__title">Актуальные отзывы</h2>
            <p className="landing-section__subtitle">
              Наша команда состоит из людей, которые взаимно дополняют друг
              друга и создают лучший продукт для изучения, практики и обширного
              применения Китайского языка
            </p>
          </div>
          <div className="landing-reviews__wrap">
            <div className="landing-reviews__slider swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="landing-reviews__item review-text">
                    <div className="review-text__content">
                      <p>
                        Начал заниматься с декабря. За это время очень сильно
                        подтянул свои знания. Занятия проходят очень легко и
                        интересно, весь материал преподносится максимально
                        доступно. Рекомендую школу, если вы отнесетесь к
                        подготовке ответсенно, то обязательно достигните
                        желаемого результата.
                      </p>
                    </div>
                    <div className="review-user">
                      <div className="review-user__photo">
                        <img src="static/img/page/user-photo.jpg" alt="photo" />
                      </div>
                      <div className="review-user__info">
                        <p className="review-user__name">Алексей Люлин</p>
                        <a className="review-user__link" href="#">
                          vk.com/1234321
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="landing-reviews__item review-text">
                    <div className="review-text__content">
                      <p>
                        Начал заниматься с декабря. За это время очень сильно
                        подтянул свои знания. Занятия проходят очень легко и
                        интересно, весь материал преподносится максимально
                        доступно. Рекомендую школу, если вы отнесетесь к
                        подготовке ответсенно, то обязательно достигните
                        желаемого результата.
                      </p>
                    </div>
                    <div className="review-user">
                      <div className="review-user__photo">
                        <img src="static/img/page/user-photo.jpg" alt="photo" />
                      </div>
                      <div className="review-user__info">
                        <p className="review-user__name">Алексей Люлин</p>
                        <a className="review-user__link" href="#">
                          vk.com/1234321
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="landing-reviews__item review-text">
                    <div className="review-text__content">
                      <p>
                        Начал заниматься с декабря. За это время очень сильно
                        подтянул свои знания. Занятия проходят очень легко и
                        интересно, весь материал преподносится максимально
                        доступно. Рекомендую школу, если вы отнесетесь к
                        подготовке ответсенно, то обязательно достигните
                        желаемого результата.
                      </p>
                    </div>
                    <div className="review-user">
                      <div className="review-user__photo">
                        <img src="static/img/page/user-photo.jpg" alt="photo" />
                      </div>
                      <div className="review-user__info">
                        <p className="review-user__name">Алексей Люлин</p>
                        <a className="review-user__link" href="#">
                          vk.com/1234321
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="landing-reviews__slider swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="landing-reviews__item review-video">
                    <a
                      className="review-video__cover"
                      href="https://youtu.be/PGuxpIo47Pg"
                      data-fancybox
                    >
                      <img src="static/img/page/video-1.jpg" alt="cover" />
                    </a>
                    <div className="review-user">
                      <div className="review-user__photo">
                        <img src="static/img/page/user-photo.jpg" alt="photo" />
                      </div>
                      <div className="review-user__info">
                        <p className="review-user__name">Алексей Люлин</p>
                        <a className="review-user__link" href="#">
                          vk.com/1234321
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="landing-reviews__item review-video">
                    <a
                      className="review-video__cover"
                      href="https://youtu.be/PGuxpIo47Pg"
                      data-fancybox
                    >
                      <img src="static/img/page/video-2.jpg" alt="cover" />
                    </a>
                    <div className="review-user">
                      <div className="review-user__photo">
                        <img src="static/img/page/user-photo.jpg" alt="photo" />
                      </div>
                      <div className="review-user__info">
                        <p className="review-user__name">Алексей Люлин</p>
                        <a className="review-user__link" href="#">
                          vk.com/1234321
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="landing-reviews__item review-video">
                    <a
                      className="review-video__cover"
                      href="https://youtu.be/PGuxpIo47Pg"
                      data-fancybox
                    >
                      <img src="static/img/page/video-3.jpg" alt="cover" />
                    </a>
                    <div className="review-user">
                      <div className="review-user__photo">
                        <img src="static/img/page/user-photo.jpg" alt="photo" />
                      </div>
                      <div className="review-user__info">
                        <p className="review-user__name">Алексей Люлин</p>
                        <a className="review-user__link" href="#">
                          vk.com/1234321
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-feedback">
        <div className="container">
          <div className="home-feedback__wrap">
            <div className="home-feedback__text">
              <h2 className="home-feedback__title">
                Всё еще сомневаетесь или нуждаетесь в подробной информации?
              </h2>
              <p className="home-feedback__subtitle">
                Оставьте заявку, и наш оператор свяжется с вами!
              </p>
            </div>
            <div className="home-feedback__form">
              <div className="home-feedback__form-wrap">
                <input
                  className="home-feedback__input"
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                />
                <input
                  className="home-feedback__input"
                  type="tel"
                  name="tel"
                  placeholder="Телефон"
                />
              </div>
              <button
                className="home-feedback__btn btn btn--orange"
                type="submit"
              >
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
