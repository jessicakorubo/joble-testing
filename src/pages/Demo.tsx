import React from 'react';
import MainLayout from '../layout/MainLayout';
import "../styles/demo.css";
import tara from "../assets/demo_tara.png";
import jude from "../assets/demo_alex.png"
import arrow from "../assets/arrow-right.svg";
import ResponsiveSVG from '../components/ResponsiveSVG';
import DemoModal from '../components/demoModal';
import Modal from '../components/Modal';
import ConsentModal from '../components/ConsentModal';




const Demo = () => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedPerson, setSelectedPerson] = React.useState<"tara" | "jude" | null>(null); // 👈 store Tara or Jude
    const [isConsentOpen, setIsConsentOpen] = React.useState(false);


    const openModal = (person: "tara" | "jude") => {
        setSelectedPerson(person);
        setIsModalOpen(true);
    };

    return (
        <div>
            <MainLayout>
                <div className='demo_hero'>
                    <h1> See it now. <span className="demo_highlight">Live AI</span> <br />
                        Under a minute</h1>
                    <p>Call in your language. Watch the transcript. See the Call log.</p>
                    <div className="demo-calls">
                        <div className="tara">
                            <img src={tara} alt="Tara Demo" />
                            <p>Tara</p>
                            <button className="type_button" onClick={() => openModal("tara")}>
                                Open In Browser{" "}
                                <span className="arrow">
                                    <img src={arrow} alt="" />
                                </span>
                            </button>
                        </div>
                        <div className="alex">
                            <img src={jude} alt="Alex Demo" />
                            <p>Jude</p>
                            <button className="type_button" onClick={() => openModal("jude")}>
                               Open In Browser{" "}
                                <span className="arrow">
                                    <img src={arrow} alt="" />
                                </span>
                            </button>

                        </div>

                    </div>
                    <a href="" className="type_button" id='white_button'>Get a local number <span className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_2669_197)">
                                <path d="M16.9699 10.5893C17.1261 10.433 17.2139 10.2211 17.2139 10.0001C17.2139 9.77915 17.1261 9.56723 16.9699 9.41096L12.2557 4.69679C12.1788 4.6172 12.0869 4.55371 11.9852 4.51004C11.8835 4.46636 11.7742 4.44338 11.6635 4.44241C11.5529 4.44145 11.4432 4.46254 11.3408 4.50444C11.2383 4.54634 11.1453 4.60822 11.067 4.68646C10.9888 4.7647 10.9269 4.85775 10.885 4.96016C10.8431 5.06257 10.822 5.17231 10.823 5.28296C10.824 5.39361 10.847 5.50296 10.8906 5.60463C10.9343 5.7063 10.9978 5.79825 11.0774 5.87512L14.369 9.16679L3.33321 9.16679C3.1122 9.16679 2.90024 9.25459 2.74396 9.41087C2.58768 9.56715 2.49988 9.77911 2.49988 10.0001C2.49988 10.2211 2.58768 10.4331 2.74396 10.5894C2.90024 10.7457 3.1122 10.8335 3.33321 10.8335L14.369 10.8335L11.0774 14.1251C10.9256 14.2823 10.8416 14.4928 10.8435 14.7113C10.8454 14.9298 10.933 15.1388 11.0875 15.2933C11.242 15.4478 11.451 15.5355 11.6695 15.5374C11.888 15.5393 12.0985 15.4553 12.2557 15.3035L16.9699 10.5893Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2669_197">
                                    <rect width="20" height="20" fill="white" transform="matrix(0 1 -1 0 20 0)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span></a>
                    <div className="tc">
                        <p>By using our services, you agree to Joble's  <br />
                            Terms of Use and Privacy Policy</p>
                    </div>

                </div>
                <div className="curve">
                    <ResponsiveSVG>
                        <h1>Want a more personalized experience?</h1>
                        <p>Never miss a call. Book more meetings. Cut no shows.</p>
                        <button className="type_button" id='white_button'>
                            Start now for free
                        </button>
                    </ResponsiveSVG>
                    {isModalOpen && selectedPerson && (
                        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                            <DemoModal selectedPerson={selectedPerson}
                                onClose={() => setIsModalOpen(false)} // 👈 passes the close function
                                onContinue={() => {
                                    setIsModalOpen(false); // close demo modal
                                    // 👇 open next modal (ConsentModal)
                                    setIsConsentOpen(true);
                                }}
                            />
                        </Modal>)}

                    {/* 👇 CONSENT MODAL (added this block) */}
                    {isConsentOpen && selectedPerson && (
                        <Modal isOpen={isConsentOpen} onClose={() => setIsConsentOpen(false)}>
                            <ConsentModal selectedPerson={selectedPerson} />
                        </Modal>
                    )}
                </div>
            </MainLayout>
        </div>
    )
}

export default Demo