import '../App.css';
import wheel from '../assets/wheel.jpeg'
import door from '../assets/door.jpeg'
import wheel2 from '../assets/w2.jpeg'
import sidem from '../assets/sidem.jpeg'
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


const ops = () => {
    window.open("https://opensea.io/collection/pink-nft");
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


export default function MintSlider() {

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
        <>
            <h2 className="section-title" id="title3">MINT <span style={{ color: "#ff188b" }}>ACCESSORIES</span></h2>

            <div className="mint-wrapper">
                <div className="mint-container2" id="blurEffect">
                    <div className='carousel'>
                        <button className="arrow left-arrow"><img onClick={handlePrev} src={left} /></button>
                        <div className="nft-slider2">
                            {nftImages.slice(startIndex, startIndex + itemsPerPage)
                                .concat(nftImages.slice(0, Math.max(0, startIndex + itemsPerPage - totalNFTs)))
                                .map((img) => {
                                    const originalIndex = nftImages.indexOf(img) + 1;
                                    return (
                                        <img
                                            key={originalIndex}
                                            src={img}
                                            alt={`NFT ${originalIndex}`}
                                            className={`nft-thumb2 ${selectedNFT === img ? "active2" : ""}`}
                                            onClick={() => handleSelectNFT(originalIndex, img)}
                                        />
                                    );
                                })}
                        </div>

                        <div className="nft-slider2-mob">
                            {nftImages.slice(startIndex, startIndex + itemsPerPageMob)
                                .concat(nftImages.slice(0, Math.max(0, startIndex + itemsPerPageMob - totalNFTs)))
                                .map((img) => {
                                    const originalIndex = nftImages.indexOf(img) + 1;
                                    return (
                                        <img
                                            key={originalIndex}
                                            src={img}
                                            alt={`NFT ${originalIndex}`}
                                            className={`nft-thumb2 ${selectedNFT === img ? "active2" : ""}`}
                                            onClick={() => handleSelectNFT(originalIndex, img)}
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

                        <div className="Minted">Minted</div>
                        <p className="total-supply">{Number(_totalSupply)} / 10,000</p>
                        <p className="price">Price per NFT: <span>0.0001 ETH</span></p>

                        <div className="counter2">
                            <button onClick={onMinus} className="btn2">−</button>
                            <span className="count2">{_howMany}</span>
                            <button onClick={onPlus} className="btn2">+</button>
                        </div>

                        <p className="total-price2">
                            Total: <span>{((Number(_howMany) * Number(_cost)) / 10 ** 18)} ETH</span>
                        </p>

                        <button className={`mint-btn2 ${statusLoading ? "loading2" : ""}`}
                            onClick={() => { mint(contract) }}
                            disabled={statusLoading}>
                            {statusLoading ? "Minting..." : "MINT"}
                        </button>

                        <div className='os' onClick={ops}>OPENSEA <img src={link} /></div>
                    </div>
                </div>

                {/* Overlay with Coming Soon */}
                <div className="coming-soon-overlay">
                    <h1 className='txtcs'>Coming Soon!</h1>
                </div>
            </div>


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
    );
}
