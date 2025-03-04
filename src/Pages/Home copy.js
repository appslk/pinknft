/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { useEffect, useMemo, useState } from 'react';
import twitter from '../assets/twitter-.png';
import teleg from '../assets/telegram.png';
import '../App.css';
import logoPic from '../assets/logo.png';

import { base } from 'wagmi/chains';

var Scroll = require('react-scroll');

let signer;
var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

const tweet = () => {
	window.open("https://x.com/basemewcoin/");
}

const tg = () => {
	window.open("https://t.me/basemewcoinchat");
}

const Home = () => {

	const [_navbarOpen, set_navbarOpen] = useState(0)

	async function closeNav() {
		set_navbarOpen(0);
		//this.setState({ _navbarOpen: 0 });
	}

	async function navbarOpen() {
		set_navbarOpen(1);
		//this.setState({ _navbarOpen: 0 });
	}

	return (
		<div class="allWrap">
			<div class="light">

				<div class="headers">

					<div class="h1">

						<div class="connect">
							<div ><Link activeClass="" id="fontSize" to="intro" spy={true} smooth={true} duration={550}>INTRODUCTION</Link></div>
							<div ><Link activeClass="" id="fontSize" to="token" spy={true} smooth={true} duration={550}>TOKENOMICS</Link></div>
							<div ><Link activeClass="" id="fontSize" to="story" spy={true} smooth={true} duration={550}>DISTRIBUTION</Link></div>
						</div>

						<div class="logoDiv"><img src={logoPic} onClick={() => window.location.href = 'presale'}></img></div>
						<div class="right">

							<div class="socialIcon">
								<img onClick={tweet} src={twitter} />
								<img onClick={tg} src={teleg} />
							</div>

							<div class="connect2">
								<button class="connectBtn" onClick={() => window.location.href = 'presale'}>PRESALE</button>
							</div>

						</div>

					</div>

				</div>


			</div >
		</div >
	)

}
export default Home;
