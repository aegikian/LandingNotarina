import React from "react";
import AppModalIosContent from "./AppModalIosContentH";
import Modal from "./Modal";
import './AppModalIosH.css';


const AppModalIosH = () => {
  const [isModal, setModal] = React.useState(false);
  const SetValue = (values) => {
    alert(JSON.stringify(values, null, 2))
  };
  return (
    <>
      <button className="BtnOpenModalCAB2" onClick={() => setModal(true)}>AppStore</button>
      <Modal

        isVisible={isModal}
        title={<h4 className='h4titlemodal'>AppStore</h4>}
        content={<div><AppModalIosContent /><button className="BtnCloseModal" onClick={() => setModal(false)}>Закрыть</button></div>}
        onClose={() => setModal(false)}
        className="ModalAll"
      />
    </>
  );
};

export default AppModalIosH;
