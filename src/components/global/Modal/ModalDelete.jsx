import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import React from "react";

const ModalDelete = ({ modalDelete, modalDeleteSet, handleDelete }) => {
  return (
    <Modal
      show={modalDelete}
      size="md"
      popup
      onClose={() => modalDeleteSet(false)}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Kamu yakin ingin menghapus pertanyaan ini?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="gray" onClick={() => modalDeleteSet(false)}>
              Batal
            </Button>
            <Button
              color="failure"
              onClick={handleDelete}
            >
              Iya, saya yakin
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDelete;
