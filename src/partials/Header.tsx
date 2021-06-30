import React from 'react'
import { Link } from 'react-router-dom';


//Imagenes
import logo from '../img/logo.png';

//Iconos
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header__area">
            <nav className="d-flex justify-content-around">
                <div className="logo">
                    <Link to="/"><img className="img-fluid" src={logo} alt="Logo La Calera" /></Link>
                </div>
                <div className="opciones">
                    <ul className="lista__links">
                        <li className="link__item">
                            <Link className="link" to='#'>Nosotros</Link>
                        </li>
                        <li className="link__item">
                            <Link className="link" to='#'>Productos</Link>
                        </li>
                        <li className="link__item">
                            <Link className="link" to='/Tienda'>Tienda</Link>
                        </li>
                        <li className="link__item">
                            <Link className="link" to='#'>Mitos del huevo</Link>
                        </li>
                        <li className="link__item">
                            <Link className="link" to='#'>Recetas</Link>
                        </li>
                        <li className="link__item">
                            <Link className="link" to='#'>Responsabilidad Social</Link>
                        </li>
                        <li className="link__item">
                            <Link className="link" to='#'>Certificaciones</Link>
                        </li>
                        <li className="link__item">
                            <Link className="link" to='#'>Encuéntranos</Link>
                        </li>
                    </ul>
                </div>
                <div className="comunicado">
                    <Link className="link" to='#'>Comunicado Oficial</Link>
                </div>
                <div className="buscar">
                    <FaSearch className="mt-2 fs-6" style={{ color: "#808080" }} />
                </div>
            </nav>
        </header>
    )
}

export default Header
