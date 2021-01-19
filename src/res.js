import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import InfoCard from './InfoCard'

import { Container, Row, Col } from 'react-bootstrap'
import NavBar from './NavBar'

const App = () => {
	const [persons, setPersons] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const url = 'https://jsonplaceholder.typicode.com/users'

	useEffect(() => {
		const fetchPeople = async () => {
			const res = await axios(url)
			setPersons(res.data)
			setIsLoading(false)
		}
		fetchPeople()
	}, [])
	// .catch((err) => {
	// 	console.log(err.message)
	// })
	console.log(persons)
	return (
		<div>
			<NavBar />
			{isLoading && <div>Loading...</div>}
			<Container>
				<Row>
					{persons.map((person) => (
						<Col xs={3} className='mb-4' key={person.id}>
							{persons && (
								<InfoCard person={person} style={{ width: '18rem' }} />
							)}
						</Col>
					))}
				</Row>
			</Container>
		</div>
	)
}
/* {person.name} */
{
	/* <div>
			{persons.map((person) => (
				<Card person={person} style={{ width: '18rem' }} />
			))}
		</div> */
}

export default App

// useEffect(() => {
// 	fetch(url)
// 		.then((res) => {
// 			return res.json()
// 		})
// 		.then((data) => {
// 			setPersons(data)
// 		})
// }, [])
