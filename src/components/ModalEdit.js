import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from "react-toastify";
import FormGroup from 'react-bootstrap/FormGroup'
import axios from "axios";

const EditModal = ({ show, setShow, onEdit, setOnEdit, getEquips }) => {

    const [nome, setNome] = useState(onEdit.nome || "");
    const [setor, setSetor] = useState(onEdit.setor || "");
    const [marca, setMarca] = useState(onEdit.marca || "");
    const [modelo, setModelo] = useState(onEdit.modelo || "");
    const [patrimonio, setPatrimonio] = useState(onEdit.patrimonio || "");
    const [serie, setSerie] = useState(onEdit.serie || "");

    const handleClose = () => {
        setShow(false);
        setOnEdit(null);
    }

    const handleEdit = async (e) => {

        if (
            !nome ||
            !setor ||
            !marca ||
            !modelo ||
            !patrimonio ||
            !serie
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        await axios
            .put("http://localhost:8800/" + onEdit.id, {
                nome: nome,
                setor: setor,
                marca: marca,
                modelo: modelo,
                patrimonio: patrimonio,
                serie: serie,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));

        setShow(false);
        getEquips();
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
                                <Form.Control value={nome} onChange={(e) => setNome(e.target.value)} type="text" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSetor">
                                <Form.Label>Setor do Equipamento</Form.Label>
                                <Form.Control value={setor} onChange={(e) => setSetor(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridMarca">
                                <Form.Label>Marca do Equipamento</Form.Label>
                                <Form.Control value={marca} onChange={(e) => setMarca(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={4}>
                                <Form.Group as={Col}>
                                    <Form.Label>Modelo do Equipamento</Form.Label>
                                    <Form.Control value={modelo} onChange={(e) => setModelo(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col xs={4}>
                                <Form.Group as={Col}>
                                    <Form.Label>Patrimônio</Form.Label>
                                    <Form.Control value={patrimonio} onChange={(e) => setPatrimonio(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col xs={4}>
                                <Form.Group as={Col}>
                                    <Form.Label>Nº Série</Form.Label>
                                    <Form.Control value={serie} onChange={(e) => setSerie(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>
                        Salvar alterações
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditModal;