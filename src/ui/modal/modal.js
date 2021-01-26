import React from "react";
import style from "./modal.module.css"

const Modal = ({isOpen, setIsOpen, children, object, refModal, refCloseButton}) => {


  return ( isOpen && object &&
      <div ref={refModal} onClick={setIsOpen} className={style.modal_wrapper}>
        <div className={style.modal_content}>
          <div className={"card-header p-2 d-flex justify-content-between"}>
            <h3>{object.name}</h3>
            <button ref={refCloseButton} onClick={setIsOpen} type="button" className="btn-close"></button>
          </div>
          <div className={"modal_body card-body"}>
            {object ? children : "Ой.."}
          </div>
        </div>
      </div>
  );
}

export default Modal
