import { React, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from "react-toastify";
import axios from "axios";
import Table from 'react-bootstrap/Table';


let dolarnew = '';
let dolarnew2 = '';
let dolarnew3 = '';
let dolarnew4 = '';
let dolarnew5 = '';
let dolarnew6 = '';
let dolarnew7 = '';
let dolarnew8 = '';

const ModalCopyOS = ({ copy, setCopy, onEdit, setOnEdit, getEOrdens }) => {

    const newdate = new Date(onEdit.data_abertura);
    let mes = (newdate.getMonth() + 1);
    let mes2 = '';
    if(mes < 10){ mes2 = '0' + mes }else{mes2 = mes};
    const dia = (newdate.getDate() + 1) < 10 ? `0${(newdate.getDate() + 1)}` : (newdate.getDate() + 1);
    const novaAbertura = newdate.getFullYear() + '-' + mes2 + '-' + dia;
    const newdate2 = new Date(onEdit.data_fechamento);
    mes = (newdate2.getMonth() + 1);
    if(mes < 9){ mes2 = '0' + mes }else{mes2 = mes};
    const dia2 = (newdate.getDate() + 1) < 10 ? `0${(newdate.getDate() + 1)}` : (newdate.getDate() + 1);
    const novoFechamento = newdate2.getFullYear() + '-' + mes2 + '-' + dia2;
    const [dataAbertura, setAbertura] = useState(novaAbertura);
    const [unidade, setUnidade] = useState(onEdit.unidade);
    const [equipamento, setEquipamento] = useState(onEdit.equipamento);
    const [marca, setMarca] = useState(onEdit.marca);
    const [setor, setSetor] = useState(onEdit.setor);
    const [modelo, setModelo] = useState(onEdit.modelo);
    const [numSerie, setSerie] = useState(onEdit.num_serie);
    const [patrimonio, setPatrimonio] = useState(onEdit.patrimonio);
    const [solicitante, setSolicitante] = useState(onEdit.solicitante);
    const [defectInform, setDefectInform] = useState(onEdit.defeito);
    const [acessorios, setAcessorios] = useState(onEdit.acessorios_enviados);
    const [tipoOS, setOS] = useState(onEdit.tipo_os);
    const [localServico, setLocal] = useState(onEdit.local_servico);
    const [localDefeito, setDefeito] = useState(onEdit.local_defeito);
    const [defectConst, setDefectConst] = useState(onEdit.defeito_constatado);
    const [servico, setServico] = useState(onEdit.servico_realizado);
    const [tipo1, setTipo1] = useState(onEdit.tipo);
    const [descricao1, setDescricao1] = useState(onEdit.descricao);
    const [quant1, setQuant1] = useState(onEdit.quantidade);
    const [unid1, setUnid1] = useState(onEdit.unidade_un);
    const [valorUnit1, setValorUnit1] = useState(onEdit.valor_unit);
    const [valorTotal1, setValorTotal1] = useState(onEdit.valor_total);
    const [tipo2, setTipo2] = useState(onEdit.tipo2);
    const [descricao2, setDescricao2] = useState(onEdit.descricao2);
    const [quant2, setQuant2] = useState(onEdit.quantidade2);
    const [unid2, setUnid2] = useState(onEdit.unidade_un2);
    const [valorUnit2, setValorUnit2] = useState(onEdit.valor_unit2);
    const [valorTotal2, setValorTotal2] = useState(onEdit.valor_total2);
    const [tipo3, setTipo3] = useState(onEdit.tipo3);
    const [descricao3, setDescricao3] = useState(onEdit.descricao3);
    const [quant3, setQuant3] = useState(onEdit.quantidade3);
    const [unid3, setUnid3] = useState(onEdit.unidade_un3);
    const [valorUnit3, setValorUnit3] = useState(onEdit.valor_unit3);
    const [valorTotal3, setValorTotal3] = useState(onEdit.valor_total3);
    const [tipo4, setTipo4] = useState(onEdit.tipo4);
    const [descricao4, setDescricao4] = useState(onEdit.descricao4);
    const [quant4, setQuant4] = useState(onEdit.quantidade4);
    const [unid4, setUnid4] = useState(onEdit.unidade_un4);
    const [valorUnit4, setValorUnit4] = useState(onEdit.valor_unit4);
    const [valorTotal4, setValorTotal4] = useState(onEdit.valor_total4);
    const [totalHoras, setTotalHoras] = useState(onEdit.total_horas);
    const [fechamento, setFechamento] = useState(novoFechamento);
    const [tecnico, setTecnico] = useState(onEdit.tecnico_resp);
    const [situacao, setSituacao] = useState(onEdit.situacao);
    const [recebido, setRecebido] = useState(onEdit.recebido_por);
    const [matricula, setMatricula] = useState(onEdit.matricula);

    const handleClose = () => {
        setCopy(false);
        setOnEdit(null);
    }

    const handleEdit = async (e) => {

        if (
            !dataAbertura
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if (dolarnew == '') {
            if (valorTotal1) {
                dolarnew = valorTotal1;
            }else{
                dolarnew = '0';
            }
        }
        if (dolarnew2 == '') {
            if (valorTotal2) {
                dolarnew2 = valorTotal2;
            }else{
                dolarnew2 = '0';
            }
        }
        if (dolarnew3 == '') {
            if (valorTotal3) {
                dolarnew3 = valorTotal3;
            }else{
                dolarnew3 = '0';
            }
        }
        if (dolarnew4 == '') {
            if (valorTotal4) {
                dolarnew4 = valorTotal4;
            }else{
                dolarnew4 = '0';
            }
        }
        if (dolarnew5 == '') {
            if (valorUnit1) {
                dolarnew5 = valorUnit1;
            }else{
                dolarnew5 = '0';
            }
        }
        if (dolarnew6 == '') {
            if (valorUnit2) {
                dolarnew6 = valorUnit2;
            }else{
                dolarnew6 = '0';
            }
        }
        if (dolarnew7 == '') {
            if (valorUnit3) {
                dolarnew7 = valorUnit3;
            }else{
                dolarnew7 = '0';
            }
        }
        if (dolarnew8 == '') {
            if (valorUnit4) {
                dolarnew8 = valorUnit4;
            }else{
                dolarnew8 = '0';
            }
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
                valorUnit1: dolarnew5,
                valorTotal1: dolarnew,
                tipo2: tipo1,
                descricao2: descricao2,
                quant2: quant2,
                unid2: unid2,
                valorUnit2: dolarnew6,
                valorTotal2: dolarnew2,
                tipo3: tipo3,
                descricao3: descricao3,
                quant3: quant3,
                unid3: unid3,
                valorUnit3: dolarnew7,
                valorTotal3: dolarnew3,
                tipo4: tipo4,
                descricao4: descricao4,
                quant4: quant4,
                unid4: unid4,
                valorUnit4: dolarnew8,
                valorTotal4: dolarnew4,
                totalHoras: totalHoras,
                fechamento: fechamento,
                tecnico: tecnico,
                situacao: situacao,
                recebido: recebido,
                matricula: matricula
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        
        dolarnew = '';
        dolarnew2 = '';
        dolarnew3 = '';
        dolarnew4 = '';
        dolarnew5 = '';
        dolarnew6 = '';
        dolarnew7 = '';
        dolarnew8 = '';
        setCopy(false);
        getEOrdens();
        setOnEdit(null);
    }

    let corretiva = '';
    let preventiva = '';
    let treinamento = '';
    if (tipoOS == 'Corretiva') { corretiva = 'True' };
    if (tipoOS == 'Preventiva') { preventiva = 'True' };
    if (tipoOS == 'Treinamento') { treinamento = 'True' };

    const setCheckboxOrdem = () => {
        const corretiva = document.getElementById("tpos1")
        const preventiva = document.getElementById("tpos2")
        const treinamento = document.getElementById("tpos3")

        corretiva.checked = 'True';
        preventiva.checked = '';
        treinamento.checked = '';
        setOS('Corretiva');
    };

    const setCheckboxOrdem2 = () => {
        const corretiva = document.getElementById("tpos1")
        const preventiva = document.getElementById("tpos2")
        const treinamento = document.getElementById("tpos3")

        corretiva.checked = '';
        preventiva.checked = 'True';
        treinamento.checked = '';
        setOS('Preventiva');
    };

    const setCheckboxOrdem3 = () => {
        const corretiva = document.getElementById("tpos1")
        const preventiva = document.getElementById("tpos2")
        const treinamento = document.getElementById("tpos3")

        corretiva.checked = '';
        preventiva.checked = '';
        treinamento.checked = 'True';
        setOS('Treinamento');
    };

    let btequipamento = '';
    let btacessorio = '';
    let btoperacao = '';
    if (localDefeito == 'Equipamento') { btequipamento = 'True' };
    if (localDefeito == 'Acessório') { btacessorio = 'True' };
    if (localDefeito == 'Operação') { btoperacao = 'True' };

    const setCheckboxServico = () => {
        const interno = document.getElementById("local1")
        const externo = document.getElementById("local2")

        interno.checked = 'True';
        externo.checked = '';
        setLocal("Interno");
    };

    const setCheckboxServico2 = () => {
        const interno = document.getElementById("local1")
        const externo = document.getElementById("local2")

        interno.checked = '';
        externo.checked = 'True';
        setLocal("Externo");
    };

    let interno = '';
    let externo = '';
    if (localServico == 'Interno') { interno = 'True' };
    if (localServico == 'Externo') { externo = 'True' };

    const setCheckboxDefeito = () => {
        const equipamento = document.getElementById("defeito1")
        const acessorio = document.getElementById("defeito2")
        const operacao = document.getElementById("defeito3")

        equipamento.checked = 'True';
        acessorio.checked = '';
        operacao.checked = '';
        setDefeito('Equipamento');
    };

    const setCheckboxDefeito2 = () => {
        const equipamento = document.getElementById("defeito1")
        const acessorio = document.getElementById("defeito2")
        const operacao = document.getElementById("defeito3")

        equipamento.checked = '';
        acessorio.checked = 'True';
        operacao.checked = '';
        setDefeito('Acessório');
    };

    const setCheckboxDefeito3 = () => {
        const equipamento = document.getElementById("defeito1")
        const acessorio = document.getElementById("defeito2")
        const operacao = document.getElementById("defeito3")

        equipamento.checked = '';
        acessorio.checked = '';
        operacao.checked = 'True';
        setDefeito('Operação');
    };

    const replaceValorTotal = (total) => {
        let valorFormatado = null;
        if (total) {
            valorFormatado = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        } else {
            valorFormatado = '';
        }
        return (
            valorFormatado
        )
    };

    const setValorTotal = (e) => {
        setValorTotal1(e);
        dolarnew = e.replaceAll(",", ".");
        dolarnew = dolarnew.replace('R$', '');
        if (dolarnew == '') {
            dolarnew = '0';
        } else {
            dolarnew = dolarnew.trim();
        }
    };

    const setValorTotal22 = (e) => {
        setValorTotal2(e);
        dolarnew2 = e.replaceAll(",", ".");
        dolarnew2 = dolarnew2.replace('R$', '');
        if (dolarnew2 == '') {
            dolarnew2 = '0';
        } else {
            dolarnew2 = dolarnew2.trim();
        }
    };

    const setValorTotal33 = (e) => {
        setValorTotal3(e);
        dolarnew3 = e.replaceAll(",", ".");
        dolarnew3 = dolarnew3.replace('R$', '');
        if (dolarnew3 == '') {
            dolarnew3 = '0';
        } else {
            dolarnew3 = dolarnew3.trim();
        }
    };

    const setValorTotal44 = (e) => {
        setValorTotal4(e);
        dolarnew4 = e.replaceAll(",", ".");
        dolarnew4 = dolarnew4.replace('R$', '');
        if (dolarnew4 == '') {
            dolarnew4 = '0';
        } else {
            dolarnew4 = dolarnew4.trim();
        }
    };

    const setValorUnit11 = (e) => {
        setValorUnit1(e);
        dolarnew5 = e.replaceAll(",", ".");
        dolarnew5 = dolarnew5.replace('R$', '');
        if (dolarnew5 == '') {
            dolarnew5 = '0';
        } else {
            dolarnew5 = dolarnew5.trim();
        }
    };

    const setValorUnit22 = (e) => {
        setValorUnit2(e);
        dolarnew6 = e.replaceAll(",", ".");
        dolarnew6 = dolarnew6.replace('R$', '');
        if (dolarnew6 == '') {
            dolarnew6 = '0';
        } else {
            dolarnew6 = dolarnew6.trim();
        }
    };

    const setValorUnit33 = (e) => {
        setValorUnit3(e);
        dolarnew7 = e.replaceAll(",", ".");
        dolarnew7 = dolarnew7.replace('R$', '');
        if (dolarnew7 == '') {
            dolarnew7 = '0';
        } else {
            dolarnew7 = dolarnew7.trim();
        }
    };
    const setValorUnit44 = (e) => {
        setValorUnit4(e);
        dolarnew8 = e.replaceAll(",", ".");
        dolarnew8 = dolarnew8.replace('R$', '');
        if (dolarnew8 == '') {
            dolarnew8 = '0';
        } else {
            dolarnew8 = dolarnew8.trim();
        }
    };

    return (
        <div>
            <Modal size="xl" show={copy} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Criar OS como copia</Modal.Title>
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
                                        <Form.Check inline label="Corretiva" name="group1" type="checkbox" id="tpos1" onChange={() => setCheckboxOrdem()} checked={corretiva} />
                                        <Form.Check inline label="Preventiva" name="group1" type="checkbox" id="tpos2" onChange={() => setCheckboxOrdem2()} checked={preventiva} />
                                        <Form.Check inline label="Treinamento" name="group1" type="checkbox" id="tpos3" onChange={() => setCheckboxOrdem3()} checked={treinamento} />
                                    </Form.Check>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridMarca">
                                    <Form.Label >Local do Serviço</Form.Label>
                                    <Form.Check type="checkbox">
                                        <Form.Check inline label="Interno" name="group1" type="checkbox" id="local1" onChange={() => setCheckboxServico()} checked={interno} />
                                        <Form.Check inline label="Externo" name="group1" type="checkbox" id="local2" onChange={() => setCheckboxServico2()} checked={externo} />
                                    </Form.Check>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridMarca">
                                    <Form.Label >Local do Defeito</Form.Label>
                                    <Form.Check type="checkbox">
                                        <Form.Check inline label="Equipamento" name="group1" type="checkbox" id="defeito1" onChange={() => setCheckboxDefeito()} checked={btequipamento} />
                                        <Form.Check inline label="Acessório" name="group1" type="checkbox" id="defeito2" onChange={() => setCheckboxDefeito2()} checked={btacessorio} />
                                        <Form.Check inline label="Operação" name="group1" type="checkbox" id="defeito3" onChange={() => setCheckboxDefeito3()} checked={btoperacao} />
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
                                            <th>Unidade</th>
                                            <th>Valor Unitário</th>
                                            <th>Valor Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Form.Control size="sm" value={tipo1} onChange={(e) => setTipo1(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={descricao1} onChange={(e) => setDescricao1(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={quant1} onChange={(e) => setQuant1(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={unid1} onChange={(e) => setUnid1(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={replaceValorTotal(valorUnit1)} onChange={(e) => setValorUnit11(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={replaceValorTotal(valorTotal1)} onChange={(e) => setValorTotal(e.target.value)} type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td><Form.Control size="sm" value={tipo2} onChange={(e) => setTipo2(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={descricao2} onChange={(e) => setDescricao2(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={quant2} onChange={(e) => setQuant2(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={unid2} onChange={(e) => setUnid2(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={replaceValorTotal(valorUnit2)} onChange={(e) => setValorUnit22(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={replaceValorTotal(valorTotal2)} onChange={(e) => setValorTotal22(e.target.value)} type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td><Form.Control size="sm" value={tipo3} onChange={(e) => setTipo3(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={descricao3} onChange={(e) => setDescricao3(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={quant3} onChange={(e) => setQuant3(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={unid3} onChange={(e) => setUnid3(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={replaceValorTotal(valorUnit3)} onChange={(e) => setValorUnit33(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={replaceValorTotal(valorTotal3)} onChange={(e) => setValorTotal33(e.target.value)} type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td><Form.Control size="sm" value={tipo4} onChange={(e) => setTipo4(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={descricao4} onChange={(e) => setDescricao4(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={quant4} onChange={(e) => setQuant4(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={unid4} onChange={(e) => setUnid4(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={replaceValorTotal(valorUnit4)} onChange={(e) => setValorUnit44(e.target.value)} type="text" /></td>
                                            <td><Form.Control size="sm" value={replaceValorTotal(valorTotal4)} onChange={(e) => setValorTotal44(e.target.value)} type="text" /></td>
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
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>
                        Criar OS como Copia
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalCopyOS;