import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import axios from 'axios'
import Home from './Home'
import FullCard from './FullCard'

import NavBar from './NavBar'

const App = () => {
	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	const url = 'https://jsonplaceholder.typicode.com/users'

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw Error(`Sorry, could not fetch data from ${url}`)
				}
				return res.json()
			})
			.then((data) => {
				setUsers(data)
				setIsLoading(false)
				setError(null)
			})
			.catch((err) => {
				setIsLoading(false)
				setError(err.message)
			})
	}, [])

	return (
		<Router>
			<div>
				<NavBar />

				{isLoading && <div>Loading...</div>}
				{error && <div>{error}</div>}
				<Switch>
					<Route exact path='/'>
						<Home users={users} />
					</Route>
					<Route exact path='/users/:id'>
						<FullCard users={users} />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
