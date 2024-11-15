import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const navbar = () => {
	const handleLogout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div>
			<div className="navbar bg-base-100 justify-between">
				<a className="font-bold  normal-case text-xl underline">
					GalleryPro 📸
				</a>
				<button onClick={handleLogout}>Logout</button>
			</div>
		</div>
	);
};

export default navbar;
