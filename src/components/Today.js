import React, {useEffect, useState, useRef} from "react";
import {connect} from "react-redux";
import {setOneAnimalsAction, setPrescriptionsAction} from "../redux/actions";
import {getOneAnimal, getPrescriptions} from "../api/api";
import Modal from "../ui/modal/modal";
import Animal from "./Animal";

const Today = ({prescriptions, setPrescriptions, setOneAnimal, animal}) => {

  const token = localStorage.getItem("access");
  const [openModal, setOpenModal] = useState(false);
  const [idAnimal, setIdAnimal] = useState(null);
  const modalWrapper = useRef(null);
  const modalButtonClose = useRef(null);

  useEffect(() => {
    getPrescriptions(token).then(response => {
      setPrescriptions(response.data.results)
    })
      .catch(err => {
        console.log("Ой..")
      })
  }, [token, setPrescriptions]);

  useEffect(() => {
    if (idAnimal) {
      getOneAnimal(token,idAnimal)
        .then(response => {
          setOneAnimal(response.data)
        })
        .catch(err => {
          console.log("Ой..")
        })
    }
  }, [token, idAnimal, setOneAnimal])

  const hiddenModal = (event) => {
    if (event.target === modalWrapper.current || event.target === modalButtonClose.current) {
      setOpenModal(false);
      setOneAnimal(null);
    }
  }

  if (!prescriptions.length) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <Modal
        refCloseButton={modalButtonClose}
        refModal={modalWrapper}
        isOpen={openModal}
        object={animal}
        setIsOpen={hiddenModal}
      >
        <Animal animal={animal}/>
      </Modal>
        <h1 className={"mt-5"}>Сегодня</h1>
        <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Кличка</th>
          <th scope="col">Назначения врача</th>
        </tr>
        </thead>
        <tbody>
        {
          prescriptions.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td
                  onClick={() => {
                    setOpenModal(true);
                    setIdAnimal(item.animal.id)}}>
                  {item.animal.name}
                </td>
                <td>{item.my_type}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = state => ({
  prescriptions: state.today.prescriptions,
  animal: state.animal.animal,
})

const mapDispatchToProps = (dispatch) => {
  return {
    setPrescriptions: (data) => dispatch(setPrescriptionsAction(data)),
    setOneAnimal: (data) => dispatch(setOneAnimalsAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Today)
