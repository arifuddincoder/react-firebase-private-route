import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
	const { user, signOutUser } = use(AuthContext);
	console.log(user);
	const handleSignOut = () => {
		signOutUser()
			.then(() => {
				console.log("Sign out success");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="navbar bg-base-100 max-w-7xl mx-auto">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
						</svg>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard">Dashboard</NavLink>
						</li>
						<li>
							<NavLink to="/my-profile">My Profile</NavLink>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost text-xl">daisyUI</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					{user && (
						<>
							<li>
								<NavLink to="/dashboard">Dashboard</NavLink>
							</li>
						</>
					)}
					<li>
						<NavLink to="/my-profile">My Profile</NavLink>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<>
						<span className="mr-1">{user.email}</span>
						<button onClick={handleSignOut} className="btn">
							Logout
						</button>
					</>
				) : (
					<>
						<Link to="/login" className="btn">
							Login
						</Link>
						<Link to="/register" className="btn">
							Register
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
