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

import mainGif from '../assets/the-last-selfie.gif'
import arrow from '../assets/arrow.png'
import img2 from '../assets/33.jpg'
import img3 from '../assets/44.jpg'
import img4 from '../assets/55.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/4.jpg'
import car from '../assets/car.jpeg'
import moderncar from '../assets/moderncar.jpg'
 import MintSlider from '../components/mint';

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

			<main className="main">
				<section className="hero">
					<div className="hero-image">
						<img src={moderncar} alt="Digital Art" className="main-image" />
					</div>
					<h1 className="title"><span style={{ color: "#ff188b" }}>PINK</span> NFT</h1>
					<h2 className="subtitle">2018-2025</h2>
					<p className="description">
						It’s been an unforgettable experience. But the time has come to close the lid on KnownOrigin as an active platform, and look back on it as a lasting piece of crypto-art history.
					</p>
					<p className="description">
						All NFTs minted from any of the KODA contracts are <b>safe and will live on1</b>
					</p>
					<p className="description">
						We can’t thank you all enough for trusting us over the years to be the place where so many crypto-artists started their journeys and continued to call home.
					</p>

					{_connected ? (
						<button onClick={() => disconnectWallet()} className='faqBelow'><img src={arrow} /> {walletAddress === "" ? "CONNECT" : shortenAddress(walletAddress)}</button>) : (
						<button className='faqBelow' onClick={() => { open(); }}>
							<img src={arrow} /> MINT PINK NFT HERE
						</button>
					)}

				</section>

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

				<section className="timeline">
					<div className="story-section">
						<h2 className="section-title" id="title2">THE <span style={{ color: "#ff188b" }}>STORY</span></h2>
					</div>

					<div className="timeline-item">
						<div className="timeline-content-wrapper">

							<h3 className="timeline-title">THE LAUNCH</h3>
							<span className="timeline-year">2018</span>
							<p className="timeline-content">
								PINK NFT was born out of a simple question: "What are the true uses of blockchain technology in the art world, and how can we help artists reach new audiences and create new revenue streams?"
							</p>

							<p className="timeline-content">
								The experiment began from a pop-up in a basement in Manchester, with 10 artists creating 25 physical artworks.
							</p>

							<p className="timeline-content">
								QR codes and a very basic wallet app enabled attendees to buy the digital artwork on the spot, claiming the NFT and the physical piece simultaneously.
							</p>

						</div>
						<div>
							<img src={img2} id="img1" alt="Launch Art" className="timeline-image2" />
						</div>
					</div>

					<div className="timeline-item">
						<div>
							<img src={img3} id="img2" alt="Early Years Art" className="timeline-image2" />
						</div>
						<div className="timeline-content-wrapper">
							<h3 className="timeline-title">THE EARLY YEARS</h3>
							<span className="timeline-year">2019-2020</span>
							<p className="timeline-content">
								Following the innovation of the launch, artists began to explore NFTs as a new form of storytelling. In these early stages, we began to see the potential of what could be built.
							</p>

							<p className="timeline-content">
								Back in 2018, the number of people buying crypto-art could fit on a school bus. It's fair to say we were early to the party.              </p>

							<p className="timeline-content">
								Early adopting artists were minting work and struggling to find people who wanted to buy crypto-art. One early XCOPY edition took months to sell out, at the price of $5. It was the calm before the storm.</p>
						</div>
					</div>

					<div className="timeline-item">
						<div className="timeline-content-wrapper">
							<h3 className="timeline-title">THE BOOM</h3>
							<span className="timeline-year">2021</span>
							<p className="timeline-content">
								Early in February 2021 and NFTs skyrocketed to the moon and all of our lives changed forever. The platform scaled rapidly, the community grew exponentially, and we had to adapt quickly to keep up.
							</p>

							<p className="timeline-content">Those same pieces that were struggling to sell were being regarded as early relics of crypto-art history. NFTs were the talk of the town. Sales boomed.</p>

							<p className="timeline-content">That summer was a whirlwind for KnownOrigin. We had more eyes than ever on our platform.</p>
						</div>
						<div>
							<img src={img4} id="img1" alt="Boom Art" className="timeline-image" />
						</div>
					</div>

					<div className="timeline-item">
						<div>
							<img src={img5} id="img2" alt="Growth Art" className="timeline-image" />
						</div>
						<div className="timeline-content-wrapper">
							<h3 className="timeline-title">THE GROWTH</h3>
							<span className="timeline-year">2022</span>
							<p className="timeline-content">
								PINK NFT was acquired through eBay in 2022 and took the step into the next phase of growth and development in web3.
							</p>
							<p className="timeline-content">Features such as early access sales, embedded NFTs and creator contracts all enabled the KO community to keep experimenting and pushing the boundaries.</p>

							<p className="timeline-content">A new wave of emerging artists took the mantel from the OGs, as collectors continued to search for the next big thing to emerge from KnownOrigin.</p>
						</div>
					</div>

					<div className="timeline-item">
						<div className="timeline-content-wrapper">
							<h3 className="timeline-title">THE ENDING</h3>
							<span className="timeline-year">2024</span>
							<p className="timeline-content">
								By 2024, things were changing in crypto/web3. NFTs had moved to the future. After six years of innovation, the original PINK NFT marketplace comes to a close but lives on through the amazing artists and collectors who made it was.
							</p>

							<p className="timeline-content">We made the difficult decision to shut down KnownOrigin. This brings us to where we are now, closing off six incredible years of onchain digital art history.</p>

						</div>
						<div>
							<img src={img6} id="img1" alt="Ending Art" className="timeline-image2" />
						</div>
					</div>
				</section>

				<section className="faq">
					<div>
						<div className="faq-section">
							<h2 className="section-title"><span style={{ color: "#ff188b" }}>GENERAL</span> QUESTIONS</h2>
							<div className="faq-items">
								{faqItems1.map((item, index) => (
									<FAQItem key={index} question={item.question} answer={item.answer} />
								))}
							</div>
						</div>
					</div>
					<div>
						<div className="faq-section">
							<h2 className="section-title"><span style={{ color: "#ff188b" }}>PRESERVATION</span> EFFORTS</h2>
							<div className="faq-items">
								{faqItems2.map((item, index) => (
									<FAQItem key={index} question={item.question} answer={item.answer} />
								))}
							</div>
						</div>

						<div className="faq-section">
							<h2 className="section-title"><span style={{ color: "#ff188b" }}>CREATOR</span> CONTRACTS</h2>
							<div className="faq-items">
								{faqItems3.map((item, index) => (
									<FAQItem key={index} question={item.question} answer={item.answer} />
								))}
							</div>
						</div>

						<div className="faq-section">
							<h2 className="section-title"><span style={{ color: "#ff188b" }}>HISTORIC</span> NFTS</h2>
							<div className="faq-items">
								{faqItems4.map((item, index) => (
									<FAQItem key={index} question={item.question} answer={item.answer} />
								))}
							</div>
						</div>
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
			</main>

			<footer className="footer">
				<div className="logo2"><span style={{ color: "#ff188b" }}>PINK</span> NFT.</div>
			</footer>
		</div>
	)

}
export default Home;
