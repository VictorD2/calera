import React from 'react';
import loaderLogo from '../img/logo-loader.png';
const loader = () => {
	return (
		<>
			<div className='loader-container'>
				<div className='loader-box'>
					<img src={loaderLogo} alt='logo de la calera' />
				</div>
				<p>Cargando...</p>
			</div>
		</>
	);
};

export default loader;
