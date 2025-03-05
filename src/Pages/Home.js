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
import { polygon } from "wagmi/chains";

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
import car1 from '../assets/cars/1.png'
import car2 from '../assets/cars/2.png'
import car3 from '../assets/cars/3.png'
import car4 from '../assets/cars/4.png'
import car5 from '../assets/cars/5.png'
import car6 from '../assets/cars/6.png'
import car7 from '../assets/cars/7.png'
import car8 from '../assets/cars/8.png'
import car9 from '../assets/cars/9.png'
import car10 from '../assets/cars/10.png'
import car11 from '../assets/cars/11.png'
import car12 from '../assets/cars/12.png'
import car13 from '../assets/cars/13.png'
import car14 from '../assets/cars/14.png'
import car15 from '../assets/cars/15.png'
import car16 from '../assets/cars/16.png'
import car17 from '../assets/cars/17.png'
import car18 from '../assets/cars/18.png'
import car19 from '../assets/cars/19.png'
import car20 from '../assets/cars/20.png'
import left from '../assets/left-arrow.png'
import right from '../assets/right-arrow.png'
import link from '../assets/external-link.png'

var Scroll = require('react-scroll');

let signer;
var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

const ops = () => {
	window.open("https://opensea.io/collection/pink-nft");
}

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

let ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "OperatorNotAllowed",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "deleteDefaultRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "freeMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "mintBatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "resetTokenRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_contractURI",
				"type": "string"
			}
		],
		"name": "setContractURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint96",
				"name": "_feeNumerator",
				"type": "uint96"
			}
		],
		"name": "setDefaultRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_max_ids",
				"type": "uint256"
			}
		],
		"name": "setMax_ids",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_max_per_wallet",
				"type": "uint256"
			}
		],
		"name": "setMax_per_wallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "cost",
				"type": "uint256"
			}
		],
		"name": "setPublicSaleCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint96",
				"name": "_royaltyFeesInBips",
				"type": "uint96"
			}
		],
		"name": "setRoyaltyInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint96",
				"name": "_feeNumerator",
				"type": "uint96"
			}
		],
		"name": "setTokenRoyalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newuri",
				"type": "string"
			}
		],
		"name": "setURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggle_free_mint_status",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggle_public_mint_status",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "exists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "free_mint_status",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "freeMinted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "max_ids",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "max_per_wallet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "OPERATOR_FILTER_REGISTRY",
		"outputs": [
			{
				"internalType": "contract IOperatorFilterRegistry",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "public_mint_status",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "publicSaleCost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_salePrice",
				"type": "uint256"
			}
		],
		"name": "royaltyInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let address = "0xE024AB5F5158642D823313e39D6f55E305166b31";

const nftImages = [
	car1,
	car2,
	car3,
	car4,
	car5,
	car6,
	car7,
	car8,
	car9,
	car10,
	car11,
	car12,
	car13,
	car14,
	car15,
	car16,
	car17,
	car18,
	car19,
	car20
];

const nftImagesNames = [
	"Acura NSX",
	"Audi R8",
	"BMW i8",
	"Chevrolet Camaro",
	"Chevrolet Silverado",
	"Dodge Charger",
	"Dodge RAM 1500 Laramie Longhorn",
	"Ford Bronco",
	"Ford Mustang Roush",
	"Ford Raptor f150 2015",
	"Ford Raptor f150 2016",
	"Ford Raptor f150 2018",
	"Ford Raptor f150 2021",
	"GMC Sierra",
	"Honda Ridgeline",
	"Hummer EV",
	"Jeep Gladiator",
	"Mercedes AMGT GT",
	"Nissan Frontier",
	"Toyota Tundra TRD Pro"
];

const Home = () => {

	const { open } = useWeb3Modal();
	const { chain } = useNetwork();
	const { switchNetwork } = useSwitchNetwork();
	const [_connected, setConnected] = useState(false);
	const { disconnect } = useDisconnect();

	const [_totalSupply, settotalSupply] = useState(0)
	const [statusError, setstatusError] = useState(false)
	const [_insufficientFunds, setInsufficientFunds] = useState(false)
	const [statusLoading, setstatusLoading] = useState(false)
	const [success, setsuccess] = useState(false)
	const [_cost, set_cost] = useState("")
	const [_public_mint_status, set_public_mint_status] = useState("")
	const [_owner, set_owner] = useState("")
	const [myNFTWallet, setmyNFTWallet] = useState(0)
	const [_howMany, set_HowMany] = useState(1);
	const [count, setCount] = useState(1);
	const [_selectedNFTId, setSelectedNFTId] = useState(1);
	const [selectedNFT, setSelectedNFT] = useState(nftImages[0]);

	const handleSelectNFT = (_indexNumber, img) => {
		setSelectedNFT(img);
		console.log("_selectedNFTimg : " + _selectedNFTId);
		setSelectedNFTId(_indexNumber);
		console.log("_indexNumber : " + _indexNumber);
		fetchDataSupply();
	};

	const [startIndex, setStartIndex] = useState(0);
	const totalNFTs = nftImages.length;
	const itemsPerPage = 3;
	const itemsPerPageMob = 2;

	const handleNext = () => {
		setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % totalNFTs);
	};

	const handlePrev = () => {
		setStartIndex((prevIndex) =>
			(prevIndex - itemsPerPage + totalNFTs) % totalNFTs
		);
	};

	const handleNextMob = () => {
		setStartIndex((prevIndex) => (prevIndex + itemsPerPageMob) % totalNFTs);
	};

	const handlePrevMob = () => {
		setStartIndex((prevIndex) =>
			(prevIndex - itemsPerPageMob + totalNFTs) % totalNFTs
		);
	};


	const { address: walletAddress } = useAccount({
		async onConnect() {
			handleConnect();
		},
	});

	const transport = webSocket("wss://polygon-mainnet.infura.io/ws/v3/50597910853247b38793be4ec6b05dc8");

	const publicClient = createPublicClient({
		chain: polygon,
		transport,
	});

	async function handleConnect() {
		if (chain.id !== 137) {
			switchNetwork(137);
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

	var contract = {
		address: address,
		abi: ABI
	}

	useEffect(() => {
		if (statusError) {
			const timer = setTimeout(() => {
				setstatusError("");
			}, 6000);
			return () => clearTimeout(timer);
		}
	}, [statusError]);

	useEffect(() => {
		if (_insufficientFunds) {
			const timer = setTimeout(() => {
				setInsufficientFunds("");
			}, 6000);
			return () => clearTimeout(timer);
		}
	}, [_insufficientFunds]);

	useEffect(() => {
		if (success) {
			const timer = setTimeout(() => {
				setsuccess("");
			}, 6000);
			return () => clearTimeout(timer);
		}
	}, [success]);

	const { writeAsync } = useContractWrite({
		//...contract,
		functionName: 'mint',
		onError(error) {
			if (error.message.includes('balance')) {
				setstatusError(true)
				setstatusLoading(false)
			}
		}
	})

	const { refetch: getTotalSupply } = useContractRead({
		...contract,
		functionName: 'totalSupply', args: [_selectedNFTId],
	})

	const { refetch: getCost } = useContractRead({
		...contract,
		functionName: 'publicSaleCost', args: [0]
	})

	const { refetch: getBalance } = useContractRead({
		...contract,
		functionName: 'balanceOf',
		args: [walletAddress ? walletAddress : '0x', 0]
	})

	const { refetch: get_public_mint_status } = useContractRead({
		...contract,
		functionName: 'public_mint_status'
	})

	const { refetch: get_owner } = useContractRead({
		...contract,
		functionName: 'owner'
	})

	/*const { refetch: getCostGateway } = useContractRead({
		...gateway,
		functionName: 'getCost',
		args: ['2200']
	})*/

	async function fetchDataSupply() {
		var data = await getTotalSupply();

		settotalSupply(Number(data.data))
		console.log("totalSupplyFromUseffect : " + data.data)

	}

	useEffect(() => {

		async function fetchData() {
			var data = await getTotalSupply();

			settotalSupply(Number(data.data))
			console.log("totalSupplyFromUseffect : " + data.data)

		}
		async function fetchData2() {

			var data1 = await getBalance();
			setmyNFTWallet(Number(data1.data));
			console.log("myNFTWallet :" + data1.data);
		}

		async function fetchData3() {

			var data2 = await getCost();
			//set_cost(Number(data2.data) / 10 ** 4);
			set_cost(Number(data2.data));
			console.log("publicSaleCost :" + data2.data);

		}

		async function fetchData4() {

			var data3 = await get_public_mint_status();
			set_public_mint_status(data3.data);
			console.log("get_public_mint_status :" + data3.data);

			var data4 = await get_owner();
			set_owner(data4.data);
			console.log("set_owner :" + data4.data);

		}

		if (_connected) {
			fetchData();
			fetchData2();
			fetchData3();
			fetchData4();
		}

		// eslint-disable-next-line no-use-before-define
	}, [_connected, getBalance, getCost, getTotalSupply, get_public_mint_status, get_owner /*getCostGateway*/]);


	async function onPlus() {

		set_HowMany(Number(_howMany) + 1);
		console.log("onPlus" + _howMany);

	}

	async function onMinus() {
		if (Number(_howMany) !== 1) {
			set_HowMany(Number(_howMany) - 1);
		}
	}

	async function mint(contract) {
		try {

			setstatusLoading(true)
			setstatusError(false)

			var mintCost;
			mintCost = _cost;
			mintCost = (mintCost * _howMany).toString();
			console.log("_cost :" + _cost);
			console.log("mintCost :" + mintCost);
			console.log("_selectedNFTId Mint :" + _selectedNFTId);

			var res = await writeAsync({
				...contract,
				args: [_selectedNFTId, _howMany],
				//value: ((mintcost).toString()), ////
				value: mintCost,
				gasLimit: '685000'
			})

			var result = await publicClient.waitForTransactionReceipt(res)
			if (result.status === 'success') {

				setstatusLoading(false)
				setstatusError(false)
				setsuccess(true)
				await new Promise(resolve => setTimeout(resolve, 4000));
				window.location.reload(true);
			}
			else {
				setsuccess(false)
				setstatusError(true)
				setstatusLoading(false)
			}
		} catch (e) {
			console.error("Transaction failed:", e);
			if (e.message.includes("Transaction with hash")) {

				setsuccess(true);

				await new Promise(resolve => setTimeout(resolve, 6000));
				window.location.reload(true);
			}
			if (e.message.includes("err: insufficient funds for gas")) {
				//setErrorMsg1("Insufficient funds");
				setInsufficientFunds(true);
				setstatusError(false);
				setstatusLoading(false);

			} else if (e.message.includes("User rejected the request")) {
				//setErrorMsg1("User Rejected");
				setstatusError(false);
				setstatusLoading(false);
			} else {
				//setErrorMsg1("Sorry, something went wrong");
				setstatusError(true);
				setstatusLoading(false);
			}

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
							<div className='carousel'>
								<button className="arrow left-arrow"><img onClick={handlePrev} src={left} /></button>
								<div className="nft-slider2">
									{nftImages
										.slice(startIndex, startIndex + itemsPerPage)
										.concat(nftImages.slice(0, Math.max(0, startIndex + itemsPerPage - totalNFTs)))
										.map((img) => {
											const originalIndex = nftImages.indexOf(img) + 1; // Get correct ID (1-20)
											return (
												<img
													key={originalIndex} // Use correct unique ID
													src={img}
													alt={`NFT ${originalIndex}`}
													className={`nft-thumb2 ${selectedNFT === img ? "active2" : ""}`}
													onClick={() => handleSelectNFT(originalIndex, img)} // Pass correct ID and image
												/>
											);
										})}

								</div>

								<div className="nft-slider2-mob">
									{nftImages
										.slice(startIndex, startIndex + itemsPerPageMob)
										.concat(nftImages.slice(0, Math.max(0, startIndex + itemsPerPageMob - totalNFTs)))
										.map((img) => {
											const originalIndex = nftImages.indexOf(img) + 1; // Get correct ID (1-20)
											return (
												<img
													key={originalIndex} // Use correct unique ID
													src={img}
													alt={`NFT ${originalIndex}`}
													className={`nft-thumb2 ${selectedNFT === img ? "active2" : ""}`}
													onClick={() => handleSelectNFT(originalIndex, img)} // Pass correct ID and image
												/>
											);
										})}

								</div>
								<button className="arrow right-arrow"><img onClick={handleNext} src={right} /></button>
							</div>
							<div className="mint-box2">
								{selectedNFT && (
									<h2 className="nft-name">
										{nftImagesNames[nftImages.indexOf(selectedNFT)]}
									</h2>
								)}
								<img src={selectedNFT} alt="Selected NFT" className="selected-nft2" />

								<div className="Minted">Minted</div><p className="total-supply">{_totalSupply} / 10,000</p>
								<p className="price">Price per NFT: <span className='prices'>0.0001 ETH</span></p>

								<div className="counter2">
									<button onClick={onMinus} className="btn2">−</button>
									<span className="count2">{_howMany}</span>
									<button onClick={onPlus} className="btn2">+</button>
								</div>

								<p className="total-price2">
									Total: <span className='prices'>{((_howMany * _cost) / 10 ** 18)} ETH</span>
								</p>

								<button
									className={`mint-btn2 ${statusLoading ? "loading2" : ""}`}
									onClick={() => { mint(contract) }}
									disabled={statusLoading}
								>
									{statusLoading ? "Minting..." : "MINT"}
								</button>

								<div className='os' onClick={ops}>OPENSEA <img src={link}/></div>

							</div>

						</div>

					</>
					: null}
				{_connected ?
					<>
						<MintSlider />
						<div>

							{_insufficientFunds ? (
								<div id="errorMessage" class="notification error">
									Insufficient funds!
									<div class="progress-barE"></div>
								</div>
							)
								: null}

							{statusError ? (
								<div id="errorMessage" class="notification error">
									Sorry, something went wrong
									<div class="progress-barE"></div>
								</div>)
								: null}

							{statusLoading ? (
								<div id="loadingText" class="notification loading">
									Minting
								</div>

							)
								: null}

							{success ? (
								<div id="success-message" class="notification success">
									NFT Minted Successfully!
									<div class="progress-barS"></div>
								</div>
							)
								: null}

						</div>
					</>
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
