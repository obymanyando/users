import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'

const FullCard = ({ users }) => {
	const { id } = useParams()
	return (
		<div className='fullCard'>
			{/* <Button variant='info' href='/' className='btn'>
				⇦
			</Button> */}
			<div className='user-details'>
				<h2>User details</h2>
				{/* <Button variant='info' href='/' className='btn'>
					⇦
				</Button> */}
			</div>

			<Container className='d-flex flex-column align-items-center w-50'>
				{users
					.filter((user) => user.id == id)
					.map((user) => (
						<Card className='d-flex flex-column h-100 w-50 m-3' key={user.id}>
							<Card.Body className='d-flex flex-column align-items-center'>
								<div className='d-flex flex-column mb-4'>
									<Card.Title>- Name: {user.name}</Card.Title>
									<Card.Text>- Username: @{user.username}</Card.Text>
									<Card.Text>- Website: {user.email}</Card.Text>
									<Card.Text>- Phone: {user.phone}</Card.Text>
									<Card.Text>- Copmany: {user.company.name}</Card.Text>
									<Card.Text>- Website: {user.website}</Card.Text>
									<Card.Text>
										- Address:{' '}
										<ul>
											<li>street: {user.address.street}</li>
											<li>suite: {user.address.suite}</li>
											<li>city: {user.address.city}</li>
											<li>zipcode: {user.address.zicode}</li>
										</ul>
									</Card.Text>
								</div>
							</Card.Body>
						</Card>
					))}
			</Container>
			<Button variant='info' href='/' className='btn'>
				⇦
			</Button>
		</div>
	)
}

export default FullCard
