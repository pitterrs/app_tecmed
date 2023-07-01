import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from "react-toastify";
import axios from "axios";
import '../Styles/ModalOS.css';
import Table from 'react-bootstrap/Table';

const ModalCreateOS = ({ show, setCreate, getEOrdens }) => {

    const [dataAbertura, setAbertura] = useState("");
    const [unidade, setUnidade] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [marca, setMarca] = useState("");
    const [setor, setSetor] = useState("");
    const [modelo, setModelo] = useState("");
    const [numSerie, setSerie] = useState("");
    const [patrimonio, setPatrimonio] = useState("");
    const [solicitante, setSolicitante] = useState("");
    const [defectInform, setDefectInform] = useState("");
    const [acessorios, setAcessorios] = useState("");
    const [tipoOS, setOS] = useState("");
    const [localServico, setLocal] = useState("");
    const [localDefeito, setDefeito] = useState("");
    const [defectConst, setDefectConst] = useState("");
    const [servico, setServico] = useState("");
    const [tipo1, setTipo1] = useState("");
    const [descricao1, setDescricao1] = useState("");
    const [quant1, setQuant1] = useState("");
    const [unid1, setUnid1] = useState("");
    const [valorUnit1, setValorUnit1] = useState("");
    const [valorTotal1, setValorTotal1] = useState("");

    const [tipo2, setTipo2] = useState("");
    const [descricao2, setDescricao2] = useState("");
    const [quant2, setQuant2] = useState("");
    const [unid2, setUnid2] = useState("");
    const [valorUnit2, setValorUnit2] = useState("");
    const [valorTotal2, setValorTotal2] = useState("");

    const [tipo3, setTipo3] = useState("");
    const [descricao3, setDescricao3] = useState("");
    const [quant3, setQuant3] = useState("");
    const [unid3, setUnid3] = useState("");
    const [valorUnit3, setValorUnit3] = useState("");
    const [valorTotal3, setValorTotal3] = useState("");

    const [tipo4, setTipo4] = useState("");
    const [descricao4, setDescricao4] = useState("");
    const [quant4, setQuant4] = useState("");
    const [unid4, setUnid4] = useState("");
    const [valorUnit4, setValorUnit4] = useState("");
    const [valorTotal4, setValorTotal4] = useState("");

    const [totalHoras, setTotalHoras] = useState("");
    const [fechamento, setFechamento] = useState("");
    const [tecnico, setTecnico] = useState("");
    const [situacao, setSituacao] = useState("");
    const [recebido, setRecebido] = useState("");
    const [matricula, setMatricula] = useState("");

    const handleClose = () => {
        setCreate(false);
    }

    const handleEdit = async (e) => {

        if (
            !dataAbertura
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        await axios
            .post("https://api-tecmed.vercel.app/criarOrdem", {
                dataAbertura: dataAbertura,
                unidade: unidade,
                equipamento: equipamento,
                marca: marca,
                setor: setor,
                modelo: modelo,
                numSerie: numSerie,
                patrimonio: patrimonio,
                solicitante: solicitante,
                defectInform: defectInform,
                acessorios: acessorios,
                tipoOS: tipoOS,
                localServico: localServico,
                localDefeito: localDefeito,
                defectConst: defectConst,
                servico: servico,
                tipo1: tipo1,
                descricao1: descricao1,
                quant1: quant1,
                unid1: unid1,
                valorUnit1: valorUnit1,
                valorTotal1: valorTotal1,
                tipo2: tipo1,
                descricao2: descricao2,
                quant2: quant2,
                unid2: unid2,
                valorUnit2: valorUnit2,
                valorTotal2: valorTotal2,
                tipo3: tipo3,
                descricao3: descricao3,
                quant3: quant3,
                unid3: unid3,
                valorUnit3: valorUnit3,
                valorTotal3: valorTotal3,
                tipo4: tipo4,
                descricao4: descricao4,
                quant4: quant4,
                unid4: unid4,
                valorUnit4: valorUnit4,
                valorTotal4: valorTotal4,
                totalHoras: totalHoras,
                fechamento: fechamento,
                tecnico: tecnico,
                situacao : situacao,
                recebido: recebido,
                matricula: matricula
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));

        setCreate(false);
        getEOrdens();
    }

    const setCheckboxDefeito = () => {
        const equipamento = document.getElementById("defeito1")
        const acessorio = document.getElementById("defeito2")
        const operacao = document.getElementById("defeito3")
        if (equipamento.checked) {
            setDefeito("Equipamento");
            acessorio.disabled = 'true';
            operacao.disabled = 'true';
        }
        if (acessorio.checked) {
            setDefeito("Acessório");
            equipamento.disabled = 'true';
            operacao.disabled = 'true';
        }
        if (operacao.checked) {
            setDefeito("Operação");
            equipamento.disabled = 'true';
            acessorio.disabled = 'true';
        }
        if (!equipamento.checked && !acessorio.checked && !operacao.checked) {
            setDefeito("");
            equipamento.disabled = '';
            acessorio.disabled = '';
            operacao.disabled = '';
        }

    }

    const setCheckboxServico = () => {
        const interno = document.getElementById("local1")
        const externo = document.getElementById("local2")
        if (interno.checked) {
            setLocal("Interno");
            externo.disabled = 'true';
        }
        if (externo.checked) {
            setLocal("Externo");
            interno.disabled = 'true';
        }
        if (!interno.checked && !externo.checked) {
            setLocal("");
            interno.disabled = '';
            externo.disabled = '';
        }

    }

    const setCheckboxOrdem = () => {
        const corretiva = document.getElementById("tpos1")
        const preventiva = document.getElementById("tpos2")
        const treinamento = document.getElementById("tpos3")
        if (corretiva.checked) {
            setOS("Corretiva");
            preventiva.disabled = 'true';
            treinamento.disabled = 'true';
        }
        if (preventiva.checked) {
            setOS("Preventiva");
            corretiva.disabled = 'true';
            treinamento.disabled = 'true';
        }
        if (treinamento.checked) {
            setOS("Treinamento");
            corretiva.disabled = 'true';
            preventiva.disabled = 'true';
        }
        if (!corretiva.checked && !preventiva.checked && !treinamento.checked) {
            setOS("");
            corretiva.disabled = '';
            preventiva.disabled = '';
            treinamento.disabled = '';
        }

    }

    return (
        <div>
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Criando Nova Ordem de Serviço</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='grupo1'>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridNome">
                                    <Form.Label >Data de abertura</Form.Label>
                                    <Form.Control size="sm" value={dataAbertura} onChange={(e) => setAbertura(e.target.value)} type="date" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSetor">
                                    <Form.Label>Unidade</Form.Label>
                                    <Form.Control size="sm" value={unidade} onChange={(e) => setUnidade(e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridMarca">
                                    <Form.Label>Equipamento</Form.Label>
                                    <Form.Control size="sm" value={equipamento} onChange={(e) => setEquipamento(e.target.value)} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridNome">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Control size="sm" value={marca} onChange={(e) => setMarca(e.target.value)} type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSetor">
                                    <Form.Label>Setor</Form.Label>
                                    <Form.Control size="sm" value={setor} onChange={(e) => setSetor(e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridMarca">
                                    <Form.Label>Modelo</Form.Label>
                                    <Form.Control size="sm" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridNome">
                                    <Form.Label>Nº série</Form.Label>
                                    <Form.Control size="sm" value={numSerie} onChange={(e) => setSerie(e.target.value)} type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSetor">
                                    <Form.Label>Patrimônio</Form.Label>
                                    <Form.Control size="sm" value={patrimonio} onChange={(e) => setPatrimonio(e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridMarca">
                                    <Form.Label>Solicitante</Form.Label>
                                    <Form.Control size="sm" value={solicitante} onChange={(e) => setSolicitante(e.target.value)} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridNome">
                                    <Form.Label>Defeito Informado</Form.Label>
                                    <Form.Control size="sm" value={defectInform} onChange={(e) => setDefectInform(e.target.value)} as="textarea" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSetor">
                                    <Form.Label>Acessórios Enviados</Form.Label>
                                    <Form.Control size="sm" value={acessorios} onChange={(e) => setAcessorios(e.target.value)} as="textarea" />
                                </Form.Group>
                            </Row>
                        </div>
                        <div className='grupo1'>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridMarca">
                                    <Form.Label >Tipo de Ordem de Serviço</Form.Label>
                                    <Form.Check type="checkbox">
                                        <Form.Check inline label="Corretiva" name="group1" type="checkbox" id="tpos1" onChange={() => setCheckboxOrdem()} />
                                        <Form.Check inline label="Preventiva" name="group1" type="checkbox" id="tpos2" onChange={() => setCheckboxOrdem()} />
                                        <Form.Check inline label="Treinamento" name="group1" type="checkbox" id="tpos3" onChange={() => setCheckboxOrdem()} />
                                    </Form.Check>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridMarca">
                                    <Form.Label >Local do Serviço</Form.Label>
                                    <Form.Check type="checkbox">
                                        <Form.Check inline label="Interno" name="group1" type="checkbox" id="local1" onChange={() => setCheckboxServico()} />
                                        <Form.Check inline label="Externo" name="group1" type="checkbox" id="local2" onChange={() => setCheckboxServico()} />
                                    </Form.Check>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridMarca">
                                    <Form.Label >Local do Defeito</Form.Label>
                                    <Form.Check type="checkbox">
                                        <Form.Check inline label="Equipamento" name="group1" type="checkbox" id="defeito1" onChange={() => setCheckboxDefeito()} />
                                        <Form.Check inline label="Acessório" name="group1" type="checkbox" id="defeito2" onChange={() => setCheckboxDefeito()} />
                                        <Form.Check inline label="Operação" name="group1" type="checkbox" id="defeito3" onChange={() => setCheckboxDefeito()} />
                                    </Form.Check>
                                </Form.Group>
                            </Row>
                        </div>

                        <div className='grupo1'>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridMarca">
                                    <Form.Label>Defeito Constatado</Form.Label>
                                    <Form.Control size="sm" value={defectConst} onChange={(e) => setDefectConst(e.target.value)} as="textarea" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridNome">
                                    <Form.Label>Serviço Realizado</Form.Label>
                                    <Form.Control size="sm" value={servico} onChange={(e) => setServico(e.target.value)} as="textarea" />
                                </Form.Group>
                            </Row>
                        </div>

                        <div className='grupo1'>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridNome">
                                    <Form.Label>Peças e Serviços:</Form.Label>
                                </Form.Group>

                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Tipo</th>
                                            <th>Descrição</th>
                                            <th>Quantidade</th>
                                            <th>Unid.</th>
                                            <th>Valor Unit.</th>
                                            <th>Valor Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Form.Control size="sm" value={tipo1} onChange={(e) => setTipo1(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={descricao1} onChange={(e) => setDescricao1(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={quant1} onChange={(e) => setQuant1(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={unid1} onChange={(e) => setUnid1(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={valorUnit1} onChange={(e) => setValorUnit1(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={valorTotal1} onChange={(e) => setValorTotal1(e.target.value)} type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td><Form.Control size="sm" value={tipo2} onChange={(e) => setTipo2(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={descricao2} onChange={(e) => setDescricao2(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={quant2} onChange={(e) => setQuant2(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={unid2} onChange={(e) => setUnid2(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={valorUnit2} onChange={(e) => setValorUnit2(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={valorTotal2} onChange={(e) => setValorTotal2(e.target.value)} type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td><Form.Control size="sm" value={tipo3} onChange={(e) => setTipo3(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={descricao3} onChange={(e) => setDescricao3(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={quant3} onChange={(e) => setQuant3(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={unid3} onChange={(e) => setUnid3(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={valorUnit3} onChange={(e) => setValorUnit3(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={valorTotal3} onChange={(e) => setValorTotal3(e.target.value)} type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td><Form.Control size="sm" value={tipo4} onChange={(e) => setTipo4(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={descricao4} onChange={(e) => setDescricao4(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={quant4} onChange={(e) => setQuant4(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={unid4} onChange={(e) => setUnid4(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={valorUnit4} onChange={(e) => setValorUnit4(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={valorTotal4} onChange={(e) => setValorTotal4(e.target.value)} type="text" /></td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Row>
                        </div>

                        <div className='grupo1'>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridNome">
                                    <Form.Label>Total de horas</Form.Label>
                                    <Form.Control size="sm" value={totalHoras} onChange={(e) => setTotalHoras(e.target.value)} type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSetor">
                                    <Form.Label>Data do fechamento</Form.Label>
                                    <Form.Control size="sm" value={fechamento} onChange={(e) => setFechamento(e.target.value)} type="date" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridMarca">
                                    <Form.Label>Técnico responsável</Form.Label>
                                    <Form.Control size="sm" value={tecnico} onChange={(e) => setTecnico(e.target.value)} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Col xs={4}>
                                    <Form.Group as={Col}>
                                        <Form.Label>Situação da OS</Form.Label>
                                        <Form.Control size="sm" value={situacao} onChange={(e) => setSituacao(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group as={Col}>
                                        <Form.Label>Recebido por</Form.Label>
                                        <Form.Control size="sm" value={recebido} onChange={(e) => setRecebido(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col xs={2}>
                                    <Form.Group as={Col}>
                                        <Form.Label>Matricula</Form.Label>
                                        <Form.Control size="sm" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>
                        Criar Ordem de Serviço
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalCreateOS;