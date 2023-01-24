import React from "react";
import "./NavTop.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Topnav() {
  const logot = require("./modules/img/logo.png");
  return (
    <div className="topnavall">
      <div className="topnav1">
        <img src={logot} alt="logo" width="60px" className="logot" />
        <div className="NavGrid">
          <a href='https://notarina.ru/signin' className="rightnav">
            Авторизация Нотариуса
          </a>
          <a href='https://notarina.ru/signup' className="rightnav">Регистрация Нотариуса</a>
          <Link to="WorkspaceNot" className="rightnav" href="#home">
            Для Нотариуса
          </Link>
          <Link to='WorkspaceUser' className="rightnav" href="#home">
            Для Пользователя
          </Link>
          <Link to='Download' className="rightnav" href="#home">
            Скачать
          </Link>
          <Link to='Contacts' className="rightnav" href="#home">
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
