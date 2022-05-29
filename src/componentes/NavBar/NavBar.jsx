import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget.jsx';
import imgLogo from '../../multimedia/logo2.png';
import {Link} from 'react-router-dom';
import useCartContext from "../store/cartContext/CartContext";

function NavBar(){
    
    const {contextFunction} =useCartContext();
    contextFunction();
    return(
    <>
        <nav>
            <div className="header">
                <ul className="nav menu">
                    <li className="categorias">Categorias
                        <ul className="desplegable">
                            <li><Link to="# " className="active" title="COMPONENTES DE PC">Componentes</Link>
                                <ul>
                                    <li><Link to="# " className="active">TODOS</Link></li>
                                    <li><Link to="category/discosSolidos">DISCOS SOLIDOS SD</Link></li>
                                    <li><Link to="category/memoriasRam">MEMORIA RAM</Link></li>
                                    <li><Link to="category/procesadores">MICROPROCESADORES</Link></li>
                                    <li><Link to="category/motherboards">MOTHERBOARDS</Link></li>
                                    <li><Link to="category/placasDeVideo">PLACAS DE VIDEO</Link></li>
                                    <li><Link to="category/gabinetes">GABINETES</Link></li>
                                    <li><Link to="category/fuentesDePoder">FUENTES DE PODER</Link></li>
                                    <li><Link to="category/refrigeracion">REFRIGERACION</Link></li>
                                    <li><Link to="category/placasDeRed">PLACAS DE RED</Link></li>
                                </ul>
                            </li>
                            <li title="Notebooks" className="active"><Link to="componentes/notebooks">Notebooks</Link></li>
                            <li title="Perifericos" className="active"> <Link to="componentes/perifericos">Perifericos</Link>
                                <ul>
                                    <li><Link to="category/todos">TODOS</Link></li>
                                    <li><Link to="category/teclados">TECLADOS</Link></li>
                                    <li><Link to="category/mousepads">MOUSEPADS</Link></li>
                                    <li><Link to="category/mouse">MOUSE</Link></li>
                                    <li><Link to="category/auriculares">AURICULARES</Link></li>
                                    <li><Link to="category/parlantes">PARLANTES</Link></li>
                                    <li><Link to="category/yoysticks">YOYSTICK Y VOLANTES</Link></li>
                                    <li><Link to="category/microfonos">MICROFONOS</Link></li>
                                </ul>
                            </li>
                            <li title="Monitores" className="active"><Link to="category/monitores">Monitores</Link></li>        
                            <li title="Proyectores" className="active"><Link to="category/proyectores">Proyectores y Pantallas</Link></li>               
                            <li title="AlMACENAMIENTO" className="active"><Link to="category/almacenamiento">Almacenamiento</Link>
                                <ul>
                                    <li><Link to="category/todos">TODOS</Link></li>
                                    <li><Link to="category/memoriaFlash">MEMORIA FLASH</Link></li>
                                    <li><Link to="category/pendrives">PENDRIVES</Link></li>
                                    <li><Link to="category/discosExternos">DISCOS EXTERNOS</Link></li>
                                </ul>
                            </li>
                            <li title="Impresoras" className="active"><Link to="category/impresionYScanners">Impresion y Scanners</Link></li>
                            <li title="CONECTIVIDAD Y REDES" className='active'><Link to="category/conectividad">Conectividad y redes</Link>
                            <ul>
                                <li><Link to="category/todos">TODOS</Link></li>
                                <li><Link to="category/accesPoint">ACCES POINT</Link></li>
                                <li><Link to="category/modemRouter">MODEM ROUTER</Link></li>
                                <li><Link to="category/router">ROUTER</Link></li>
                                <li><Link to="category/switchs">SWWITCHS</Link></li>
                            </ul>
                            </li>
                            <li title="TabletasDigitalizadoras" className="active"><Link to="category/tabletasDigitalizadoras">Tabletas digitalizadoras</Link></li>
                            <li title="Tablets" className="active"><Link to="category/tablets">Tablets</Link></li>
                            <li title="CELULARES Y TELEFONIA" className="active"><Link to="category/celulares">Celulares y telefonia</Link>
                                <ul>
                                    <li><Link to="category/todos">TODOS</Link></li>
                                    <li><Link to="category/celulares">CELULARES</Link></li>
                                    <li><Link to="category/modemRouter">MODEM ROUTER</Link></li>
                                    <li><Link to="category/telefonosFijos">TELEFONOS FIJOS</Link></li>
                                    <li><Link to="category/smartwatch">SMARTWATCH</Link></li>
                                </ul>
                            </li>
                            <li title="ACCESORIOS Y CABLES" className="active"><Link to="category/Accesorios">Accesorios</Link>
                                <ul>
                                    <li><Link to="category/todos">TODOS</Link></li>
                                    <li><Link to="category/cargadores">CARGADORES</Link></li>
                                    <li><Link to="category/cables">CABLES</Link></li>
                                </ul>
                            </li>
                            <li title="Soportes" className="active"><Link to="componentes/soportes">Soportes</Link></li>
                            <li title="ESTABILIZADORES, UPS Y ZAPATILLAS" className="active"><Link to="componentes/estabilizadores">Estabilizadores y UPs</Link>
                                <ul>
                                    <li><Link to="category/todos">TODOS</Link></li>
                                    <li><Link to="category/estabilizadores">ESTABILIZADORES</Link></li>
                                    <li><Link to="category/ups">UPS</Link></li>
                                    <li><Link to="category/zapatillas">ZAPATILLAS</Link></li>
                                </ul>
                            </li>
                            <br/>
                            <hr/>
                            <li title="Informacion" className="active"><Link to="informacion/">Informacion</Link>
                                <ul>
                                    <li><Link to="Informacion/seguiTuCompra" className="active">SEGUI TU COMPRA</Link></li>
                                    <li><Link to="Informacion/centroDeAyuda" className="active">CENTRO DE AYUDA</Link></li>
                                    <li><Link to="Informacion/metodosDeEnvio" className="active">METODOS DE RETIRO</Link></li>
                                </ul>
                            </li>
                            <li title="ofertas" className="active"><Link to="category/">Ofertas</Link>
                                <ul>
                                    <li><Link to="category/imperdibles" className='active'>!Imperdibles¡</Link></li>
                                    <li><Link to="category/notebooks">Notebooks</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="logo">
                    <div className="logo_img"><Link to="/"><img width="120" src={imgLogo} alt="logo tienda"/></Link></div>
                    <div className="carrito"><CartWidget/></div>
                </div>
            </div>
    </nav>
    </>
    )
}


export default NavBar