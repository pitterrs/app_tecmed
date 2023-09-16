import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from "react-toastify";
import FormGroup from 'react-bootstrap/FormGroup'
import axios from "axios";

const ViewEquipamento = ({ show, setView, onEdit, setOnEdit }) => {

    const [nome, setNome] = useState(onEdit.nome || "");
    const [setor, setSetor] = useState(onEdit.setor || "");
    const [marca, setMarca] = useState(onEdit.marca || "");
    const [modelo, setModelo] = useState(onEdit.modelo || "");
    const [patrimonio, setPatrimonio] = useState(onEdit.patrimonio || "");
    const [serie, setSerie] = useState(onEdit.serie || "");
    const [observacoes, setObservacoes] = useState(onEdit.observacoes || "");

    const handleClose = () => {
        setView(false);
        setOnEdit(null);
    }

    return (
        <div>
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Alterando informações do Equipamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNome">
                                <Form.Label>Nome do Equipamento</Form.Label>
                                <Form.Control disabled value={nome} onChange={(e) => setNome(e.target.value)} type="text" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSetor">
                                <Form.Label>Setor do Equipamento</Form.Label>
                                <Form.Control disabled value={setor} onChange={(e) => setSetor(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridMarca">
                                <Form.Label>Marca do Equipamento</Form.Label>
                                <Form.Control disabled value={marca} onChange={(e) => setMarca(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={4}>
                                <Form.Group as={Col}>
                                    <Form.Label>Modelo do Equipamento</Form.Label>
                                    <Form.Control disabled value={modelo} onChange={(e) => setModelo(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col xs={4}>
                                <Form.Group as={Col}>
                                    <Form.Label>Patrimônio</Form.Label>
                                    <Form.Control disabled value={patrimonio} onChange={(e) => setPatrimonio(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col xs={4}>
                                <Form.Group as={Col}>
                                    <Form.Label>Nº Série</Form.Label>
                                    <Form.Control disabled value={serie} onChange={(e) => setSerie(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={5}>
                                <Form.Group as={Col}>
                                    <Form.Label>Observações:</Form.Label>
                                    <Form.Control disabled maxLength={255} as="textarea" value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ViewEquipamento;