import React from "react";
import '../css/FunctionMobApp.css';

const FunctionMobApp = () => {
    const LogoLarge = require("./img/logo.png");
    return (
        <div className='FunctionMobAll'>
            <h1 className="FMAH1Top">Функции мобильного приложения</h1>
            <div className="FuncMobAppText">
                <div className="FmaDiv">
                    <ul className="ULFMA">
                        <li>Поиск<br />Будьте там, где клиенты найдут. <br />
                            Приложение покажет вас на карте</li><br />
                    </ul></div><div className="FmaDiv">
                    <ul className="ULFMA">
                        <li>Маршрут<br />Клиенты легко узнают к вам путь. <br />
                            Приложение подскажет маршрут до вашего офиса</li><br /></ul>
                </div><div className="FmaDiv">
                    <ul className="ULFMA">
                        <li>Запись<br />Клиенты выбирают онлайн удобное время.<br />
                            Приложение покажет с какими нотариальными действиями к вам записаны клиенты</li><br /></ul>
                </div><div className="FmaDiv">
                    <ul className="ULFMA">
                        <li>Консультация<br />Клиенты получают онлайн консультацию до прихода
                            в офис. <br /> Приложение экономит Ваше время на прием</li><br /></ul>
                </div><div className="FmaDiv">
                    <ul className="ULFMA">
                        <li>Подача документов<br />Клиенты направляют документы через приложение для получения консультации <br /> и подготовки к нотариальным действиям</li><br />
                    </ul>
                </div>
                <div className="FmaDiv">
                    <ul className="ULFMA">
                        <li>Всегда на связи<br />Клиенты могут использовать чат в приложении для консультации и вы всегда будете обладать актуальной инфорацией</li><br />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FunctionMobApp;