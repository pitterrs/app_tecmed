import React from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import { FaTrash, FaEdit, FaSearch, FaPlus } from "react-icons/fa";
import '../../Styles/Equipamentos.css'
import Paginations from "./fragments/Pagination";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from 'react-bootstrap/Button';
import EditModal from "../ModalEdit";
import ModalCreate from "../ModalCreate";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Filtros from "../FiltrosEquips";
import { useOktaAuth } from '@okta/okta-react';
import ConfirmDeleteEQ from "../ConfirmDeleteEQ";

const LIMIT = 15;

const Equipamentos = () => {

    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);
    const [confirm, setConfirm] = useState(false);
    const [equips, setEquips] = useState([]);
    const [equipsQuant, setEquipsQuant] = useState([]);
    const [busca, setBusca] = useState('');
    const [offset, setOffset] = useState(0)
    const [show, setShow] = useState(false);
    const [create, setCreate] = useState(false);
    const [onEdit, setOnEdit] = useState(null);
    const [onFilter, setOnFilter] = useState('null');

    const getEquips = async () => {
        if (onFilter != 'null') {
            try {
                const res = await axios.get(`http://15.228.57.78:443/equipamentos/${onFilter[0].nome}.${onFilter[0].setor}.${onFilter[0].marca}.${onFilter[0].modelo}.${onFilter[0].patrimonio}.${onFilter[0].serie}.9999.0`);
                setEquipsQuant(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
            } catch (error) {
                console.log(error);
            }

            try {
                const res = await axios.get(`http://15.228.57.78:443/equipamentos/${onFilter[0].nome}.${onFilter[0].setor}.${onFilter[0].marca}.${onFilter[0].modelo}.${onFilter[0].patrimonio}.${onFilter[0].serie}.${LIMIT}.${offset}`);
                setEquips(res.data);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const res = await axios.get(`http://15.228.57.78:443/equipamento`);
                setEquipsQuant(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
            } catch (error) {
                console.log(error);
            }

            try {
                const res = await axios.get(`http://15.228.57.78:443/${LIMIT}/${offset}`);
                setEquips(res.data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const lowerBusca = busca.toLowerCase();
    const equipamentoFiltrado = equips.length > 0 ? equips.filter((equip) =>
        equip.nome.toLowerCase().includes(lowerBusca) ||
        equip.setor.toLowerCase().includes(lowerBusca) ||
        equip.marca.toLowerCase().includes(lowerBusca) ||
        equip.modelo.toLowerCase().includes(lowerBusca) ||
        equip.serie.toLowerCase().includes(lowerBusca) ||
        equip.patrimonio.toLowerCase().includes(lowerBusca))
        : [] ;

    const handleEdit = (equip) => {
        setOnEdit(equip);
        setShow(true);
    };

    const handleCreate = () => {
        setCreate(true);
    };

    const handleDelete = (equip) => {
        setOnEdit(equip);
        setConfirm(true);
    };

    useEffect(() => {
        getEquips();
    }, [setEquips, offset, onFilter]);

    useEffect(() => {
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
    }, [authState, oktaAuth]); // Update if authState changes

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
                    <Button variant="secondary" onClick={() => handleCreate()}><FaPlus /> Novo Equipamento</Button>
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
                        <th>Nome</th>
                        <th>Setor</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Patrimônio</th>
                        <th>Nº Série</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        equipamentoFiltrado.map((equip, i) =>
                            <tr key={i}>
                                <td>{equip.nome}</td>
                                <td>{equip.setor}</td>
                                <td>{equip.marca}</td>
                                <td>{equip.modelo}</td>
                                <td>{equip.patrimonio}</td>
                                <td>{equip.serie}</td>
                                <td><FaEdit className="icones" onClick={() => handleEdit(equip)} /> <FaTrash className="icones" onClick={() => handleDelete(equip)} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            {equipsQuant.length && (
                <Paginations limit={LIMIT} total={equipsQuant.length} offset={offset} setOffset={setOffset} />
            )}
            {show && (
                <EditModal show={show} setShow={setShow} onEdit={onEdit} setOnEdit={setOnEdit} getEquips={getEquips} />
            )}
            {confirm && (
                <ConfirmDeleteEQ confirm={confirm} setConfirm={setConfirm} onEdit={onEdit} setOnEdit={setOnEdit} getEquips={getEquips} />
            )}
            {create && (
                <ModalCreate show={create} setCreate={setCreate} getEquips={getEquips} />
            )}
            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
        </Container>
    )
}

export default Equipamentos;