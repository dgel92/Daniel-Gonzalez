import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget.jsx';
import imgLogo from '../../multimedia/logo2.png';
import {Link} from 'react-router-dom';
import useCartContext from "../store/cartContext/CartContext";
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
    
    const {contextFunction} =useCartContext();
    contextFunction();
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
                <NavDropdown.Item><Link to="category/discosMecanicos">DISCOS DUROS MECANICOS></Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/discosSolidos">DISCOS SOLIDOS SD</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/memoriasRam">MEMORIA RAM</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/procesadores">MICROPROCESADORES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/motherboards">MOTHERBOARDS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/placasDeVideo">PLACAS DE VIDEO</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/gabinetes">GABINETES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/fuentesDePoder">FUENTES DE PODER</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/refrigeracion">REFRIGERACION</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/placasDeRed">PLACAS DE RED</Link></NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown.Item><Link to="componentes/notebooks">NOTEBOOKs></Link></NavDropdown.Item>

            <NavDropdown title="PERIFERICOS" id="navbarScrollingDropdown">                
                <NavDropdown.Item><Link to="category/todos">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/teclados">TECLADOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/mousepads">MOUSEPADS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/mouse">MOUSE</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/auriculares">AURICULARES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/parlantes">PARLANTES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/yoysticks">YOYSTICK Y VOLANTES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/microfonos">MICROFONOS</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown.Item><Link to="category/monitores">MONITORES</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="category/proyectores">PROYECTORES Y PANTALLAS</Link></NavDropdown.Item>
            
            <NavDropdown title="AlMACENAMIENTO" id="navbarScrollingDropdown">
                <NavDropdown.Item><Link to="category/todos">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/memoriaFlash">MEMORIA FLASH</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/pendrives">PENDRIVES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/discosExternos">DISCOS EXTERNOS</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown.Item><Link to="category/impresionYScanners">IMPRESION Y SCANNERS</Link></NavDropdown.Item>

            <NavDropdown title="CONECTIVIDAD Y REDES" id="navbarScrollingDropdown">             
                <NavDropdown.Item><Link to="category/todos">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/accesPoint">ACCES POINT</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/modemRouter">MODEM ROUTER</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/router">ROUTER</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/switchs">SWWITCHS</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown.Item><Link to="category/tabletasDigitalizadoras">TABLETAS DIGITALIZADORAS</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="category/tablets">TABLETS</Link></NavDropdown.Item>

            <NavDropdown title="CELULARES Y TELEFONIA" id="navbarScrollingDropdown">                
                <NavDropdown.Item><Link to="category/todos">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/celulares">CELULARES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/telefonosFijos">TELEFONOS FIJOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/smartwatch">SMARTWATCH</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="ACCESORIOS Y CABLES" id="navbarScrollingDropdown">     
                <NavDropdown.Item><Link to="category/todos">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/cargadores">CARGADORES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/cables">CABLES</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown.Item><Link to="componentes/soportes">SOPORTES</Link></NavDropdown.Item>

            <NavDropdown title="ESTABILIZADORES, UPS Y ZAPATILLAS" id="navbarScrollingDropdown">    
                <NavDropdown.Item><Link to="category/todos">TODOS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/estabilizadores">ESTABILIZADORES</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/ups">UPS</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="category/zapatillas">ZAPATILLAS</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown.Divider />
            <NavDropdown.Item href="Informacion/seguiTuCompra">
            SEGUI TU COMPRA
            </NavDropdown.Item>
            <NavDropdown.Item href="Informacion/centroDeAyuda">
            CENTRO DE AYUDA
            </NavDropdown.Item>
            <NavDropdown.Item href="Informacion/metodosDeEnvio">
            METODOS DE RETIRO O ENVIO
            </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link to="category/imperdibles">!Imperdibles¡</Nav.Link>
        <Nav.Link href="category/notebooks">Notebooks</Nav.Link>
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