import React from "react";
import "./About.css";

function About() {
  const instr = require("./img/instr.png");
  const duns = require('./img/duns.png');
  return (
    <div className="about">
      <div className="AboutAbout">
        <h1 className="AboutH1">О компании «НОТАРИНА»</h1> <br />
        <p>
          Российский стартап, который запускает мобильный сервис в нотариальной
          индустрии
          <br />
          Был создан специально под разработку и внедрение мобильного приложения
          «НОТАРИУС» <br /> </p><br />
        <div>
          <a href="" className="DUNShref"><img className="duns" src={duns} alt='DUNS' /></a>
        </div>
        <a href="" className="DUNShref">
          Компания зарегистрирована в реестре DUNS</a>
      </div>

      <div className="InstructionAbout">
        <br /><h1>Инструкции по использованию</h1>
        <img src={instr} alt="Instruction" className="instrIMG" />
        <div className="ButGroupInstr">

          <a href="https://notarina.ru/website/images/INSTRUCTION%20FOR%20NOTARIES.pdf" target='_blank' className="instructionNotariusBtn" type="submit">
            Инструкции для нотариуса &nbsp;
          </a>
          <a target='_blank' href='https://notarina.ru/website/images/INSTRUCTION%20FOR%20CLIENTS.pdf' className='WorkspaceUserButAbout'>Инструкции для клиента &nbsp;&nbsp; </a>
        </div></div></div>
  );
}

export default About;
