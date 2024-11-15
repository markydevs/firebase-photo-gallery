import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Signup = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (error) {
			setError((error as Error).message);
		}
	};

	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col">
				<div className="text-center">
					<h1 className="text-5xl font-bold">Image Pro</h1>
					<p className="py-6">Show the world who you are!</p>
				</div>
				<div className="card bg-base-100 sm:w-[30rem] shadow-2xl">
					<form onSubmit={handleSubmit} className="card-body">
						{error && <p className="text-red-500">{error}</p>}
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								className="input input-bordered"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								className="input input-bordered"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">SIGN UP</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
