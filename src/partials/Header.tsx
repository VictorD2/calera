import React from 'react'
import { Link } from 'react-router-dom';


//Imagenes
import logo from '../img/logo.png';

//Iconos
import { GiHamburgerMenu } from 'react-icons/gi';
import StaticModal from '../components/StaticModal';

const Header = () => {

    const modalBody = () => {
        const suma = 8 + 8;
        return suma;
    }

    return (
        <nav className="header__area">
            <div className="logo">
                <Link to="/"><img className="img-fluid" src={logo} alt="Logo La Calera" /></Link>
            </div>
            <div className="d-flex justify-content-between align-items-center" style={{ width: "15rem" }}>
                <div className="comunicado">
                    <Link className="link" to='#'>Comunicado Oficial</Link>
                </div>
                <GiHamburgerMenu
                    className="fs-1"
                    style={{ color: "#363636", cursor: "pointer" }}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                />
                <StaticModal title="Menú" body={modalBody} />
            </div>
        </nav>
    )
}

export default Header
