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
							<Card className='h-100 align-center mt-3'>
								<Card.Img
									variant='top'
									src='https://via.placeholder.com/150x80/000/?text=IMG'
								/>
								<Card.Body className='d-flex flex-column align-items-center'>
									<div className='d-flex flex-column mb-4 align-items-center'>
										<Card.Title>{user.name}</Card.Title>
										<Card.Text>@{user.username}</Card.Text>
									</div>
									<div className='d-flex flex-column mb-2'>
										<Card.Link className='' href={user.website}>
											{user.website}
										</Card.Link>
									</div>
									<div>
										<Link to={`/users/${user.id}`} className='link'>
											More info
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
