import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmDeleteOS = ({ confirm, setConfirm, onEdit, setOnEdit, getEOrdens }) => {

    const handleClose = () => {
        setConfirm(false);
        setOnEdit(null);
    };

    const deleteOS = async (e) => {
        await axios
            .delete("http://localhost:8800/ordem/" + onEdit.id)
            .then(({ data }) => {
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));

        setConfirm(false);
        getEOrdens();
        setOnEdit(null);
    };

    return (
        <div>
            <Modal
                size="lg"
                show={confirm}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Deletar OS?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body><p>Deseja realmente deletar esta OS? Esta ação não poderá ser desfeita uma vez confirmada. </p></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} >
                        Fechar
                    </Button>
                    <Button variant="danger" onClick={() => deleteOS(onEdit)} >
                        Deletar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ConfirmDeleteOS;