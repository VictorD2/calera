import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import app from '../config/firebase';
import Logo from '../img/logo.png';

const Navbar = () => {

    const user = useContext(AuthContext);

    const logout = async () => {
        await app.auth().signOut();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-lg-5 py-3">
                <Link to="/" style={{ width: "10.5rem" }}><img className="img-fluid" src={Logo} alt="La Calera" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-auto text-center">
                        {
                            !user &&
                            <li className="nav-item">
                                <Link to="/iniciar-sesion" className="nav-link">
                                    <FaUser />
                                    <p className="mb-0">Mi cuenta</p>
                                </Link>
                            </li>
                        }
                        {
                            user &&
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaUser />
                                    <br />
                                    Usuario
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/profile">Mi perfil</Link></li>
                                    <li><span className="dropdown-item" role="button" onClick={logout}>Cerrar sesión</span></li>
                                </ul>
                            </li>
                        }
                        <li className="nav-item">
                            <Link to="/mi-carrito" className="nav-link">
                                <FaShoppingCart />
                                <p className="mb-0">Mi carrito</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;