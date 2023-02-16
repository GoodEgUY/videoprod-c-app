import React from "react";
import "./projects.css";
import caserouter from "../../assests/config.routes/casecards/casecards.json";
import { useParams } from "react-router-dom";
// 1 stage pages

// 2 stage pages

const GreenTravel = () => {
  const { urlName } = useParams();

  const caseInfo = caserouter.find((project) => project.urlName === urlName);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="projectContent" onLoadStart={scrollToTop}>
        <div className="projectIntro">
          <img
            className="introImage"
            src="/images/projects/greentravel/intro.jpg"
            alt=""
          />
          <div className="projectIntroText">
            <p>{caseInfo.name}</p>
            <div className="introCross">
              <p>деталі</p>
              <img src="/images/arrow.png" alt="" />
            </div>
          </div>
        </div>
        <div className="projectBackstageVideo">
          <p className="projectText">/</p>
          <iframe
            className="videoMain"
            src="https://www.youtube.com/embed/td3p2m-F84o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="projectDetails">
          <p>
            серія з 3-х іміджевих роликів (+ адаптації) страхова компанія “Green
            Travel
          </p>
          <p>
            Це було у вересні 2022. Класна українська страхова компанія прийшла
            до Arriba! (класної української креативної агенції) щоб зробити
            повний ребрендинг: змінити вектор компанії, створити новий дизайн,
            персонажа і тп. Одним із способів просування обрали іміджевий ролик
            і почали шукати продакшн: щоб було в бюджеті і з класною командою. І
            прийшли до нас. Бо у нас в бюджеті і з класною командою:)
          </p>
        </div>
        <div className="projectImages">
          <img src="/images/projects/greentravel/backstage1.jpg" alt="" />
          <img src="/images/projects/greentravel/backstage2.jpg" alt="" />
        </div>
        <div className="projectDetails">
          <p className="projectText">
            Знімали в студії з трьома локаціями і десятком тварин… бо вони тут
            були одними з головних героїв! Це була перша зйомка, на якій ми мали
            власну “переговорочну” і фірмові наліпочки, які ліпили до всього і
            всих, кого бачили. А бачили ми багато кого, бо зібрали команду з 30
            людей (50/50 — супер-досвідчені кияни і працьовиті харків’яни). Далі
            8 годин катали Пашу з Arriba! на тєлєжці, везли рибок через весь
            Київ, нянчились з бульдожком, шикали на всіх, хто ходив під час
            запису звуку і кайфували від нового досвіду. І як результат — зняли
            3 крутезних іміджевих ролики з купою адаптацій.{" "}
          </p>
          <h2>
            <b>ТОП-5 рандомних фактів з проєкту “Грінтеревел”</b>
          </h2>
          <p>
            <br />- з київськими технарями працювати в кайф
            <br />- рибки мають приїзджати на зйомку першими, щоб не
            адаптуватись
            <br />- з 10 папуг, скоріше за все, знадобляться лише 3..
            <br />- собаки не люблять хлопавку, але люблять, коли продюсерка
            носить їх на руках
            <br />- можна вибиватись з таймінгу лише на 6 хв (якщо ви працювали
            з продакшенами - знаєте, що то ідеаліті)
          </p>
        </div>
        <div className="projectBackstageVideo">
          <p className="projectText">
            <b>Відео з беку</b>
          </p>
          <iframe
            width="1030"
            height="515"
            src="https://www.youtube.com/embed/nPhGvW5td9g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="projectDetails">
          <p className="projectText">
            Мораль цього проєкту: Якщо ви страхова — не обов'язково треба
            знімати, як ви підписуєте папірці чи працюєте з серйозним обличчям.
            Можна зробити щось неочікуване, цікаве і потрапити в саме
            серденько:)
          </p>
        </div>
        <div className="projectCredits">
          <p className="projectCreditsText">
            Продакшн — PALAY <img src="/images/fire.gif" width={40} alt="" />
            <br /> Клієнт — Green Travel
            <br /> Ідея — Аrriba!
            <br /> Режисерка — Лада Сабова
            <br /> Продюсерка — Еветта Лукаш
            <br /> Оператор — Павло Іткін
            <br /> 2 режисер/монтаж — Ярослав Лукаш
            <br />
            Лінійний продюсер — Вадим Шульпін
            <br /> Асистент продюсера — Даша Лукаш
            <br /> Худ. постановник — Анастасія Одінцова та команда
            <br /> Механік камери: Антон Седін
            <br />
            Гафер — Роман Панченко
            <br /> Фокус-пулер — Констянтин Гончаров
            <br /> Кейгрип — Денис Прокопенко
            <br /> Електрик — Олександр Коротчук
            <br /> Освітлювач — Євгеній Сидоренко
            <br /> Механік долі — Ярослав Ільницький
            <br /> 2-й механік долі — Максим Балимов
            <br />
            Актори: @vladisavechuk, @a8leyka, @maksymrude, @tot_jambo
            <br />
            Саунд дизайн — Василь Явтушенко
            <br /> Хлопавка — @itak._.masha
            <br /> Колір — Констянтин Гончаров
            <br /> Оператор бекстейджу — Михайло Власенко
            <br /> Бекстейдж-фотографиня — Наталя Прудка
            <br /> Стиліст — Анна Лимаренко
            <br />
            MUA — Анна Герус
            <br />
            <br />
            Особлива подяка: Patriot rental та Kitchenkyiv
          </p>
        </div>
      </div>
    </>
  );
};

export default GreenTravel;
