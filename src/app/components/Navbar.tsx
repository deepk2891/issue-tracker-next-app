"use client"

import React from "react"
import Link from "next/link"
import { AiFillBug } from "react-icons/ai"
import { usePathname } from "next/navigation"
import classnames from "classnames"

const Navbar = () => {
	const currentPath = usePathname()

	const links = [
		{ label: "Dashboard", href: "/" },
		{ label: "issues", href: "/issues" },
	]

	return (
		<main className="border-b  mb-5">
			<div className="container mx-auto border-b flex-col md:flex-row">
				<nav className="flex space-x-6 px-5 h-14 items-center">
					<Link href="/">
						<AiFillBug />
					</Link>
					<ul className="flex space-x-6">
						{links.map((link) => (
							<Link
								key={link.href}
								className={classnames({
									"text-zinc-900": link.href === currentPath,
									"text-zinc-500": link.href !== currentPath,
									"hover:text-zinc-800 font-medium transition-colors": true,
								})}
								href={link.href}
							>
								{link.label}
							</Link>
						))}
					</ul>
				</nav>
			</div>
		</main>
	)
}

export default Navbar
