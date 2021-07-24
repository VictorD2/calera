import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Boton from '../components/Boton';
import Enlace from '../components/Enlace';
import app from '../config/firebase';
import swal from 'sweetalert';

const MiCuenta = () => {

    const history = useHistory();

    const [login, setLogin] = useState({
        correo: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

    const Login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await app.auth().signInWithEmailAndPassword(login.correo, login.password);
            history.push('/');
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password': swal("Oops!", "Contraseña incorrecta", "error");
                                            break;
                default: swal("Oops!", "Falló al iniciar sesión", "error");
                        break;
            }
        }
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <h3 className="fw-bold fs-2">Inciar Sesión</h3>
                <form className="mt-4" onSubmit={Login}>
                    <div className="mb-3">
                        <label
                            htmlFor="correo"
                            className="form-label fw-bold">
                            Correo electrónico
                        </label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="correo"
                            id="correo"
                            placeholder="Ejemplo: usuario@correo.com"
                            className="form-control" />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="form-label fw-bold">
                            Contraseña
                        </label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Ingrese su contraseña"
                            className="form-control" />
                    </div>
                    <div className="mb-4">
                        <Link to="/olvide-contrasena" className="link-normal fw-bold">¿Olvidaste contraseña?</Link>
                    </div>
                    <Boton
                        className="btn boton-primario fw-bold"
                        style={{ width: "13rem" }}
                        type="submit"
                        btnName="Iniciar sesión" />
                </form>
            </div>
            <div className="col-md-5 offset-lg-2 mt-5 mt-lg-0">
                <h3 className="fw-bold fs-2">¿Eres nuevo? Crea una cuenta</h3>
                <p>¿Aún no tienes una cuenta?</p>
                <Enlace
                    className="btn boton-primario fw-bold"
                    style={{ width: "13rem" }}
                    role="button"
                    url="/registrarme"
                    linkName="Crear una cuenta" />
            </div>
        </div>
    );
}

export default MiCuenta;