import React from 'react';
import tara from "../assets/demo_tara.png";
import jude from "../assets/demo_alex.png";
import "../styles/demo.css";
import { useNavigate } from 'react-router-dom';



interface ConsentModalProps {
    selectedPerson: string;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ selectedPerson }   ) => {
    const navigate = useNavigate();

    const image = selectedPerson === "tara" ? tara : jude;
    const name = selectedPerson === "tara" ? "Tara" : "Jude";

    const handleContinue = () => {
        // Logic to proceed to the next step, e.g., starting the demo call
        console.log("User consented. Proceeding to demo call...");
        navigate(`/Precall?person=${selectedPerson}`);
    }
  return (
    <div className='consent-modal'>
        <div className="demo-pic">
            <img src={image} alt={name} />
            <h3>Consent</h3>
            <p>This demo is recorded for accuracy <br />
            We don't store your personal data.</p>
        </div>
        <div className="consent-buttons">
            <button className="type_button" id='modal_button' onClick={handleContinue}>Continue</button>
            <button className="type_button" id='white_button'>Cancel</button>
        </div>
    </div>
  )
}

export default ConsentModal