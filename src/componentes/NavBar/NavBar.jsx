import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget.jsx';
import imgLogo from '../../multimedia/logo2.png';
import portada from '../data/portada/portada';
import {Link} from 'react-router-dom';
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";

function NavBar(){
    return(
    <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Brand><Link to="/"><img width="120" src={imgLogo} alt="logo tienda"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
    >
        <NavDropdown title="CATEGORIAS" id="navbarScrollingDropdown">
            <NavDropdown title="COMPONENTES DE PC" id="navbarScrollingDropdown">
                <NavDropdown.Item>< Link to="# ">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="componentesPC/discosMecanicos">DISCOS DUROS MECANICOS></Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="componentesPC/discosSolidos">DISCOS SOLIDOS SD</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="componentesPC/fuentesDePoder">MEMORIA RAM</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="componentesPC/gabinetes">MICROPROCESADORES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="componentesPC/memoriasRam">MOTHERBOARDS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="componentesPC/motherBoard">PLACAS DE VIDEO</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="componentesPC/placasdeRed">GABINETES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="componentesPC/procesadores">FUENTES DE PODER</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="componentesPC/refrigeracion">REFRIGERACION</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="componentesPC/placasDeRed">PLACAS DE RED</Link></NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown.Item><Link to="#action4">NOTEBOOKs></Link></NavDropdown.Item>

            <NavDropdown title="PERIFERICOS" id="navbarScrollingDropdown">                
                <NavDropdown.Item><Link to="#action4">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">TECLADOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">MOUSEPADS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">MOUSE</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">AURICULARES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">PARLANTES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">YOYSTICK Y VOLANTES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">MICROFONOS</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown.Item><Link to="#action4">MONITORES</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="#action4">PROYECTORES Y PANTALLAS</Link></NavDropdown.Item>
            
            <NavDropdown title="AlMACENAMIENTO" id="navbarScrollingDropdown">
                <NavDropdown.Item><Link to="#action4">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">MEMORIA FLASH</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">PENDRIVES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">DISCOS EXTERNOS</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown.Item><Link to="#action4">IMPRESION Y SCANNERS</Link></NavDropdown.Item>

            <NavDropdown title="CONECTIVIDAD Y REDES" id="navbarScrollingDropdown">             
                <NavDropdown.Item><Link to="#action4">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">ACCES POINT</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">MODEM ROUTER</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">ROUTER</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">SWWITCHS</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown.Item><Link to="#action4">TABLETAS DIGITALIZADORAS</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="#action4">TABLETS</Link></NavDropdown.Item>

            <NavDropdown title="CELULARES Y TELEFONIA" id="navbarScrollingDropdown">                
                <NavDropdown.Item><Link to="#action4">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">CELULARES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">TELEFONOS FIJOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">SMARTWATCH</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">ACCESORIOS Y CABLES</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="ACCESORIOS Y CABLES" id="navbarScrollingDropdown">     
                <NavDropdown.Item><Link to="#action4">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">FUNDAS Y MOCHILAS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">BASES REFRIGERANTES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">CARGADORES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">CABLES</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown.Item><Link to="#action4">SOPORTES</Link></NavDropdown.Item>

            <NavDropdown title="ESTABILIZADORES, UPS Y ZAPATILLAS" id="navbarScrollingDropdown">    
                <NavDropdown.Item><Link to="#action4">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">ESTABILIZADORES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">UPS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="#action4">ZAPATILLAS</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
            SEGUI TU COMPRA
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">
            CENTRO DE AYUDA
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">
            METODOS DE RETIRO O ENVIO
            </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link to="#action1">!Imperdibles¡</Nav.Link>
        <Nav.Link href="#action2">Notebooks</Nav.Link>
        <Nav.Link href="#" disabled>
            Link
        </Nav.Link>
        </Nav>
        <Form className="d-flex">
        <FormControl
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
        <div><CartWidget/></div>
        </Form>
    </Navbar.Collapse>
    </Container>
</Navbar>
    )
}

export default NavBar;