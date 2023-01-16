import React from "react";
import "../css/MobScreen.css";

function MobScreen() {
  const mobScImg = require("./img/mobscreen.png");
  return (
    <div className="mobscreen1">
      <div className="MobScreenAll">
        <h2 className="h2Mob">Мобильное приложение для нотариуса - это:</h2>
        <br />
        <ul className="ulMob">
          <li className="liMob">
            Удобный сервис для продвижения нотариальных услуг
          </li>
          <li className="liMob">
            Сокращение физических контактов работников конторы с клиентами
          </li>
          <li className="liMob">
            Отсутствие очередей и скопления клиентов в замкнутом пространстве
          </li>
          <li className="liMob">
            Увеличение потока клиентов и рост клиентской базы{" "}
          </li>
          <li className="liMob">
            Продвижение в Интернет мобильного сервиса для всех нотариусов на
            территории РФ
          </li>
          <li className="liMob">
            Использование приложения во много раз эффективнее, чем продвижение
            персонального сайта
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobScreen;
