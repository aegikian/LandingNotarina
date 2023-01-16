import React from "react";
import './AppModalIos.css';

const AppModalIosContent = () => {
    const ios = require('../img/ios_notarina.png');
    return (
        <div className="ModalDownAll">
            <div className="ModalIosCont">
                <img src={ios} alt='qr-IOS'></img>
                <a className="ButtonDownload" target='_blank' href='https://apps.apple.com/ru/app/%D0%BD%D0%BE%D1%82%D0%B0%D1%80%D0%B8%D1%83%D1%81-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1534176730'>
                    Скачать в AppStore
                </a>
            </div>
        </div>
    );
};

export default AppModalIosContent;