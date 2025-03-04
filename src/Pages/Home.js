/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { useEffect, useMemo, useState } from 'react';
import { Web3Button, Web3Modal, useWeb3Modal } from "@web3modal/react";
import {
	mainnet,
	useAccount,
	useContractRead,
	useContractReads,
	useContractWrite,
	useNetwork,
	usePublicClient,
	useSwitchNetwork,
	useWaitForTransaction,
	useDisconnect,
} from "wagmi";
import {
	createPublicClient,
	formatEther,
	http,
	parseEther,
	webSocket,
} from "viem";
import { pulsechainV4 } from "wagmi/chains";

import '../App.css';

import arrow from '../assets/arrow.png'
import img2 from '../assets/33.png'
import img3 from '../assets/44.png'
import img4 from '../assets/moderncar.jpg'
import img5 from '../assets/55.png'
import car from '../assets/car.jpeg'
import bmw from '../assets/bmw.mp4'
import acura from '../assets/acura.mp4'
import racing from '../assets/racing.png'
import tyreTrack from '../assets/tireTrack.png'
import tyreTrack2 from '../assets/tyre2.png'
import MintSlider from '../components/mint';
import Roadmap from '../components/roadmap';

var Scroll = require('react-scroll');

let signer;
var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

function FAQItem({ question, answer }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`faq-item ${isOpen ? 'active' : ''}`}>
			<button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
				{question}
				<span className="faq-icon">+</span>
			</button>
			<div className="faq-answer">
				{answer}
			</div>
		</div>
	);
}

const Home = () => {

	const { open } = useWeb3Modal();
	const { chain } = useNetwork();
	const { switchNetwork } = useSwitchNetwork();
	const [_connected, setConnected] = useState(false);
	const { disconnect } = useDisconnect();
	const totalSupply = 5000;
	const pricePerNFT = 0.05;

	const faqItems1 = [
		{
			question: "What is the point of pinks racing?",
			answer: "To build a full garage to fully tricked out automobiles that will be collectible assets because the more that your car is worth the more you have to wager. "
		},
		{
			question: "What is required to play the game?",
			answer: "The only item required to play. The pinks game is one pinks NFT. "
		},
		{
			question: "How do I mint my NFT?",
			answer: "Simply connect your crypto wallet to the site, have the necessary amount of Avalanche also know as AVAX in the wallet, hit the mint button, follow the prompts and you will then have NFT in your wallet"
		},
		{
			question: "So what do I do once I have my NFT?",
			answer: "You go into the game application connect your wallet and your NFT will be in your garage inside of the game. "
		},
		{
			question: "Will I be able to improve my car in the game?",
			answer: "Yes there will be a shop where you can buy modification parts. Also, there will be modification parts that will be given away for the daily fastest times the weekly fastest times throughout the game."
		},
		{
			question: "What happens when all cars are sold? How do I get to play the game? ",
			answer: "There's a limited number of 10,000 total cars in this first edition. Until a second edition will come out the only way to get a car once sold out is on the open market. "
		},
		{
			question: "How will disagreements be handled?",
			answer: "Since all betting in the game will be based on smart contracts that will be agreed-upon in the terms and conditions of the game. There will be no disagreements. "
		}
	];

	const faqItems2 = [
		{
			question: "Will PINK NFT continue to exist as a curated marketplace?",
			answer: "No, PINK NFT marketplace will cease operations as a curated marketplace. However, all existing NFTs and contracts will remain accessible on the blockchain."
		}
	];

	const faqItems3 = [
		{
			question: "Will PINK NFT continue to exist as a curated marketplace?",
			answer: "No, PINK NFT marketplace will cease operations as a curated marketplace. However, all existing NFTs and contracts will remain accessible on the blockchain."
		},
		{
			question: "Can PINK NFT contracts still be used?",
			answer: "Yes, all existing smart contracts will remain functional on the blockchain. You can continue to trade your NFTs on other marketplaces."
		}
	];

	const faqItems4 = [
		{
			question: "Will PINK NFT continue to exist as a curated marketplace?",
			answer: "No, PINK NFT marketplace will cease operations as a curated marketplace. However, all existing NFTs and contracts will remain accessible on the blockchain."
		}
	];

	const [count, setCount] = useState(1);

	const handleIncrease = () => setCount((prev) => Math.min(prev + 1, 10)); // Max mint: 10
	const handleDecrease = () => setCount((prev) => Math.max(prev - 1, 1));  // Min mint: 1

	const { address: walletAddress } = useAccount({
		async onConnect() {
			handleConnect();
		},
	});

	const transport = webSocket("wss://pulsechain-testnet-rpc.publicnode.com");

	const publicClient = createPublicClient({
		chain: pulsechainV4,
		transport,
	});

	async function handleConnect() {
		if (chain.id !== 943) {
			switchNetwork(943);
		}

		setConnected(true);
	}

	async function disconnectWallet() {
		setConnected(false);
		disconnect();
		//window.location.reload(true);
	}

	function shortenAddress(walletAddress) {
		try {
			return _connected
				? walletAddress.slice(0, 3) + "..." + walletAddress.slice(-4)
				: "Connect";
		} catch (error) {
			console.log(error);
		}
	}


	return (
		<div className="app">
			<header className="header">
				<div className="logo"><span style={{ color: "#ff188b" }}>PINK</span> NFT.</div>
			</header>


			<section className="hero">

				<div className='hero-image"'>
					<video className="main-image" autoPlay loop muted playsInline>
						<source src={bmw} type="video/mp4" />
					</video>
				</div>

				<h1 className="title"><span style={{ color: "#ff188b" }}>PINK</span> NFT</h1>
				<h2 className="subtitle">IT’S SHOW TIME....</h2>
				<p className="description">
					It’s been an unforgettable experience. But the time has come to close the lid on KnownOrigin as an active platform, and look back on it as a lasting piece of crypto-art history.
				</p>

				{_connected ? (
					<button onClick={() => disconnectWallet()} className='cyberpunk-button'><img src={arrow} /> {walletAddress === "" ? "CONNECT" : shortenAddress(walletAddress)}</button>) : (
					<button className='cyberpunk-button' onClick={() => { open(); }}>
						<img src={arrow} /> MINT PINK NFT HERE
					</button>
				)}

			</section>

			<div className="main">
				{_connected ?
					<>
						<h2 className="section-title" id="title3">MINT <span style={{ color: "#ff188b" }}>CARS</span></h2>

						<div className="mint-container2">

							<div className="mint-box2">
								<img src={car} alt="Selected NFT" className="selected-nft2" />

								<div className="Minted">Minted</div><p className="total-supply">5 / 1000</p>
								<p className="price">Price per NFT: <span>{pricePerNFT} ETH</span></p>

								<div className="counter2">
									<button onClick={() => setCount(Math.max(count - 1, 1))} className="btn2">−</button>
									<span className="count2">{count}</span>
									<button onClick={() => setCount(Math.min(count + 1, 10))} className="btn2">+</button>
								</div>

								<p className="total-price2">Total: <span>{(count * pricePerNFT).toFixed(2)} ETH</span></p>

								<button className="mint-btn2">MINT</button>
							</div>
						</div>

					</>
					: null}
				{_connected ?
					<MintSlider />
					: null}

				<img className='tyreTrack' src={tyreTrack} />

				<div className="story-section">
					<h2 className="section-title" id="title2">ABSTRACT</h2>
				</div>
				<section className="timeline">


					<div className="timeline-item">
						<div className="timeline-content-wrapper">

							<p className="timeline-content">
								Pinks is a blockchain based racing game ever, with a balanced
								fun Gameplay, NFT Gaming and PlayToEarn game mechanics
								(P2E). Aquirre and drive, upgrade, buy and sell NFTS Cars -
								truck, ingame assets and participate in daily race
								Tournaments to win $PKS Tokens and other Trophies & Prizes.
							</p>

							<p className="timeline-content">
								Pinks is a metaverse GameFi with P2E features and functionality
								IT easy to play drag racing game, where you can purchase
								different NFTs and drag race them against other players.
								Each NFT represents a different car, with different odds to
								win the race.
							</p>

							<p className="timeline-content">
								You can drag race your way up to earn a spot in the staking
								pool by winning all in all 20 cars, which can be later traded
								for a staking pass. The game is playable on Avalanche
								blockchain.
							</p>

						</div>
						<div>
							<img src={img2} id="img1" alt="Launch Art" className="timeline-image2" />

						</div>
					</div>

					<div className="timeline-item">
						<div className='imgsDiv'>
							<div className='img2Div'>
								<img src={img3} id="img2" alt="Early Years Art" className="timeline-image2" />
								<img className='tyreTrack2' src={tyreTrack2} />
							</div>
						</div>
						<div className="timeline-content-wrapper">
							<h3 className="timeline-title">NFT UTILITY & VALUE INTRODUCTION</h3>
							<span className="timeline-year">2025</span>
							<p className="timeline-content">
								Pinks platform utilizes NFT Technology and the NFT aspect plays
								a significant role in Pinks hence it is important to understand
								how we achieve using this technology and what exactly is a NFT?
							</p>

							<p className="timeline-content">
								NFT stands for Non-Fungible-Token It is data that is stored or
								accounted for in a digital ledger. This data represents something
								specific or unique. For example we have seen NFTs represent art,
								music albums, digital files, or more recently the craze has been
								about standard JPEGs which have no utility. However, when you
								buy an NFT, you are essentially buying a digital recording of
								ownership of a token, which then can be stored in your digital
								wallet such as metamask.
							</p>

							<p className="timeline-content">
								So this project is called pinks in reference to the pink slip one
								has for the ownership of a car.
							</p>

							<p className="timeline-content">
								The initial NFT itself is on the avalanche Blockchain, and is a car
								or truck. The cost of the NFT is a total of two Apex tokens, and not
								only are these collectible NFTs But they are also utility-based
								for a game that is in current development which will be a pay to
								play model where you can wager on races between cars. You can
								wager on people racing their cars or as a driver of a car you can
								wager up to your pink slip for your car.
							</p>

							<p className="timeline-content">The pay to play aspect will be given for daily race times weekly
								race times, and monthly race times, and will be different
								performance. NFTs that will enhance the overall performance
								of the car. we will be releasing the game in the virtual world of
								sandbox first, and the central and second</p>
						</div>

						<div className='img2Div-2'>
							<img src={img3} id="img2" alt="Early Years Art" className="timeline-image2" />
							<img className='tyreTrack2' src={tyreTrack2} />
						</div>
					</div>

					<div className="timeline-item">
						<div className="timeline-content-wrapper">
							<h3 className="timeline-title">HOW DOES PINKS EXACTLY WORK?</h3>
							<span className="timeline-year">2025</span>
							<p className="timeline-content">
								You have 3 different cars / truck per
								network with different odds to win the race.
							</p>

							<p className="timeline-content">
								<div className='racingMain'><img className='racing' src={racing} /> Gold / Diamond = 70/60% chance to win the race</div>
								<div className='racingMain'><img className='racing' src={racing} /> Silver / Pearl = 50/45% chance to win THE RACE</div>
								<div className='racingMain'><img className='racing' src={racing} /> Bronze / Poly = 30/40% chance to win THE RACE</div>
							</p>


							<p className="timeline-content">You choose your car and place your bets (in the native
								currency $Pks token) and race against another player.</p>

							<p className="timeline-content">If you win, you take it all. If you lose, you lose it all. You can
								only purchase up to 3 cars / truck The rest you have to
								earn by winning against your opponent.</p>
						</div>
						<div className='imgsDiv'>
							<img src={img4} id="img1" alt="Boom Art" className="timeline-image" />
						</div>
					</div>

					<div className="timeline-item">
						<div className='imgsDiv'>
							<div className='img2Div'>
								<img src={img5} id="img2" alt="Growth Art" className="timeline-image" />
								<img className='tyreTrack2' src={tyreTrack2} />
							</div>
						</div>
						<div className="timeline-content-wrapper">
							<h3 className="timeline-title">PINKS META - GAMEFI</h3>
							<span className="timeline-year">2025</span>
							<p className="timeline-content">
								GameFi is a new category which involves cryptocurrency
								projects having a gaming platform that provides a
								metaverse in a nutshell. which combines gaming and DeFi into
								one word, is the gamification of financial mechanisms where
								users can earn profits by playing games.
							</p>
							<p className="timeline-content">Another popular term for this sector is the play to earn
								model. On the surface, the keyword is gaming, but at the
								core, finance is what matters the most for blockchains.
								Most GameFi projects have currently been a success,
								however the important aspect is continuing to build and
								cater for both the gaming industry as well as the defi
								clients which only adoption will define this in time. Although
								Niche, we can reference Axie Infinity’s success which is
								currently one of the most popular crypto gaming
								platforms on the Ethereum blockchain.</p>

							<p className="timeline-content">It has generated over $220 million USD over a 30 day basis,
								making it one of the top revenue generators among all DeFi
								protocols to date. Pinks does not see any other GameFi
								projects as competitors, instead will find it’s place in the
								GameFi community and help build and contribute towards
								the GameFi industry.</p>
						</div>

						<div className='img2Div-2'>
							<img src={img5} id="img2" alt="Early Years Art" className="timeline-image2" />
							<img className='tyreTrack2' src={tyreTrack2} />
						</div>
					</div>

					<div className="timeline-item2-2">
						<div className="timeline-content-wrapper">
							<h3 className="timeline-title2">WHAT MAKES PINKS DIFFERENT?</h3>
							<span className="timeline-year2"></span>
							<div className='difference'>
								<div>
									<p className="timeline-content2">Pinks gamefi enable an opportunity for users to </p>

									<p className="timeline-content2">
										<div className='racingMain'><img className='racing' src={racing} /> Staking</div>
										<div className='racingMain'><img className='racing' src={racing} /> Buy and sell NFT collection: Cars & Trucks</div>
										<div className='racingMain'><img className='racing' src={racing} /> Token rewards for users</div>
										<div className='racingMain'><img className='racing' src={racing} /> Token staking and long-term holding</div>
										<div className='racingMain'><img className='racing' src={racing} /> 4K game graphics – explore real-time racing in Pinks Metaverse GameFi</div>
										<div className='racingMain'><img className='racing' src={racing} /> Customize your own car/truck system</div>
										<div className='racingMain'><img className='racing' src={racing} /> Upgrade engine and other parts</div>
										<div className='racingMain'><img className='racing' src={racing} /> Staking with cars</div>
									</p>
								</div>

								<div>
									<p className="timeline-content2" id="top">Play to earn feature</p>
									<p className="timeline-content2">
										<div className='racingMain'><img className='racing' src={racing} /> Level your cars / truks</div>
										<div className='racingMain'><img className='racing' src={racing} /> Defend your honour and race to frist to get resources and a passive incom</div>
										<div className='racingMain'><img className='racing' src={racing} /> Mint new rare relics/equipment and sell them</div>
									</p>
								</div>
							</div>
						</div>

					</div>
				</section>

				<section>
					<Roadmap />
				</section>

				<section className="faq">
					<div className="faq-section">
						<h2 className="section-title"><span style={{ color: "#ff188b" }}>GENERAL</span> QUESTIONS</h2>
						<div className="faq-items">
							{faqItems1.map((item, index) => (
								<FAQItem key={index} question={item.question} answer={item.answer} />
							))}
						</div>
					</div>
					<div className='videoTag'>
						<video className='faqV' autoPlay loop muted playsInline>
							<source src={acura} type="video/mp4" />
						</video>

					</div>
				</section>

				<section className="links">
					<h2 className="section-title"><span style={{ color: "#ff188b" }}>IMPORTANT</span> LINKS</h2>
					<div className='section-sub'>All of the KnownOrigin inventory can be viewed on these marketplaces below, and the four KODA contracts can be viewed on etherscan.</div>
					<div className="links-grid">
						<a href="#" className="link">HELP FAQ</a>
						<a href="#" className="link">PLATFORM</a>
						<a href="#" className="link">BLOG POSTS</a>
						<a href="#" className="link">DISCORD</a>
						<a href="#" className="link">X / TWITTER</a>
						<a href="#" className="link">LENS PINK NFT</a>
						<a href="#" className="link">LENS COMMUNITY</a>
						<a href="#" className="link">LENS SUPPORT</a>
					</div>
				</section>

				<section className="links">
					<h2 className="section-title"><span style={{ color: "#ff188b" }}>CONTACT</span> US</h2>
					<p className="section-sub">
						Please reach out if you questions and or concerns regarding historic marketplace and NFTs. If you're unable to
						use any of the above services please contact us below. Otherwise, stay with the PINK NFT legacy.
					</p>
					<div className="links-grid2">
						<a href="mailto:support@pinknft.io" className="link">support@pinknft.io</a>
					</div>
				</section>
			</div>

			<footer className="footer">
				<div className="logo2"><span style={{ color: "#ff188b" }}>PINK</span> NFT.</div>
			</footer>
		</div>
	)

}
export default Home;
