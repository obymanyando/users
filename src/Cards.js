import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

const Cards = ({ users }) => {
	return (
		<div>
			<Container>
				<Row>
					{users.map((user) => (
						<Col xs={3} className='mb-4' key={user.id}>
							<Card className='h-100 align-center m-3'>
								<div className='d-flex flex-column avatar'>
									<h1>{user.name.charAt(0)}</h1>
								</div>
								<Card.Body className='d-flex flex-column align-items-center'>
									<div className='d-flex flex-column mb-4 align-items-center'>
										<Card.Title>{user.name}</Card.Title>
										<Card.Text>@{user.username}</Card.Text>
										<Card.Link className='' href={user.website}>
											{user.website}
										</Card.Link>
									</div>

									<div className='d-flex flex-column mt-2'>
										<Link to={`/users/${user.id}`} className='more-info'>
											MORE INFO
										</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	)
}

export default Cards
