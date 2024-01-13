import React, { useState, useEffect } from "react"

//🟨Fetch Data on the Client
//	UseState()  =>  Declare a state variable
//	UseEffect() =>  Call the Backend, Get the Data, Put into State variable

interface User {
	id: number
	name: string
}

const UserPage = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users")
	const users: User[] = await res.json()

	return (
		<>
			<div>UserPage</div>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	)
}

export default UserPage
