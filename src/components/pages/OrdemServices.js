import React from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import { FaTrash, FaEdit, FaSearch, FaPlus, FaFilePdf } from "react-icons/fa";
import '../../Styles/Equipamentos.css'
import Paginations from "./fragments/Pagination";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from 'react-bootstrap/Button';
import EditModal from "../ModalEditOS";
import ConfirmDeleteOS from "../ConfirmDeleteOS";
import ModalCreateOS from "../ModalCreateOS";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Filtros from "../FiltrosOrdens";
import criarPDF from "./fragments/CriarPDF";
import { useOktaAuth } from '@okta/okta-react';

const LIMIT = 15;

function OrdemServices() {

    const [ordens, setOrdens] = useState([]);
    const [ordensQuant, setOrdensQuant] = useState([]);
    const [busca, setBusca] = useState('');
    const [offset, setOffset] = useState(0)
    const [show, setShow] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [create, setCreate] = useState(false);
    const [onEdit, setOnEdit] = useState(null);
    const [onFilter, setOnFilter] = useState('null');
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);

    const getEOrdens = async () => {
        if (onFilter != 'null') {
            try {
                const res = await axios.get(`https://api-tecmed.vercel.app/ordens/get/${onFilter[0].abertura}.${onFilter[0].unidade}.${onFilter[0].equipamento}.${onFilter[0].marca}.${onFilter[0].modelo}.${onFilter[0].setor}.${onFilter[0].patrimonio}.${onFilter[0].tecnico}.9999.0`);
                setOrdensQuant(res.data);
            } catch (error) {
                console.log(error);
            }

            try {
                const res = await axios.get(`https://api-tecmed.vercel.app/ordens/get/${onFilter[0].abertura}.${onFilter[0].unidade}.${onFilter[0].equipamento}.${onFilter[0].marca}.${onFilter[0].modelo}.${onFilter[0].setor}.${onFilter[0].patrimonio}.${onFilter[0].tecnico}.${LIMIT}.${offset}`);
                setOrdens(res.data);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const res = await axios.get(`https://api-tecmed.vercel.app/ordens`);
                setOrdensQuant(res.data);
            } catch (error) {
                console.log(error);
            }

            try {
                const res = await axios.get(`https://api-tecmed.vercel.app/ordens/${LIMIT}/${offset}`);
                setOrdens(res.data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const lowerBusca = busca.toLowerCase();
    const equipamentoFiltrado = ordens.length > 0 ? ordens.filter((ordem) =>
        ordem.equipamento.toLowerCase().includes(lowerBusca) ||
        ordem.unidade.toLowerCase().includes(lowerBusca) ||
        ordem.marca.toLowerCase().includes(lowerBusca) ||
        ordem.setor.toLowerCase().includes(lowerBusca) ||
        ordem.data_abertura.toLowerCase().includes(lowerBusca) ||
        ordem.modelo.toLowerCase().includes(lowerBusca) ||
        ordem.num_serie.toLowerCase().includes(lowerBusca) ||
        ordem.patrimonio.toLowerCase().includes(lowerBusca) ||
        ordem.solicitante.toLowerCase().includes(lowerBusca) ||
        ordem.tecnico_resp.toLowerCase().includes(lowerBusca) ||
        // ordem.defeito.toLowerCase().includes(lowerBusca) ||
        // ordem.acessorios_enviados.toLowerCase().includes(lowerBusca) ||
        ordem.tipo_os.toLowerCase().includes(lowerBusca) ||
        ordem.local_servico.toLowerCase().includes(lowerBusca) ||
        ordem.local_defeito.toLowerCase().includes(lowerBusca) ||
        // ordem.defeito_constatado.toLowerCase().includes(lowerBusca) ||
        // ordem.servico_realizado.toLowerCase().includes(lowerBusca) ||
        // ordem.tipo.toLowerCase().includes(lowerBusca) ||
        // ordem.descricao.toLowerCase().includes(lowerBusca) ||
        // ordem.quantidade.toLowerCase().includes(lowerBusca) ||
        // ordem.unidade_un.toLowerCase().includes(lowerBusca) ||
        // ordem.valor_unit.toLowerCase().includes(lowerBusca) ||
        // ordem.valor_total.toLowerCase().includes(lowerBusca)  ||
        // ordem.total_horas.toLowerCase().includes(lowerBusca) ||
        ordem.data_fechamento.toLowerCase().includes(lowerBusca))
        // ordem.recebido_por.toLowerCase().includes(lowerBusca) ||
        // ordem.matricula.toLowerCase().includes(lowerBusca))
        : [] ;

    const handleEdit = (ordem) => {
        setOnEdit(ordem);
        setShow(true);
    };

    const handleCreate = () => {
        setCreate(true);
    };

    const handleDelete = (ordem) => {
        setOnEdit(ordem);
        setConfirm(true);
        // await axios
        //     .delete("http://localhost:8800/ordem/" + id)
        //     .then(({ data }) => {
        //         const newArray = ordens.filter((ordem) => ordem.id !== id);

        //         setOrdens(newArray);
        //         toast.success(data);
        //     })
        //     .catch(({ data }) => toast.error(data));
    };

    const replaceDate = (date) => {
        const newdate = new Date(date);
        const dia = newdate.getDate() < 10 ? `0${newdate.getDate()}` : newdate.getDate();
        const mes = (newdate.getMonth() + 1) < 10 ? `0${(newdate.getMonth() + 1)}` : (newdate.getMonth() + 1);
        const ano = newdate.getFullYear();
        const formatDate = dia + '/' + mes + '/' + ano;
        return (
            formatDate
        )
    };

    const replaceValorTotal = (total) => {
        let valorFormatado = null;
        if (total) {
            valorFormatado = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        } else {
            valorFormatado = 0;
        }
        return (
            valorFormatado
        )
    };

    useEffect(() => {
        getEOrdens();
        if (!authState || !authState.isAuthenticated) {
            // When user isn't authenticated, forget any user info
            setUserInfo(null);
        } else {
            oktaAuth.getUser().then((info) => {
                setUserInfo(info);
            }).catch((err) => {
                console.error(err);
            });
        }
    }, [setOrdens, offset, onFilter, authState, oktaAuth]);

    if (!userInfo) {
        return (
            <div>
                <p>Buscando informações do usuário...</p>
            </div>
        );
    }

    return (
        <Container className="home-padding">
            <Filtros setOnFilter={setOnFilter} />
            <ButtonToolbar
                className="justify-content-between form-margin"
                aria-label="Toolbar with Button groups"
            >
                <ButtonGroup aria-label="First group">
                    <Button variant="primary" onClick={() => handleCreate()}><FaPlus /> Gerar Nova OS</Button>
                </ButtonGroup>
                <InputGroup>
                    <InputGroup.Text id="btnGroupAddon2"><FaSearch /></InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Filtrar"
                        aria-label="Input group example"
                        aria-describedby="btnGroupAddon2"
                        value={busca} onChange={(ev) => setBusca(ev.target.value)}
                    />
                </InputGroup>
            </ButtonToolbar>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Opções de Ação</th>
                        <th>ID da OS</th>
                        <th>Equipamento</th>
                        <th>Unidade</th>
                        <th>Marca</th>
                        <th>Setor</th>
                        <th>Data de Abertura</th>
                        <th>Modelo</th>
                        <th>Nº série</th>
                        <th>Patrimônio</th>
                        <th>Solicitante</th>
                        <th>Técnico responsável</th>
                        <th>Tipo de OS</th>
                        <th>Local do Serviço</th>
                        <th>Local do Defeito</th>
                        <th>Valor total</th>
                        <th>Situação da OS</th>
                        <th>Data do fechamento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        equipamentoFiltrado.map((ordem, i) =>
                            <tr key={i}>
                                <td><FaEdit className="icones" onClick={() => handleEdit(ordem)} /> <FaTrash className="icones" onClick={() => handleDelete(ordem)} /> <FaFilePdf className="icones" onClick={(e) => criarPDF(ordem)} /></td>
                                <td>{ordem.id}</td>
                                <td>{ordem.equipamento}</td>
                                <td>{ordem.unidade}</td>
                                <td>{ordem.marca}</td>
                                <td>{ordem.setor}</td>
                                <td>{replaceDate(ordem.data_abertura)}</td>
                                <td>{ordem.modelo}</td>
                                <td>{ordem.num_serie}</td>
                                <td>{ordem.patrimonio}</td>
                                <td>{ordem.solicitante}</td>
                                <td>{ordem.tecnico_resp}</td>
                                <td>{ordem.tipo_os}</td>
                                <td>{ordem.local_servico}</td>
                                <td>{ordem.local_defeito}</td>
                                <td>{replaceValorTotal(ordem.valor_total)}</td>
                                <td>{ordem.situacao}</td>
                                <td>{replaceDate(ordem.data_fechamento)}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            {ordensQuant.length && (
                <Paginations limit={LIMIT} total={ordensQuant.length} offset={offset} setOffset={setOffset} />
            )}
            {show && (
                <EditModal show={show} setShow={setShow} onEdit={onEdit} setOnEdit={setOnEdit} getEOrdens={getEOrdens} />
            )}
            {create && (
                <ModalCreateOS show={create} setCreate={setCreate} getEOrdens={getEOrdens} />
            )}
            {confirm && (
                <ConfirmDeleteOS confirm={confirm} setConfirm={setConfirm} onEdit={onEdit} setOnEdit={setOnEdit} getEOrdens={getEOrdens} />
            )}
            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
        </Container>
    )
}

export default OrdemServices;