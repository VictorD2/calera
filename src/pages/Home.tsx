import React from "react";

import huevosPardos from '../img/lacalera-huevos-pardos.png';
import fritata from '../img/frittata.png';
import huevosJumbo from '../img/huevo-jumbo.png';
import huevosSuperJumbo from '../img/huevos-pardos-super-jumbo.png';

const Home = () => {

    return (
        <>
            <main>
                <section className="w-100" style={{ minHeight: "calc(100vh - 100px)" }}>
                    <div className="w-100 position-relative" style={{ minHeight: "calc(100vh - 100px)" }}>
                        <video loop autoPlay className="w-100 h-100" src="intro.mp4" />
                        <div className="position-absolute w-100 text-white title">
                            Los Huevos del Perú
                        </div>
                    </div>
                </section>
                <section className="w-100 vh-100">
                    <div className="container w-100 h-100 d-flex align-items-center flex-column justify-content-center">
                        <h2 className="text-center fs-1" style={{ marginBottom: "50px", color: "#4a4a4a" }}>Conoce nuestros productos</h2>
                        <div className="row">
                            <div className="col-12 col-md-4 col-sm-4 col-lg-4">
                                <img src={huevosPardos} className="" width="343" height="171" alt="Foto Huevos Pardos" />
                                <h3 className="text-center mt-4 fs-6 text-uppercase text-decoration-underline subtitle" style={{ color: "var(--color__verde)" }}>Huevos Pardos</h3>
                            </div>
                            <div className="col-12 col-md-4 col-sm-4 col-lg-4">
                                <img src={huevosJumbo} className="" width="343" height="171" alt="Foto Huevos Jumbo" />
                                <h3 className="text-center mt-4 fs-6 text-uppercase text-decoration-underline subtitle" style={{ color: "var(--color__verde)" }}>Huevos Jumbo</h3>
                            </div>
                            <div className="col-12 col-md-4 col-sm-4 col-lg-4">
                                <img src={huevosSuperJumbo} className="" width="343" height="171" alt="Foto Huevos Super Jumbo" />
                                <h3 className="text-center mt-4 fs-6 text-uppercase text-decoration-underline subtitle" style={{ color: "var(--color__verde)" }}>Huevos Super Jumbo</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-100 vh-100">
                    <div className="row w-100 h-100 m-0">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 h-100 px-0 position-relative">
                            <img src={fritata} className="w-100 h-100" alt="" />
                            <div className="position-absolute text-white fs-1 px-5 mx-5 fw-bold" style={{ top: "40%" }}> Aprende a preparar las recetas más ricas</div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 h-100 bg-gradient d-flex align-items-center justify-content-center flex-column" style={{ background: "var(--color__verde)" }}>
                            <div>
                                <p className="text-white fs-5 fw-bold mb-4">
                                    Ingredientes
                                </p>

                                <p className="text-white m-0">
                                    2 pimientos asados y pelados
                                </p>
                                <p className="text-white m-0">
                                    200g de espárragos blanqueados (solo las puntas)
                                </p>
                                <p className="text-white m-0">
                                    100g de prosciutto o jamón crudo
                                </p>
                                <p className="text-white m-0">
                                    6 huevos
                                </p>
                                <p className="text-white m-0">
                                    → Ver receta completa
                                </p>
                                <p className="text-white m-0">
                                    → Ver más recetas
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
