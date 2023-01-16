import React from 'react';
import '../css/WorkspaceUser.css';

const WorkspaceUser = () => {
    const NotMini = require('./img/logo.png');
    const pay = require('./img/pay.png');
    const doc = require('./img/doc.png');
    const questions = require('./img/questions.png');
    const freecons = require('./img/freeconsultation.png');
    return (
        <div className='WorkspaceUserAll'>
            <div className='WorkspaceUserH1Div'>
                <h1 className='WorkspaceUserH1'>Рабочая область пользователя</h1>
            </div>
            {/* <div className='WorkspaceUserinstructions'>
                <a target='_blank' href='https://notarina.ru/website/images/INSTRUCTION%20FOR%20CLIENTS.pdf' className='WorkspaceUserButIn'>Инструкции для пользователя &nbsp; </a>
                <img src={NotMini} alt='Notarina' className='NotMiniImg'></img>
            </div><br /><br /> */}
            <div className='OptionsUsersDiv'>
                <div className='FigureWorkspaceUser'>
                    <figure>
                        <img className='OptionsUsersImgCons' src={freecons} alt='free consultation' ></img>
                        <figcaption className='OptionsUsersFigcap'><strong>Получить консультацию онлайн </strong><br /><br />
                            Узнайте список документов, размер госпошлины и стоимость в приложении.</figcaption>
                    </figure></div>
                <div className='FigureWorkspaceUser'>
                    <figure>
                        <img className='OptionsUsersImgQuest' src={questions} alt='free consultation' ></img>
                        <figcaption className='OptionsUsersFigcap'><strong>Остались вопросы?</strong><br /> <br />
                            Можно задать их в чате и сократить количество визитов
                        </figcaption>
                    </figure></div>
                <div className='FigureWorkspaceUser'>
                    <figure>
                        <img className='OptionsUsersImgDoc' src={doc} alt='free consultation' ></img>
                        <figcaption className='OptionsUsersFigcap'><strong>Удобно подать документы</strong><br /> <br />
                            Для нотариальных действий, сокращающих Время Вашего пребывания в нотариальной конторе.
                        </figcaption>
                    </figure></div>
                <div className='FigureWorkspaceUser'>
                    <figure>
                        <img className='OptionsUsersImgPay' src={pay} alt='free consultation' ></img>
                        <figcaption className='OptionsUsersFigcap'><strong>Оплатить услуги нотариуса </strong><br /><br />
                            И забронировать удобное время для получения документов</figcaption>
                    </figure></div>
            </div>
        </div>
    )
}

export default WorkspaceUser;