import React from "react";
import "../css/Pluses.css";

function Pluses() {
  const gb1 = require("./img/gp1.png");
  const gb2 = require("./img/gp2.png");
  const gb3 = require("./img/gp3.png");
  return (
    <div className="gridPicture">
      <div className='PlusDivGrid'>
        <figure className="sign">
          <img src={gb1} alt="Скульптура" width="65px" />
          <figcaption>
            {" "}
            <strong> Геолокация</strong>
            <hr />
            <br /> Использование gps для определения точных координат пользователя
            и ближайшей нотариальной конторы
          </figcaption>
        </figure>
      </div>
      <div className='PlusDivGrid'>
        <figure className="sign">
          <img src={gb2} alt="Скульптура" width="100px" />
          <figcaption>
            {" "}
            <strong>Мобильность</strong>
            <hr />
            <br /> Аудитория потенциальных потребителей со смартфонами больше, чем
            с компьютерами. Сайт можно закрыть и уйти к конкурентам, а мобильное
            приложение остается в телефоне
          </figcaption>
        </figure>
      </div>
      <div className='PlusDivGrid'>
        <figure className="sign">
          <img src={gb3} alt="Скульптура" width="120px" />
          <figcaption>
            {" "}
            <strong>Скорость и удобство</strong>
            <hr />
            <div className="textPlus">
              <br /> Вы можете выбрать ближайшую нотариальную контору с удобным
              графиком работы, забронировать время и подать документы в работу, что сохранит Ваше время
            </div></figcaption>
        </figure>
      </div>
    </div>
  );
}
export default Pluses;
