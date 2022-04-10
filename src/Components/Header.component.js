import './Header.component.css'
import React from "react";

function Header() {
	return (
		<div className='header'>
			<div className='logo'>
				<img src='https://files-cdn.cutwise.com/assets/logo-dark.svg' alt='Cutwise Logo' />
			</div>
			<div className='title'>
				<h1>DiBox 2.0 Performance Collection</h1>
			</div>
		</div>
	);
}

export default Header;