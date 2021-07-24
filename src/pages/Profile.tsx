import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Boton from '../components/Boton';
import app from '../config/firebase';
import { AuthContext } from './../context/AuthContext';

const Profile = () => {

    // State
    const [userData, setUserData] = useState<any>({
        birthday: '',
        documentNumber: '',
        documentType: '',
        email: '',
        gender: '',
        name: '',
        phone: '',
        surname: ''
    });

    // Usuario
    const user = useContext(AuthContext);

    // History
    const history = useHistory();

    // Destructuring User Profile Data
    const { birthday, documentNumber, documentType, email, gender, name, phone, surname } = userData;

    // Initial FireStore
    const db = app.firestore();

    const getProfile = async (id: any) => {
        const doc = await db.collection('user').doc(id).get();
        setUserData({ ...doc.data() });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const logout = async () => {
        await app.auth().signOut();
        history.push('/');
    }

    useEffect(() => {
        getProfile(user?.uid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.uid]);

    return (
        <>
            <h3 className="fw-bold fs-2">Mis datos</h3>
            <form className="mt-4">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                            <label
                                htmlFor="registrar-nombre"
                                className="form-label">
                                *Nombre
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="name"
                                value={name}
                                id="registrar-nombre"
                                className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                            <label
                                htmlFor="apellido"
                                className="form-label">
                                *Apellido
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                value={surname}
                                name="surname"
                                id="apellido"
                                className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                            <label
                                htmlFor="tipo-documento"
                                className="form-label">
                                *Tipo de documento
                            </label>
                            <select
                                onChange={handleChange}
                                value={documentType}
                                className="form-select"
                                name="documentType"
                                id="tipo-documento">
                                <option value="1" selected>DNI</option>
                                <option value="2">RUC</option>
                                <option value="3">CE</option>
                                <option value="4">PASS</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                            <label
                                htmlFor="numero-documento"
                                className="form-label">
                                *Número de documento
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                value={documentNumber}
                                name="documentNumber"
                                id="numero-documento"
                                className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                            <label
                                htmlFor="registrar-correo"
                                className="form-label">
                                *Correo electrónico
                            </label>
                            <input
                                onChange={handleChange}
                                type="email"
                                value={email}
                                name="email"
                                id="registrar-correo"
                                className="form-control"
                                placeholder="Ejemplo: usuario@correo.com" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                            <label
                                htmlFor="telefono"
                                className="form-label">
                                *Teléfono
                            </label>
                            <input
                                onChange={handleChange}
                                value={phone}
                                type="text"
                                name="phone"
                                id="telefono"
                                className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                            <label
                                htmlFor="sexo"
                                className="form-label">
                                Sexo
                            </label>
                            <select
                                onChange={handleChange}
                                className="form-select"
                                value={gender}
                                name="gender"
                                id="sexo">
                                <option value="h" selected>Hombre</option>
                                <option value="m">Mujer</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                            <label
                                htmlFor="fechaNacimiento"
                                className="form-label">
                                Fecha de nacimiento (dd/mm/yyyy)
                            </label>
                            <input
                                onChange={handleChange}
                                type="date"
                                value={birthday}
                                name="birthday"
                                id="fechaNacimiento"
                                className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                            <Boton
                                onClick={logout}
                                className="btn btn-secondary fw-bold btn-size"
                                type="button"
                                btnName="Cerrar sesión" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-3">
                            <Boton
                                className="btn boton-primario fw-bold btn-size"
                                type="submit"
                                btnName="Actualizar" />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Profile;