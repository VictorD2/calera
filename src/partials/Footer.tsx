import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
const Footer = () => {
	return (
		<footer className='footer__area'>
			<div className='footer__content'>
				<div className='row'>
					<div className='col-12 col-sm-4'>
						<h3 className='title mb-4'>© 2019 LA CALERA</h3>
						<p className='text-white fw-bold m-0'>Av. Los Horizontes Mz N Lt 7</p>
						<p className='text-white fw-bold m-0'>Urb. Los Huertos de Villa</p>
						<p className='text-white fw-bold m-0'>Chorrillos - Lima</p>
						<p className='text-white fw-bold mt-2'>
							(+511) 4177300 atencionalcliente@lacalera.com.pe
						</p>
					</div>
					<div className='col-12 col-sm-4'>
						<h3 className='title fw-bold mb-4'>MÁS</h3>
						<ul className='list-unstyled'>
							<li>
								<Link className='text-decoration-none text-white fw-bold' to='#'>
									La Calera Agriculture
								</Link>
							</li>
							<li>
								<Link className='text-decoration-none text-white fw-bold' to='#'>
									Fundación La Calera
								</Link>
							</li>
							<li>
								<Link className='text-decoration-none text-white fw-bold' to='#'>
									Trabaja con Nosotros
								</Link>
							</li>
							<li>
								<Link className='text-decoration-none text-white fw-bold' to='#'>
									Contacto
								</Link>
							</li>
							<li>
								<Link className='text-decoration-none text-white fw-bold' to='#'>
									Comprobantes Electrónicos
								</Link>
							</li>
						</ul>
					</div>
					<div className='col-12 col-sm-4'>
						<ul className='list-unstyled d-flex'>
							<li>
								<Link className='text-decoration-none text-white fw-bold mx-2' to='#'>
									<FaInstagram />
								</Link>
							</li>
							<li>
								<Link className='text-decoration-none text-white fw-bold mx-2' to='#'>
									<FaFacebookF />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
