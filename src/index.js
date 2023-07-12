import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Header from './layout/Header';
import Footer from './layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<div className="layout">
				<div className="layout-sansFooter">
					<Header />
					<Router />
				</div>

				<Footer />
			</div>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
