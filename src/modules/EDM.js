import React from "react";
import "../css/EDM.css";
import { useState } from "react";
import ENImodal from "./Modal/ENImodal";
import Yanmodal from "./Modal/Yanmodal";
import MobAppNotMod from "./Modal/MobAppNotMod";

function Edm() {
  const serv1 = require("./img/services-1.png");
  const serv2 = require("./img/services-2.jpeg");
  const serv3 = require("./img/services-3.jpeg");


  return (
    <div>
      <div className="EDMH1div">
        <h1 className="EDMH1">
          Переход госорганов на электронный документооборот<br /> Переход нотариусов на работу с электронными документами
        </h1></div>
      <div className="EdmGrid">
        <figure className="serv">
          <img src={serv1} alt="Скульптура" width="120px" />
          <figcaption>
            {" "}
            Наличие нотариальной цифровой инфраструктуры
            <br />  <div className="EDMHidden">
              <ENImodal />
            </div>
          </figcaption>
        </figure>
        <figure className="serv">
          <img src={serv2} alt="Скульптура" width="120px" />
          <figcaption>
            {" "}
            Более 6 млн запросов в Интернете
            <br />
            <br />

            <Yanmodal />
          </figcaption>
        </figure>
        <figure className="serv">
          <img src={serv3} alt="Скульптура" width="120px" />
          <figcaption>
            {" "}
            Мобильное приложение для нотариуса - это
            <br />
            <MobAppNotMod />
          </figcaption>
        </figure>
      </div>
      <div id='WorkspaceNot' ></div>
    </div>
  );
}

export default Edm;
