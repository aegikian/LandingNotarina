import React from "react";
import Modal from "./Modal";
import './AppModalIos.css';
import AppModalAndroidContent from "./AppModalAndroidCont";


const AppModalAndroid = () => {
  const [isModal, setModal] = React.useState(false);
  const SetValue = (values) => {
    alert(JSON.stringify(values, null, 2))
  };
  return (
    <>
      <button className="BtnOpenModalCAB" onClick={() => setModal(true)}>Скачать в Play Market</button>
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

export default AppModalAndroid;