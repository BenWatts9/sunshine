import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"

export const Login = ({setAuthUser}) => {
	const [loginUser, setLoginUser] = useState({ email: "" });
	const [existDialog, setExistDialog] = useState(false);

	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const newUser = { ...loginUser };
		newUser[event.target.id] = event.target.value;
		setLoginUser(newUser);
	};

	const existingUserCheck = () => {
		// If your json-server URL is different, please change it below!
		return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
			.then((res) => res.json())
			.then((user) => (user.length ? user[0] : false));
	};

	const handleLogin = (e) => {
		e.preventDefault();

		existingUserCheck().then((exists) => {
			if (exists) {
				// The user id is saved under the key nutshell_user in session Storage. Change below if needed!
				setAuthUser(exists);
				navigate("/home");
			} else {
				setExistDialog(true);
			}
		});
	};

    return (
		<main className="container--login">
			<dialog className="dialog dialog--auth" open={existDialog}>
				<div>User does not exist</div>
				<button
					className="button--close"
					onClick={(e) => setExistDialog(false)}
				>
					Close
				</button>
			</dialog>
			<section>
				<form className="form--login" onSubmit={handleLogin}>
					
					<div className="login--title"> Please sign in</div>
					<fieldset>
						<label htmlFor="inputEmail"></label>
						<input
							type="email"
							id="email"
							className="form-control"
							placeholder="Email address"
							required
							autoFocus
							value={loginUser.email}
							onChange={handleInputChange}
						/>
					</fieldset>
					<fieldset>
						<button type="submit" className="select-buttonz">Sign in</button>
					</fieldset>
				</form>
			</section>
			<section className="link--register">
				<Link to="/register" className="reglink">Register for an account</Link>
			</section>
		</main>
	);
};