import React, {useEffect, useState, useRef} from "react";
import {connect} from "react-redux";
import {getAnimals, getNextAnimals, getOneAnimal} from "../api/api";
import {setAnimalsAction, setOneAnimalsAction} from "../redux/actions";
import Modal from "../ui/modal/modal";
import Animal from "./Animal";
import Pagination from "../ui/pagination/pagination";

const Animals = ({animals, animal, setAnimals, setOneAnimal, pageSize}) => {
  const token = localStorage.getItem("access");
  const [openModal, setOpenModal] = useState(false);
  const [idAnimal, setIdAnimal] = useState(null);
  const modalWrapper = useRef(null);
  const modalButtonClose = useRef(null);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    getAnimals(token, pageSize, )
      .then(response => {
        setAnimals(response.data)
      });
  }, [token, setAnimals, pageSize]);


  useEffect(() => {
    if (nextPage) {
      getNextAnimals(token, nextPage)
        .then(response => {
          setAnimals(response.data)
        })
    }
  }, [token, setAnimals, nextPage]);


  useEffect(() => {
    if (idAnimal) {
      getOneAnimal(token, idAnimal)
        .then(response => {
          setOneAnimal(response.data)
        })
    }
  }, [token, idAnimal, setOneAnimal]);


  const hiddenModal = (event) => {
    if (event.target === modalWrapper.current || event.target === modalButtonClose.current) {
      setOpenModal(false);
      setOneAnimal(null);
    }
  }

  if (!animals.length) {
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
      <div className="mt-5 mb-3 d-flex justify-content-between align-items-start">
        <h1>Животные</h1>
        <Pagination setNextPage={setNextPage} />
      </div>
      <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Кличка</th>
          <th scope="col">Тип животного</th>
          <th scope="col">Порода</th>
        </tr>
        </thead>
        <tbody>
        {
          animals.map((item, index) => {
            return (
              <tr
                key={index}
                onClick={() => {
                  setOpenModal(true);
                  setIdAnimal(item.id)
                }}
              >
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.spec_parent_name}</td>
                <td>{item.spec_name}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = state => ({
  animals: state.animal.animals,
  animal: state.animal.animal,
  pageSize: state.animal.pageSize
})

const mapDispatchToProps = dispatch => ({
  setAnimals: (data) => dispatch(setAnimalsAction(data)),
  setOneAnimal: (data) => dispatch(setOneAnimalsAction(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Animals)
