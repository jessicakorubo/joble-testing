import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import "../styles/demo.css";
// @ts-ignore
import PhoneInput from 'react-phone-input-2';

interface DemoModalProps {
  selectedPerson: string;
  onClose: () => void;
  onContinue: () => void; // 👈 parent controls next modal
}

const DemoModal: React.FC<DemoModalProps> = ({ selectedPerson, onClose, onContinue }) => {
  const [number, setNumber] = useState('');

  const handleContinue = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // // collect form data
    // const formData = new FormData(e.currentTarget);
    // const name = formData.get("name");
    // const email = formData.get("email");

    // const payload = {
    //   name,
    //   email,
    //   phone: number,
    // };

    // try {
    //   // send to backend
    //   const response = await fetch("https://your-backend-api.com/api/demo", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload),
    //   });

    //   if (response.ok) {
    //     console.log("Form submitted successfully ✅");
    //     onContinue(); // 👈 closes DemoModal & opens ConsentModal via parent
    //   } else {
    //     console.error("Submission failed ❌");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    onContinue(); // 👈 close this modal & open next one
  };

  return (
    <div className="demo-modal">
      <form onSubmit={handleContinue}>
        <input type="text" name="name" placeholder="Enter your name" required />

        <PhoneInput
          placeholder="Enter phone number"
          country={"nl"}
          value={number}
          onChange={setNumber}
          inputStyle={{
            width: "100%",
            padding: "15px",
            height: "65px",
            borderRadius: "25px",
            fontSize: "16px",
          }}
        />

        <input type="email" name="email" placeholder="Enter your email address" required />

        <button type="submit" className="type_button" id="modal_button">
          Continue
        </button>
      </form>
    </div>
  );
};

export default DemoModal;
