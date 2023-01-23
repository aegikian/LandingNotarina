import React from 'react';
import '../css/CivilandBuisness.css';
import AppModalAndroid from './Modal/AppModalAndroid';
import AppModalIos from './Modal/AppModalIos';


const CivilandBuisness = () => {
    const andoid = require('./img/android_notarina.png');
    const ios = require('./img/ios_notarina.png');
    return (
        <div className='CivilandBuisnessAll' >
            <div className='descCAB'>
                <h1 className='h1CAB'>Мобильное приложение для населения и бизнеса</h1>
                <h6 className='h6CAB'>Это новый уровень удобства и скорости
                    получения современных правовых услуг</h6><br />
            </div>
            <div className='CivilandBuisnessDiv'>
                <br />
                <div className='AppQr'>
                    <AppModalIos />
                    <AppModalAndroid />
                </div>
                <div className='ulCaB'>
                    <ul>
                        <li>Найти нотариуса рядом с клиентом</li>
                        <li>Направить документы в работу</li>
                        <li>Забронировать время к нотариусу</li>
                        <li>Получить готовые документы в назначенное время</li>
                        <li>Узнать список документов дистанционно</li>
                        <li>Узнать тарифы по сделкам в Приложении</li>
                        <li>Получить консультацию в чате</li>
                    </ul>
                    <br />
                </div>
            </div>
            <div id='Contacts'></div>
        </div>
    )
}

export default CivilandBuisness;