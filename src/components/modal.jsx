import { Modal, ModalBody, ModalHeader } from "reactstrap";

const ModalCRUD = ({ title, isOpen, setOpen,id, children }) => {

  if(id === 0 && isOpen){
    alert("input terlebih dahulu pesanan!")
    isOpen = false
  }

  
  return (
    <>
      <Modal isOpen={isOpen} toggle={() => setOpen(!isOpen)}>
        <ModalHeader>{title} </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </>
  );
};

export default ModalCRUD;
