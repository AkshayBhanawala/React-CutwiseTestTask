import './Spinner.component.css'
import React from "react";
import { useSelector } from "react-redux";
import SVGLoading from "./SVGs/Loading.svg";

function Spinner() {
	const isLoading = useSelector(state => state.spinner);
	return (
		<div className={`loading-spinner ${isLoading ? "show" : ""}`}><SVGLoading /></div>
	);
}

export default Spinner;