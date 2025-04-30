import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const Root = () => {
	return (
		<>
			<Header></Header>
			<div className="max-w-7xl mx-auto min-h-96">
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Root;
