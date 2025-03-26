import { useState } from "react";
import '../App.css';
import roadmap from '../assets/roadmap.jpg'

export default function Roadmap() {
    const phases = [
        { phase: "Phase 01", year: "2003", description: "Developed addiction to playing Need for Speed", color: "yellow" },
        { phase: "Phase 02", year: "2014", description: "Creation of the NFT", color: "pink" },
        { phase: "Phase 03", year: "2020", description: "First introduction of NFT to the creator of The Pinks", color: "orange" },
        { phase: "Phase 04", year: "2021 - December", description: "First brainstorming of an NFT collection uses, possible way to gamble", color: "green" },
        { phase: "Phase 05", year: "2022 - March", description: "Engaged development team with the idea", color: "red" },
        { phase: "Phase 06", year: "2022 - April", description: "First graphics were worked", color: "blue" },
        { phase: "Phase 07", year: "2022 - May", description: "Pinks token was created and the beginning of The Pinks game development", color: "yellow" },
        { phase: "Phase 08", year: "2022 - August", description: "Completion of the smart contract for the AVAX blockchain", color: "purple" },
        { phase: "Phase 09", year: "2022 - November", description: "Completion of the minting website", color: "orange" },
        { phase: "Phase 10", year: "2023 - January", description: "Go live minting", color: "blue" },
        { phase: "Phase 11", year: "2023 - June", description: "Expected launch of The Pinks game", color: "red" },
        { phase: "Phase 12", year: "2023 - December", description: "Expected role of new NFT collection with new models", color: "purple" },
    ];
    return (
        <>
            <div className="roadmap">
            <p className="timeline-title2">OUR GOAL</p>
            
                <img className="rImg" src={roadmap}/>
                <div className="timeline">
                    {phases.map((item, index) => (
                        <div key={index} className="phase">
                           <div> <div className={`marker ${item.color}`}></div></div>
                            <div className="content">
                                <h3 style={{ color: item.color }}>{item.phase}</h3>
                                <p><span className="year">{item.year}</span> <br/> {item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
