import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

function NavBar() {
	return (
		<div>
			<Navbar bg='light' expand='lg'>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default NavBar
