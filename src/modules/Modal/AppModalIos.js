import React from "react";
import AppModalIosContent from "./AppModalIosContent";
import Modal from "./Modal";
import './AppModalIos.css';


const AppModalIos = () => {
  const [isModal, setModal] = React.useState(false);
  const SetValue = (values) => {
    alert(JSON.stringify(values, null, 2))
  };
  return (
    <>
      <button className="BtnOpenModalCAB" onClick={() => setModal(true)}>Скачать в AppStore</button>
      <Modal

        isVisible={isModal}
        title={<h4 className='h4titlemodal'>Скачать приложение IOS</h4>}
        content={<div><AppModalIosContent /><button className="BtnCloseModal" onClick={() => setModal(false)}>Закрыть</button></div>}
        onClose={() => setModal(false)}
        className="ModalAll"
      />
    </>
  );
};

export default AppModalIos;
