import React from "react"
import Link from "next/link"
import { AiFillBug } from "react-icons/ai"

const Navbar = () => {
	const links = [
		{ label: "Dashboard", href: "/" },
		{ label: "issues", href: "/issues" },
	]

	return (
		<main>
			<nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
				<Link href="/">
					<AiFillBug />
				</Link>
				<ul className="flex space-x-6">
					{links.map((link) => (
						<Link key={link.href} className="text-zinc-500 hover:text-zinc-800 transition-colors" href={link.href}>
							{link.label}
						</Link>
					))}
				</ul>
			</nav>
		</main>
	)
}

export default Navbar
