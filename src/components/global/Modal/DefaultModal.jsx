import { Modal } from "flowbite-react";
import React from "react";

const DefaultModal = ({ text, openModal, setOpenModal, error }) => {
  return (
    <Modal
      position={"top-center"}
      show={openModal}
      onClose={() => setOpenModal(false)}
    >
      {error?.length !== 0 && (
        <Modal.Header>
          <p className="text-red-500 dark:text-red-400">Ada kesalahan</p>
        </Modal.Header>
      )}
      <Modal.Body>
        <p
          className={`text-base text-center font-semibold leading-relaxed ${
            error?.length !== 0
              ? "text-red-500 dark:text-red-400"
              : "text-green-500 dark:text-green-400"
          }`}
        >
          {text}
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default DefaultModal;
