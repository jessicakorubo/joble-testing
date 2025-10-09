import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/precall.css";
import tara from "../assets/demo_tara.png";
import jude from "../assets/demo_alex.png";
import MainLayout from '../layout/MainLayout';
import loadingBox from '../assets/loading_box.gif';

// To parse query parameters
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}


const PreCall = () => {
    const query = useQuery();
    const person = query.get('person'); // "tara" or "jude"
    const formattedPerson = person
        ? person.charAt(0).toUpperCase() + person.slice(1).toLowerCase()
        : '';
    return (
        <MainLayout>
            <div className='precall_page'>
                <div className='precall_container'>
                    <div className="exit">

                        <Link to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.9763 4.94141L2.91797 9.99974L7.9763 15.0581" fill="#F2F2F2" />
                            <path d="M7.9763 4.94141L2.91797 9.99974L7.9763 15.0581" stroke="#807E7C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.0836 10H3.05859" stroke="#807E7C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> Exit Live Demo</Link>
                    </div>
                    <div className="box-shad">
                        <div className="person">
                            <img src={person === "tara" ? tara : jude} alt="" />
                            <p>Connecting to {formattedPerson}...</p>

                        </div>
                        <div className="loading">
                            <img src={loadingBox} alt="loading" />
                        </div>
                    </div>
                    <div className="list">
                        <ul>
                            <li>{formattedPerson} will help you schedule meetings, Log tasks, and Update your CRM.</li>
                            <li>⁠This 2-minute demo shows how Joble’s AI saves you 10+ hours/week.</li>
                        </ul>
                    </div>
                    <div className="privacy">
                        <p>By using our services, you agree to Joble's <br />
                            <Link to="/terms">Terms of Use</Link> and <Link to="/privacy">Privacy Policy.</Link></p>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default PreCall;