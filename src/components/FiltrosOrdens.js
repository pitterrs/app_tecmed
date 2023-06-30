import { React, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import '../Styles/Filtros.css'
import { FaSearch } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import axios from "axios";

const Filtros = ({ setOnFilter }) => {

    const [dataAbertura, setAbertura] = useState("");
    const [unidade, setUnidade] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [marca, setMarca] = useState("");
    const [setor, setSetor] = useState("");
    const [modelo, setModelo] = useState("");
    const [patrimonio, setPatrimonio] = useState("");
    const [tecnico, setTecnico] = useState("");

    const handleFilter = () => {
        let FiltroAbertura = '';
        let FiltroUnidade = '';
        let FiltroEquipamento = '';
        let FiltroMarca = '';
        let FiltroSetor = '';
        let FiltroModelo = '';
        let FiltroPatrimonio = '';
        let FiltroTecnico = '';
        
        if (dataAbertura == ''){
            FiltroAbertura = 'vazio';
        } else {
            FiltroAbertura = dataAbertura
        }
        
        if (unidade == ''){
            FiltroUnidade = 'vazio';
        } else {
            FiltroUnidade = unidade
        }
        
        if (equipamento == ''){
            FiltroEquipamento = 'vazio';
        } else {
            FiltroEquipamento = equipamento
        }

        if (marca == ''){
            FiltroMarca = 'vazio';
        } else {
            FiltroMarca = marca
        }

        if (setor == ''){
            FiltroSetor = 'vazio';
        } else {
            FiltroSetor = setor
        }

        if (modelo == ''){
            FiltroModelo = 'vazio';
        } else {
            FiltroModelo = modelo
        }

        if (patrimonio == ''){
            FiltroPatrimonio = 'vazio';
        } else {
            FiltroPatrimonio = patrimonio
        }

        if (tecnico == ''){
            FiltroTecnico = 'vazio';
        } else {
            FiltroTecnico = tecnico
        }


        const Filtro = [{
            abertura: FiltroAbertura,
            unidade: FiltroUnidade,
            equipamento: FiltroEquipamento,
            marca: FiltroMarca,
            setor: FiltroSetor,
            modelo: FiltroModelo,
            patrimonio: FiltroPatrimonio,
            tecnico: FiltroTecnico,
        }];
        setOnFilter(Filtro);
    };

    const handleClear = () => {
        setOnFilter('null');
        setAbertura('');
        setUnidade('');
        setMarca('');
        setSetor('');
        setModelo('');
        setPatrimonio('');
        setTecnico('');
    };

    return (
        <div>
            <Accordion className="accordion-main">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><FaSearch />Buscar Ordem de Serviço</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridNome">
                                    <Form.Label>Data de Abertura</Form.Label>
                                    <Form.Control value={dataAbertura} onChange={(e) => setAbertura(e.target.value)} type="date" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSetor">
                                    <Form.Label>Unidade</Form.Label>
                                    <Form.Control value={unidade} onChange={(e) => setUnidade(e.target.value)} />
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
                                        <Form.Label>Setor</Form.Label>
                                        <Form.Control value={setor} onChange={(e) => setSetor(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group as={Col}>
                                        <Form.Label>Patrimônio</Form.Label>
                                        <Form.Control value={patrimonio} onChange={(e) => setPatrimonio(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xs={4}>
                                    <Form.Group as={Col}>
                                        <Form.Label>Técnico</Form.Label>
                                        <Form.Control value={tecnico} onChange={(e) => setTecnico(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group as={Col}>
                                        <Form.Label>Equipamento</Form.Label>
                                        <Form.Control value={equipamento} onChange={(e) => setEquipamento(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" onClick={handleFilter}>Buscar OS</Button> <Button variant="primary" onClick={handleClear}>Limpar Filtros</Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Filtros;