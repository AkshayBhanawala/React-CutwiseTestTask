import React, { useEffect, useState } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { startMainSpinner, stopMainSpinner } from './Store/Actions/Spinner.actions';
import { setAccessToken } from './Store/Actions/AccessToken.actions';
import getAccessToken from './Services/Auth.service';
import getDiamonds from './Services/Diamond.service';
import Diamonds from './Components/Diamonds.component';
import Spinner from './Components/Spinner.component';
import Header from './Components/Header.component';
import Footer from './Components/Footer.component';
import './App.css';

function App() {
	useEffect(() => { fetchDiamonds(); })

	const dispatch = useDispatch();
	const accessToken = useSelector(state => state.accessToken);
	const [diamonds, setDiamonds] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState(false);

	const fetchDiamonds = async () => {
		if (!accessToken && !isLoading && !diamonds.length) {
			setLoading(true);
			dispatch(startMainSpinner());
			try {
				const accessTokenResp = await getAccessToken();
				dispatch(setAccessToken(accessTokenResp));
				const limit = 10;
				const offset = 0;
				const diamondsResp = await getDiamonds(accessTokenResp, limit, offset);
				setDiamonds(diamondsResp);
			} catch (err) {
				setError(true);
				console.error(err);
			}
			setLoading(false);
			dispatch(stopMainSpinner());
		}
	};

	return (
		<>
			<Spinner />
			<Header />
			<div className="content">
				{ isError ? renderErrorMessage() : renderContent() }
			</div>
			<Footer />
		</>
	);

	function renderContent() {
		if (isLoading) {
			return (<></>);
		}
		return (
			<Switch>
				<Route path={["/"]} exact component={renderDiamonds} />
			</Switch>
		);
	}

	function renderErrorMessage() {
		return (
			<div className="error">
				<h1>Ohh no!!!</h1>
				<h3>Something went wrong, please try again later!</h3>
			</div>
		);
	}

	function renderDiamonds(props) {
		if (accessToken && diamonds) {
			return (<Diamonds {...props} diamonds={diamonds} />);
		}
		return (<></>)
	}
}

export default withRouter(App);