const Signup = () => {
	return (
		<form>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col">
					<div className="text-center">
						<h1 className="text-5xl font-bold">Image Pro</h1>
						<p className="py-6">Show the world who you are!</p>
					</div>
					<div className="card bg-base-100 sm:w-[30rem] shadow-2xl">
						<form className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="email"
									className="input input-bordered"
									required
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
		</form>
	);
};

export default Signup;
