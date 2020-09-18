import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from './components/Features';
import Carousel from './components/Carousel';
import OurTools from './components/OurTools';
import Community from './components/Community';
import LearnMore from './components/LearnMore';
import useWindowSize from "./components/WindowCheck";
import "./app.scss";
import { ReactComponent as SquaresMobile } from "./assets/svg/squares_mobile.svg";
import { ReactComponent as SquareMobile } from "./assets/svg/square_mobile.svg";
import { ReactComponent as SquaresDesktop } from "./assets/svg/squares_desktop.svg";
import { ReactComponent as SquareDesktop } from "./assets/svg/square_desktop.svg";

function App() {
	const isMobile = useWindowSize().width < 768;
	const Squares = isMobile ? SquaresMobile : SquaresDesktop;
	const Square = isMobile ? SquareMobile : SquareDesktop;

	return (
		<div className="lp_container">
			<div className="squares">
				<Squares />
			</div>
			<div className="square">
				<Square />
			</div>

			<Navbar />
			<Header />
			<Features />
			<Carousel />
			<OurTools />
			<Community />
			<LearnMore />
		</div>
	);
}

export default App;
