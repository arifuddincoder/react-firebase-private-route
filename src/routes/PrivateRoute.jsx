import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { HashLoader } from "react-spinners";
const PrivateRoute = ({ children }) => {
	const { user, loading } = use(AuthContext);
	const location = useLocation();
	if (loading) {
		return (
			<div className="h-screen w-full flex justify-center items-center">
				<HashLoader />
			</div>
		);
	}
	if (!user) {
		return <Navigate state={location?.pathname} to="/login"></Navigate>;
	}
	return children;
};

export default PrivateRoute;
