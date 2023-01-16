import React from 'react';
import '../css/Contacts.css';

export const Contacts = () => {
    const vk = require('./img/VK.png');
    const ok = require('./img/ok.png');
    const tg = require('./img/tg.png');
    const wa = require('./img/wa.png');
    const vb = require('./img/wb.png');
    return (
        <div className='AllDivsContact'>
            <div className='ContactsAndMessend'>
                <h1 className='ContactsH1'>Контакты</h1>
                <h3 className='CHNoBold'>Свяжитесь с нами, мы ответим на все вопросы</h3>
                <h5 className='CHNoBold'>Для поддержки, для общих вопросов, для спонсоров, <br />
                    для вопросов по обработке персональных данных</h5>
                <h5 className='h5Contacts'> &#128205; Россия, Москва, ООО НОТАРИНА</h5>
                <h5 className='h5Contacts'><a className='HrefsContact' href='tel:+79932253686'>&#128222; +7 993 22 53 686 </a>&nbsp; &nbsp; &#128233; <a className='HrefsContact2' href='mailto:info@notarina.ru'>info@notarina.ru</a> </h5>
                <h3>Узнай о нас больше</h3>
                <div className='SocialGroups'>
                    <a target='_blank' href='https://vk.com/club208237774'><img className='vkimg' src={vk} alt='vk' /></a>
                    <a target='_blank' href='https://ok.ru/profile/585204820198'><img className='okimg' src={ok} alt='ok' /> </a>
                    <a target='_blank' href='https://t.me/notarinarus'><img className='tgimg' src={tg} alt='Telegram' /></a>
                    <a target='_blank' href='https://api.whatsapp.com/send?phone=79932253686&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C'><img className='waimg' src={wa} alt='WhatsApp' /></a>
                    <a target='_blank' href='viber://chat?number=%2B79932253686'><img className='vbimg' src={vb} alt='Viber' /></a>
                </div>
            </div>
            <div className="ContactServiceFormDiv">
                <form
                    action="https://formspree.io/f/xayzwqnj"
                    method="POST"
                    className="FollowServiceForm"
                >
                    <label>
                        <input type="FirstName" name="FirstName" className="inpurFollowServ" placeholder="Фамилия" required />
                    </label>
                    <label>
                        <input type="Name" name="Name" className="inpurFollowServ" placeholder="Имя" required />
                    </label>
                    <label>
                        <input type="LastName" name="LastName" className="inpurFollowServ" placeholder="Отчество" required />
                    </label>
                    <label>
                        <input type="phonenumber" name="phonenumber" className="inpurFollowServ" placeholder="Телефон" required />
                    </label>
                    <label>
                        <input type="email" name="email" placeholder="email" className="inpurFollowServ" required />
                    </label>
                    <textarea name="message" className="inputFollowServTextContact" placeholder="Сообщение" required></textarea>
                    <label>
                        <input type='checkbox' required /><i className='aAssignmentCont'> Я соглашаюсь с правилами ООО Нотарина</i>  <br />
                        <a target='_blank' className='aAssignmentCont' href='https://notarina.ru/website/images/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5%20%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5_%D0%9D%D0%9E%D0%A2%D0%90%D0%A0%D0%98%D0%9D%D0%90.docx.pdf'>Пользовательское соглашение</a>  <br />
                        <a target='_blank' className='aAssignmentCont' href='https://notarina.ru/website/images/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%9D%D0%9E%D0%A2%D0%90%D0%A0%D0%98%D0%9D%D0%90.docx.pdf'>Политика обработки персональных данных</a><br />
                        <a target='_blank' className='aAssignmentCont' href='https://notarina.ru/website/images/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5%20%D0%BD%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%9D%D0%9E%D0%A2%D0%90%D0%A0%D0%98%D0%9D%D0%90.docx.pdf'>Согласие на обработку персональных данных</a> <br />
                        <a target='_blank' className='aAssignmentCont' href='https://notarina.ru/website/images/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%D0%B1%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20cookie-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%20Notarina.pdf'>Соглашение об использовании cookie-файлов</a>

                    </label>
                    <br />
                    <button type="submit" className="buttonFS">Отправить</button>
                </form>
            </div>
        </div>
    )
}
