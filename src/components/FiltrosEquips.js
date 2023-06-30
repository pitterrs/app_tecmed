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

    const [nome, setNome] = useState("");
    const [setor, setSetor] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [patrimonio, setPatrimonio] = useState("");
    const [serie, setSerie] = useState("");

    const handleFilter = () => {
        let FiltroNome = '';
        let FiltroSetor = '';
        let FiltroMarca = '';
        let FiltroModelo = '';
        let FiltroPatrimonio = '';
        let FiltroSerie = '';
        
        if (nome == ''){
            FiltroNome = 'vazio';
        } else {
            FiltroNome = nome
        }

        if (setor == ''){
            FiltroSetor = 'vazio';
        } else {
            FiltroSetor = setor
        }

        if (marca == ''){
            FiltroMarca = 'vazio';
        } else {
            FiltroMarca = marca
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

        if (serie == ''){
            FiltroSerie = 'vazio';
        } else {
            FiltroSerie = serie
        }

        const Filtro = [{
            nome: FiltroNome,
            setor: FiltroSetor,
            marca: FiltroMarca,
            modelo: FiltroModelo,
            patrimonio: FiltroPatrimonio,
            serie: FiltroSerie
        }];
        setOnFilter(Filtro);
    };

    const handleClear = () => {
        setOnFilter('null');
        setNome('');
        setSetor('');
        setMarca('');
        setModelo('');
        setPatrimonio('');
        setSerie('');
    };

    return (
        <div>
            <Accordion className="accordion-main">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><FaSearch />Buscar Equipamentos</Accordion.Header>
                    <Accordion.Body>
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
                                        <Form.Label>Nº Serie</Form.Label>
                                        <Form.Control value={serie} onChange={(e) => setSerie(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" onClick={handleFilter}>Buscar Equipamentos</Button> <Button variant="primary" onClick={handleClear}>Limpar Filtros</Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Filtros;