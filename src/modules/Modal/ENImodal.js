import React from "react";
import Modal from "./Modal";
import './ENImodal.css';
import AppModalAndroidContent from "./AppModalAndroidCont";
import ENImodalContent from "./ENImodalContent";


const ENImodal = () => {
    const [isModal, setModal] = React.useState(false);
    const SetValue = (values) => {
        alert(JSON.stringify(values, null, 2))
    };
    return (
        <>
            <button className="BtnOpenModalENI" onClick={() => setModal(true)}>Подробнее</button>
            <Modal

                isVisible={isModal}
                title={<h4 className="h4titlemodal">Подробнее</h4>}
                content={<div><ENImodalContent /><button className="BtnCloseModal" onClick={() => setModal(false)}>Закрыть</button></div>}
                onClose={() => setModal(false)}
                className="ModalAll"
            />
        </>
    );
};

export default ENImodal;