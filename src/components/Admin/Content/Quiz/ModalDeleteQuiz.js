import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteQuiz } from "../../../../services/apiService";
import { toast } from "react-toastify";

const ModalDeleteQuiz = (props) => {
  const { show, setShow, dataDelete } = props;

  const handleCloseQuiz = () => {
    setShow(false);
  };

  const handleSubmitDeleteQuiz = async () => {
    let data = await deleteQuiz(dataDelete.id);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleCloseQuiz();
      await props.fetchQuiz();
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleCloseQuiz} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete Quiz ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this item. id =
          <b>{dataDelete && dataDelete.id ? dataDelete.id : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseQuiz}>
            Cancle
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDeleteQuiz()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteQuiz;
