import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const FullCard = ({ users }) => {
	const { id } = useParams()
	return (
		<div>
			<h2>User details</h2>
			<Container>
				{users
					.filter((user) => user.id == id)
					.map((user) => (
						<Card className='h-100 align-center mt-3' key={user.id}>
							<Card.Body className='d-flex flex-column align-items-center'>
								<div className='d-flex flex-column mb-4 align-items-center'>
									<Card.Title>Name: {user.name}</Card.Title>
									<Card.Text>Username: @{user.username}</Card.Text>
									<Card.Text>Website: {user.email}</Card.Text>
									<Card.Text>Phone: {user.phone}</Card.Text>
									<Card.Text>Copmany: {user.company.name}</Card.Text>
									<Card.Text>Website: {user.website}</Card.Text>
									<Card.Text>
										Address:{' '}
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
		</div>
	)
}

export default FullCard
