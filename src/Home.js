import React from 'react'
import Cards from './Cards'

const Home = ({ users }) => {
	return (
		<div>
			<Cards users={users} />
		</div>
	)
}

export default Home
