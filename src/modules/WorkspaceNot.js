import React from "react";
import '../css/WorkspaceNot.css';


const WorkspaceNot = () => {



    return (
        <div className="WorkspaceNotAll">
            <h1 className="WorkspaceH1">Рабочая область нотариуса</h1>
            <br />
            <div className="WorcspaceDiv">
                <div className='WorcspaceContent'>
                    <h1 className='h1OnlineCommand'>Онлайн управление</h1>
                    <p> Вы сможете оперативно управлять изменениями в тарифах и условиях<br /> </p>
                </div>
                <div className='WorcspaceContent2'>
                    <h1 className='h1OnlineCommand'>Онлайн контроль</h1>
                    <p> Вы всегда знаете, сколько клиентов к Вам записано. И в любой момент сможете изменить ваше расписание <br /> </p>
                </div>
                <div className='WorcspaceContent3'>
                    <h1 className='h1OnlineCommand'>Онлайн информирование</h1>
                    <p>

                        Вы будете уведомлены об изменениях в вашем расписании,
                        а ваши клиенты смогут получать напоминания о предстоящем приеме<br /> </p>
                </div>
                <div className='WorcspaceContent4'>
                    <h1 className='h1OnlineCommand'>Онлайн оплата</h1>
                    <p> Вы всегда сможете оказывать предоплаченные услуги
                        с подключенным модулем
                        онлайн-оплаты<br /> </p>
                </div>
            </div>
        </div>
    );
}

export default WorkspaceNot;