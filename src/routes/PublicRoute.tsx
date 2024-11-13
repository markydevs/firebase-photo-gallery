import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = () => {
	const { user } = useAuth();
	if (user) {
		return <Navigate to="/" replace={true} />;
	}
};

export default PublicRoute;
