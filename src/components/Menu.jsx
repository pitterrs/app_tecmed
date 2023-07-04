import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import '../Styles/Menu.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png';

const NavMenu = () => {

    const { oktaAuth, authState } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);
    const history = useHistory();

    const handleLogin = async () => history.push('/login');

    const handleLogout = async () => oktaAuth.signOut();

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

    if (!authState) {
        // setUserInfo(null);
        return <div>Loading ...</div>;
    }

    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="http://localhost:3000/"><img src="logo2.png" style={{ width: '60px', }}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link className="links" to="/">Início</Link></Nav.Link>
                            {
                                userInfo && userInfo.name == 'Pitter Rezende da Silva' ? <Nav.Link><Link className="links" to="/Equipamentos">Equipamentos</Link></Nav.Link> : ''
                            }
                            <Nav.Link><Link className="links" to="/OrdemServices">Ordens de Serviço</Link></Nav.Link>
                            {
                                userInfo && userInfo.name == 'Pitter Rezende da Silva' ? <Nav.Link><Link className="links" to="/ControlAccess">Controle de Acesso</Link></Nav.Link> : ''
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="user-info">
                            {
                                userInfo ? 'Usuário: ' + userInfo.name + ' -' : ''
                            }
                        </Navbar.Text>
                        <Navbar.Text>
                            {
                                authState.isAuthenticated
                                    ? <Button className='bt-login' id="logout-button" type="button" onClick={handleLogout}>Sair</Button>
                                    : <Button className='bt-login' id="login-button" type="button" onClick={handleLogin}>Entrar</Button>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default NavMenu;