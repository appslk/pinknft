import { useState } from "react";
import '../App.css';
import wheel from '../assets/wheel.jpeg'
import door from '../assets/door.jpeg'
import wheel2 from '../assets/w2.jpeg'
import sidem from '../assets/sidem.jpeg'

const nftImages = [
    wheel,
    door,
    wheel2,
    sidem,
];

export default function MintSlider() {
    const [selectedNFT, setSelectedNFT] = useState(nftImages[0]);
    const [count, setCount] = useState(1);
    const totalSupply = 5000;
    const pricePerNFT = 0.05;

    const handleSelectNFT = (img) => setSelectedNFT(img);
    const handleMint = () => {
        alert(`Minting NFT: ${selectedNFT} x ${count}`);
    };


    return (
        <>
            <h2 className="section-title" id="title3">MINT <span style={{ color: "#ff188b" }}>ACCESSORIES</span></h2>

            <div className="mint-container2">

                <div className="nft-slider2">
                    {nftImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`NFT ${index + 1}`}
                            className={`nft-thumb2 ${selectedNFT === img ? "active2" : ""}`}
                            onClick={() => handleSelectNFT(img)}
                        />
                    ))}
                </div>

                <div className="mint-box2">
                    <img src={selectedNFT} alt="Selected NFT" className="selected-nft2" />

                    <div className="Minted">Minted</div><p className="total-supply">5 / 1000</p>
                    <p className="price">Price per NFT: <span className="mintSpans">{pricePerNFT} ETH</span></p>

                    <div className="counter2">
                        <button onClick={() => setCount(Math.max(count - 1, 1))} className="btn2">−</button>
                        <span className="count2">{count}</span>
                        <button onClick={() => setCount(Math.min(count + 1, 10))} className="btn2">+</button>
                    </div>

                    <p className="total-price2">Total: <span className="mintSpans">{(count * pricePerNFT).toFixed(2)} ETH</span></p>

                    <button className="mint-btn2" onClick={handleMint}>MINT</button>
                </div>
            </div>
        </>
    );
}
