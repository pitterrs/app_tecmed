import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from "react-toastify";
import axios from "axios";

const ModalCreate = ({ show, setCreate, getEquips }) => {

    const [nome, setNome] = useState("");
    const [setor, setSetor] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [patrimonio, setPatrimonio] = useState("");
    const [serie, setSerie] = useState("");

    const handleClose = () => {
        setCreate(false);
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
            .post("https://api-tecmed.vercel.app/", {
                nome: nome,
                setor: setor,
                marca: marca,
                modelo: modelo,
                patrimonio: patrimonio,
                serie: serie
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));

        setCreate(false);
        getEquips();
    }

    return (
        <div>
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Criando novo Equipamento</Modal.Title>
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
                        Criar Equipamento
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalCreate;