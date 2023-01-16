import React, { useState } from "react";
import "../css/HeadFont.css";
import AppModalAndroidH from "./Modal/HeadModal/AppModalAndroidH";
import AppModalIosH from "./Modal/HeadModal/AppModalIosH";

function HeadFont() {
  const nottop = require('./img/nottop.png');
  const nott = require('./img/nott.gif');

  return (
    <div className="HeadFont">
      <div className="upperFont">
        <h1 className="topText">Мобильное приложение <br /> НОТАРИНА</h1>
        <h3 className="midText">Будьте там, где ваши клиенты</h3>
        <div className="butAppHeadDiv">
          <AppModalIosH />
          <AppModalAndroidH />
        </div>
        {/* <input
          type="button"
          id="But"
          className="ButScroll"
          value={"Перейти в приложение"}
        /> */}
      </div>
    </div>
  );
}
export default HeadFont;
