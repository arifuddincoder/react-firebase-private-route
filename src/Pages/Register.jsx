import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
	const { createUser } = use(AuthContext);
	const handleRegister = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		createUser(email, password)
			.then((result) => console.log(result))
			.catch((error) => console.log(error));
	};
	return (
		<div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-10">
			<div className="card-body">
				<form className="fieldset" onSubmit={handleRegister}>
					<label className="label">Name</label>
					<input type="text" className="input" name="name" placeholder="Name" />
					<label className="label">Email</label>
					<input type="email" className="input" name="email" placeholder="Email" />
					<label className="label">Password</label>
					<input type="password" className="input" name="password" placeholder="Password" />
					<div>
						<a className="link link-hover">Forgot password?</a>
					</div>
					<button className="btn btn-neutral mt-4">Register</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
