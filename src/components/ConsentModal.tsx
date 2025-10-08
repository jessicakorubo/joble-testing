import React from 'react';
import tara from "../assets/demo_tara.png";
import jude from "../assets/demo_alex.png";
import "../styles/demo.css";



interface ConsentModalProps {
    selectedPerson: string;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ selectedPerson }   ) => {
    const image = selectedPerson === "tara" ? tara : jude;
    const name = selectedPerson === "tara" ? "Tara" : "Jude";
  return (
    <div className='consent-modal'>
        <div className="demo-pic">
            <img src={image} alt={name} />
            <h3>Consent</h3>
            <p>This demo is recorded for accuracy <br />
            We don't store your personal data.</p>
        </div>
        <div className="consent-buttons">
            <button className="type_button" id='modal_button'>Continue</button>
            <button className="type_button" id='white_button'>Cancel</button>
        </div>
    </div>
  )
}

export default ConsentModal