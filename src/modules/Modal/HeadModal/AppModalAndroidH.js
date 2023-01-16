import React from "react";
import Modal from "./Modal";
import './AppModalIosH.css';
import AppModalAndroidContent from "./AppModalAndroidContH";


const AppModalAndroidH = () => {
  const [isModal, setModal] = React.useState(false);
  const SetValue = (values) => {
    alert(JSON.stringify(values, null, 2))
  };
  return (
    <>
      <button className="BtnOpenModalCAB2" onClick={() => setModal(true)}>Google Play</button>
      <Modal

        isVisible={isModal}
        title={<h4 className="h4titlemodal">Скачать приложение Android</h4>}
        content={<div><AppModalAndroidContent /><button className="BtnCloseModal" onClick={() => setModal(false)}>Закрыть</button></div>}
        onClose={() => setModal(false)}
        className="ModalAll"
      />
    </>
  );
};

export default AppModalAndroidH;