import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../Styles/Home.css';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Link} from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {

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
            <Container className="home-padding">
                <Row>
                    { userInfo && userInfo.name == 'Pitter Rezende da Silva' ?
                    <Col className="col-xxl-3 col-sm-6 margem-baixo">
                        <Card style={{ width: '18rem' }} className="zoom">
                            <Card.Body>
                                <Card.Title className="nome-card">Equipamentos</Card.Title>
                                <Card.Text>
                                    Visualize a lista de equipamentos e administre suas informações.
                                </Card.Text>
                                <Button variant="primary"><Link className="links-home" to="/Equipamentos">Admin. Equipamentos</Link></Button>
                            </Card.Body>
                            <Card.Img variant="bottom" src="https://rentsy.com.br/wp-content/uploads/2020/11/manutencao-de-equipamentos-hospitalares.jpg" />
                        </Card>
                    </Col>
                    : '' }
                    <Col className="col-xxl-3 col-sm-6">
                        <Card style={{ width: '18rem' }} className="zoom">
                            <Card.Body>
                                <Card.Title className="nome-card">Ordens de Serviço</Card.Title>
                                <Card.Text>
                                    Gere e imprima suas orderns de serviço aqui.
                                </Card.Text>
                                <Button variant="primary"><Link className="links-home" to="/OrdemServices">Acessar OS's</Link></Button>
                            </Card.Body>
                            <Card.Img variant="bottom" src="https://www.produttivo.com.br/blog/wp-content/uploads/2022/07/ordem-de-servico-1-1.jpg" />
                        </Card>
                    </Col>
                    <Col className="col-xxl-3 col-sm-6">
                        <Card style={{ width: '18rem' }} className="zoom">
                            <Card.Body>
                                <Card.Title className="nome-card">Controle de Acessos</Card.Title>
                                <Card.Text>
                                    Crie, altere ou remova usuários e administre seus acessos aqui.
                                </Card.Text>
                                <Button variant="primary"><Link className="links-home" to="/ControlAccess">Controlar Acessos</Link></Button>
                            </Card.Body>
                            <Card.Img variant="bottom" src="https://www.dimep.com.br/wp-content/uploads/2019/05/1473771604.492882.jpe" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Home;