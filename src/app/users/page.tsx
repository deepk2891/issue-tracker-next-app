import React, { useState, useEffect } from "react"

//🟨Fetch Data on the Client
//	UseState()  =>  Declare a state variable
//	UseEffect() =>  Call the Backend, Get the Data, Put into State variable

interface User {
	id: number
	name: string
}

const UserPage = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 10 } })
	// Next js is gonna run the background job and get frsh data from backend every 10 seconds
	// this caching behaviour is only implemented in fetch function
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
