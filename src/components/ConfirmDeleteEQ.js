import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmDeleteEQ = ({ confirm, setConfirm, onEdit, setOnEdit, getEquips }) => {

    const handleClose = () => {
        setConfirm(false);
        setOnEdit(null);
    };

    const deleteEQ = async (e) => {
        await axios
            .delete("https://api-tecmed.vercel.app/" + onEdit.id)
            .then(({ data }) => {
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));

        setConfirm(false);
        getEquips();
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
                        Deletar Equipamento?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body><p>Deseja realmente deletar este Equipamento? Esta ação não poderá ser desfeita uma vez confirmada. </p></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} >
                        Fechar
                    </Button>
                    <Button variant="danger" onClick={() => deleteEQ(onEdit)} >
                        Deletar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ConfirmDeleteEQ;