import React from "react";
import '../css/FollowService.css';

const FollowService = () => {


  return (
    <div className="FollowServiceAll">
      <div className="ContentFollowService">
        <h1 className="followH1"><br />ХОЧУ ОФОРМИТЬ ПОДПИСКУ:</h1>
        <p><strong>Гибкие планы: <br /><br /> Cрок действия подписки к приложению, <br /><br /> количество сотрудников, работающих через <br /> <br />приложение.</strong></p>
      </div>
      <div className="FollowServiceFormDiv">
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
          <label className="labelcheckboxFollow">
            <textarea name="message" className="inpurFollowServText" placeholder="Заинтересован в" required></textarea><br />
            <input type='checkbox' required /><i className='aAssignment'> Я соглашаюсь с правилами ООО Нотарина</i>  <br />
            <a target='_blank' className='aAssignment' href='https://notarina.ru/website/images/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5%20%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5_%D0%9D%D0%9E%D0%A2%D0%90%D0%A0%D0%98%D0%9D%D0%90.docx.pdf'>Пользовательское соглашение</a>  <br />
            <a target='_blank' className='aAssignment' href='https://notarina.ru/website/images/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%9D%D0%9E%D0%A2%D0%90%D0%A0%D0%98%D0%9D%D0%90.docx.pdf'>Политика обработки персональных данных</a><br />
            <a target='_blank' className='aAssignment' href='https://notarina.ru/website/images/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5%20%D0%BD%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%9D%D0%9E%D0%A2%D0%90%D0%A0%D0%98%D0%9D%D0%90.docx.pdf'>Согласие на обработку персональных данных</a> <br />
            <a target='_blank' className='aAssignment' href='https://notarina.ru/website/images/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%D0%B1%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20cookie-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%20Notarina.pdf'>Соглашение об использовании cookie-файлов</a>

          </label>
          <button type="submit" className="buttonFS">Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default FollowService;