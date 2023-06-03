import React, { useEffect, useState } from "react";
import "./NavTop.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Topnav() {
  const logot = require("./modules/img/logo.png");

  return (
    <div className="topnavall">
      <div className="topnav1">
        <div className="NavGrid">
          <img src={logot} alt="logo" width="60px" className="logot" />
          <a href='https://notarina.ru/signup' className="rightnav hide_a">
            Авторизация Нотариуса
          </a>
          <a href='https://notarina.ru/signin' className="rightnav hide_a">Регистрация Нотариуса</a>
          <Link to="WorkspaceNot" className="rightnav hide_a" href="#home">
            Для Нотариуса
          </Link>
          <Link to='WorkspaceUser' className="rightnav hide_a" href="#home">
            Для Пользователя
          </Link>
          <Link to='Download' className="rightnav" href="#home">
            Скачать
          </Link>
          <Link to='Contacts' className="rightnav" href="#home">
            Контакты
          </Link>
          <div className="dropdown">
            <span className="dropbtn rightnav">Сервисы</span>
            <div className="dropdown-content">
              <a rel="noreferrer" target="_blank" href='https://notariat.ru/ru-ru/help/probate-cases/' className="rightnav">
                Реестр наследственных дел
              </a>
              <a rel="noreferrer" target="_blank" href='https://notariat.ru/ru-ru/help/reestr-uvedomlenij-o-zaloge-dvizhimogo-imushestva/' className="rightnav">
                Реестр уведомлений о залоге движимого имущества
              </a>
              <a rel="noreferrer" target="_blank" href='https://notariat.ru/ru-ru/help/servis-proverki-doverennostej/' className="rightnav">
                Сервис проверки доверенностей
              </a>
              <a rel="noreferrer" target="_blank" href='https://data.notariat.ru/directory/succession/search' className="rightnav">
                Розыск наследников
              </a>
              <a rel="noreferrer" target="_blank" href='https://notariat.ru/ru-ru/help/' className="rightnav">
                Прочие проверки и реестры
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
