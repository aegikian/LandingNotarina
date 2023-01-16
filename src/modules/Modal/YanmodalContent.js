import React from "react";
import './ENImodalContent.css';

const YanmodalContent = () => {
    return (
        <div className="AllEMCDIV">
            <ul className="ul1">
                <li>20% ищут нотариуса и могут перейти на сайт</li>
                <br />
                <li>20 % ищут адрес нотариальной конторы, чтобы приехать</li>
                <br />
                <li>
                    20% хотят найти номер телефона и позвонить для уточнения
                    информации
                </li>
                <br />
                <li>10% хотят узнать режим работы</li>
                <br />
                <li>10% нужна информацию об услуге и списке документов</li>
                <br />
                <li>10% нужна информация о тарифах</li>
                <br />
                <li>10% прочие вопросы</li>
            </ul>
        </div>
    );
};

export default YanmodalContent;