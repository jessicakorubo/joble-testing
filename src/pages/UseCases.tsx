import React, { useRef, useState } from 'react'
import MainLayout from '../layout/MainLayout';
import inboundImg from '../assets/inboundAI.png';
import outboundImg from '../assets/outboundImg.png';
import storefrontImg from '../assets/storefront.png';
import '../styles/use-cases.css';
import heroimg from '../assets/use-cases-heroImg.png';
import arrow_right from '../assets/background-arrow.png';
import joble_icon from '../assets/joble_icon.png';
import arrow from '../assets/arrow-right.svg';
// import arrowIcon from '../assets/arrow-right-icon.svg';
import shieldIcon from '../assets/shieldIcon.svg';
import uploadIcon from '../assets/uploadIcon.svg';
import userIcon from '../assets/userIcon.svg';
import databaseIcon from '../assets/databaseIcon.svg';
import curveBg from '../assets/landing_frame.png';
import checkIcon from '../assets/checkIcon.png';
import group from '../assets/grouping.svg';
import iconCounter1 from "../assets/iconCounter1.png";
import iconCounter2 from "../assets/iconCounter2.png";
import iconCounter3 from "../assets/iconCounter3.png";
import ResponsiveSVG from '../components/ResponsiveSVG';

const UseCases = () => {

    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    const industries = [
        {
            title: "Healthcare & Dental",
            problem: "No-shows, phone tag, admin load.",
            joble: "Reminders, confirmations, intake, waitlist fills.",
            result: "20–40% fewer no-shows, cleaner calendars, happier staff.",
        },
        {
            title: "Local Services & Repairs",
            problem: "Missed calls = lost jobs.",
            joble: "Answers fast, books jobs, gathers details.",
            result: "2–3x more booked work; fewer back-and-forths.",
        },
        {
            title: "Retail & Hospitality",
            problem: "After-hours bookings missed.",
            joble: "Reservations, hours, directions.",
            result: "Higher occupancy, better CRM re-engagement.",
        },
        {
            title: "Retail & Hospitality",
            problem: "After-hours bookings missed.",
            joble: "Reservations, hours, directions.",
            result: "Higher occupancy, better CRM re-engagement.",
        },
    ]


    const [activeTab, setActiveTab] = useState("inbound");

    const tabData = {
        inbound: {
            title: "Inbound AI Receptionist",
            description: "Never miss a call. Turn first contact into a booking.",
            image: inboundImg,
            whatItDoes: [
                "Greets callers. Identifies intent.",
                "Answers basics.",
                "Books or reschedules instantly.",
                "Warm-transfers to a human when needed.",
                "Logs notes, recording, and transcript.",
            ],
            whoItsFor: [
                "Healthcare & Dental – new patients, results, follow-up.",
                "Local Services & Repairs – quotes, slot requests, emergencies.",
                "Professional Services – discovery calls, intake questions.",
                "Retail & Hospitality – reservations, hours, directions.",
            ],
            outcomes: [
                "Pickup rate: ~100% (no missed calls).",
                "Bookings: 2–3x more meetings from inbound.",
                "Speed to answer: under 2 rings typical.",
                "CSAT: short, helpful calls; optional survey at end.",
            ],
            sampleFlow: `"Hi, this is [Company]. I can book, reschedule, or answer a quick question.
Would Wednesday 14:30 or Thursday 09:00 suit?
Great—I’ve booked you and sent the invite."`,
            setup: [
                "Forward your number or add a new one.",
                "Link Google/Microsoft calendars.",
                "Add FAQs. Choose languages (EN/NL).",
                "Go live.",
            ],
        },
        outbound: {
            title: "Outbound AI Caller",
            description: "Calls the lists you don’t have time to call.",
            image: outboundImg,
            whatItDoes: [
                "Follow-ups, reminders, and confirmations.",
                "Revenue outreach: re-engage leads, promote offers.",
                "Surveys and customer feedback.",
            ],
            whoItsFor: [
                "Sales teams needing consistent outreach.",
                "Marketing follow-ups.",
                "Appointment confirmations.",
            ],
            outcomes: [
                "Reduced no-shows.",
                "Increased pipeline efficiency.",
                "Automated post-call insights.",
            ],
            sampleFlow: `"Hi, this is [Company]. Just confirming your appointment for tomorrow at 3 PM.
Would you like to reschedule or keep it?"`,
            setup: [
                "Upload call list.",
                "Set scripts and goals.",
                "Track results in dashboard.",
            ],
        },
        storefront: {
            title: "Phone Storefront for Services",
            description: "Let customers book or order by phone.",
            image: storefrontImg,
            whatItDoes: [
                "Voice-based service or product selection.",
                "Guided call flow to reduce friction.",
                "Perfect for clinics, salons, local services.",
            ],
            whoItsFor: [
                "Small businesses and professionals.",
                "Clinics, salons, repairs, restaurants.",
            ],
            outcomes: [
                "Higher conversion rates.",
                "Fewer drop-offs compared to web.",
                "Simplified booking and ordering.",
            ],
            sampleFlow: `"Welcome to [Company]. Would you like to schedule a service or make an order?"`,
            setup: [
                "Add your services or products.",
                "Define call prompts and responses.",
                "Activate your AI storefront number.",
            ],
        },
    };

    const data = tabData[activeTab as keyof typeof tabData];

    return (
        <div>
            <MainLayout>
                <div className="use-cases-page">
                    <div className="hero-section-use-cases">
                        <div className="outbound-line bound-cases">
                            <div className="outbound-section">
                                <div className="outbound-design">
                                    <div className="bound-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <g clip-path="url(#clip0_2095_6598)">
                                                <mask id="mask0_2095_6598" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
                                                    <path d="M6 11C6.65673 11.0008 7.30715 10.8719 7.91388 10.6205C8.52062 10.3692 9.07171 10.0005 9.5355 9.5355C10.0005 9.07171 10.3692 8.52062 10.6205 7.91388C10.8719 7.30715 11.0008 6.65673 11 6C11.0008 5.34328 10.8719 4.69286 10.6205 4.08613C10.3692 3.47939 10.0005 2.9283 9.5355 2.4645C9.07171 1.99954 8.52062 1.63081 7.91388 1.37948C7.30715 1.12816 6.65673 0.999194 6 1C5.34328 0.999194 4.69286 1.12816 4.08613 1.37948C3.47939 1.63081 2.9283 1.99954 2.4645 2.4645C1.99954 2.9283 1.63081 3.47939 1.37948 4.08613C1.12816 4.69286 0.999194 5.34328 1 6C0.999194 6.65673 1.12816 7.30715 1.37948 7.91388C1.63081 8.52062 1.99954 9.07171 2.4645 9.5355C2.9283 10.0005 3.47939 10.3692 4.08613 10.6205C4.69286 10.8719 5.34328 11.0008 6 11Z" fill="white" stroke="white" stroke-linejoin="round" />
                                                    <path d="M4 6L5.5 7.5L8.5 4.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                </mask>
                                                <g mask="url(#mask0_2095_6598)">
                                                    <path d="M0 0H12V12H0V0Z" fill="#07C0EA" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2095_6598">
                                                    <rect width="12" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="bound-text">Inbound</div>
                                </div>
                                <div className="outbound-design">
                                    <div className="bound-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <g clip-path="url(#clip0_2095_6598)">
                                                <mask id="mask0_2095_6598" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
                                                    <path d="M6 11C6.65673 11.0008 7.30715 10.8719 7.91388 10.6205C8.52062 10.3692 9.07171 10.0005 9.5355 9.5355C10.0005 9.07171 10.3692 8.52062 10.6205 7.91388C10.8719 7.30715 11.0008 6.65673 11 6C11.0008 5.34328 10.8719 4.69286 10.6205 4.08613C10.3692 3.47939 10.0005 2.9283 9.5355 2.4645C9.07171 1.99954 8.52062 1.63081 7.91388 1.37948C7.30715 1.12816 6.65673 0.999194 6 1C5.34328 0.999194 4.69286 1.12816 4.08613 1.37948C3.47939 1.63081 2.9283 1.99954 2.4645 2.4645C1.99954 2.9283 1.63081 3.47939 1.37948 4.08613C1.12816 4.69286 0.999194 5.34328 1 6C0.999194 6.65673 1.12816 7.30715 1.37948 7.91388C1.63081 8.52062 1.99954 9.07171 2.4645 9.5355C2.9283 10.0005 3.47939 10.3692 4.08613 10.6205C4.69286 10.8719 5.34328 11.0008 6 11Z" fill="white" stroke="white" stroke-linejoin="round" />
                                                    <path d="M4 6L5.5 7.5L8.5 4.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                </mask>
                                                <g mask="url(#mask0_2095_6598)">
                                                    <path d="M0 0H12V12H0V0Z" fill="#07C0EA" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2095_6598">
                                                    <rect width="12" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="bound-text">
                                        Outbound
                                    </div>
                                </div>
                                <div className="outbound-design">
                                    <div className="bound-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <g clip-path="url(#clip0_2095_6598)">
                                                <mask id="mask0_2095_6598" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
                                                    <path d="M6 11C6.65673 11.0008 7.30715 10.8719 7.91388 10.6205C8.52062 10.3692 9.07171 10.0005 9.5355 9.5355C10.0005 9.07171 10.3692 8.52062 10.6205 7.91388C10.8719 7.30715 11.0008 6.65673 11 6C11.0008 5.34328 10.8719 4.69286 10.6205 4.08613C10.3692 3.47939 10.0005 2.9283 9.5355 2.4645C9.07171 1.99954 8.52062 1.63081 7.91388 1.37948C7.30715 1.12816 6.65673 0.999194 6 1C5.34328 0.999194 4.69286 1.12816 4.08613 1.37948C3.47939 1.63081 2.9283 1.99954 2.4645 2.4645C1.99954 2.9283 1.63081 3.47939 1.37948 4.08613C1.12816 4.69286 0.999194 5.34328 1 6C0.999194 6.65673 1.12816 7.30715 1.37948 7.91388C1.63081 8.52062 1.99954 9.07171 2.4645 9.5355C2.9283 10.0005 3.47939 10.3692 4.08613 10.6205C4.69286 10.8719 5.34328 11.0008 6 11Z" fill="white" stroke="white" stroke-linejoin="round" />
                                                    <path d="M4 6L5.5 7.5L8.5 4.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                </mask>
                                                <g mask="url(#mask0_2095_6598)">
                                                    <path d="M0 0H12V12H0V0Z" fill="#07C0EA" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2095_6598">
                                                    <rect width="12" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="bound-text">Phone storefront</div>
                                </div>
                                <div className="outbound-design">
                                    <div className="bound-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <g clip-path="url(#clip0_2095_6598)">
                                                <mask id="mask0_2095_6598" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
                                                    <path d="M6 11C6.65673 11.0008 7.30715 10.8719 7.91388 10.6205C8.52062 10.3692 9.07171 10.0005 9.5355 9.5355C10.0005 9.07171 10.3692 8.52062 10.6205 7.91388C10.8719 7.30715 11.0008 6.65673 11 6C11.0008 5.34328 10.8719 4.69286 10.6205 4.08613C10.3692 3.47939 10.0005 2.9283 9.5355 2.4645C9.07171 1.99954 8.52062 1.63081 7.91388 1.37948C7.30715 1.12816 6.65673 0.999194 6 1C5.34328 0.999194 4.69286 1.12816 4.08613 1.37948C3.47939 1.63081 2.9283 1.99954 2.4645 2.4645C1.99954 2.9283 1.63081 3.47939 1.37948 4.08613C1.12816 4.69286 0.999194 5.34328 1 6C0.999194 6.65673 1.12816 7.30715 1.37948 7.91388C1.63081 8.52062 1.99954 9.07171 2.4645 9.5355C2.9283 10.0005 3.47939 10.3692 4.08613 10.6205C4.69286 10.8719 5.34328 11.0008 6 11Z" fill="white" stroke="white" stroke-linejoin="round" />
                                                    <path d="M4 6L5.5 7.5L8.5 4.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                </mask>
                                                <g mask="url(#mask0_2095_6598)">
                                                    <path d="M0 0H12V12H0V0Z" fill="#07C0EA" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2095_6598">
                                                    <rect width="12" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="bound-text">GDPR First</div>
                                </div>
                                <div className="outbound-design">
                                    <div className="bound-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <g clip-path="url(#clip0_2095_6598)">
                                                <mask id="mask0_2095_6598" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
                                                    <path d="M6 11C6.65673 11.0008 7.30715 10.8719 7.91388 10.6205C8.52062 10.3692 9.07171 10.0005 9.5355 9.5355C10.0005 9.07171 10.3692 8.52062 10.6205 7.91388C10.8719 7.30715 11.0008 6.65673 11 6C11.0008 5.34328 10.8719 4.69286 10.6205 4.08613C10.3692 3.47939 10.0005 2.9283 9.5355 2.4645C9.07171 1.99954 8.52062 1.63081 7.91388 1.37948C7.30715 1.12816 6.65673 0.999194 6 1C5.34328 0.999194 4.69286 1.12816 4.08613 1.37948C3.47939 1.63081 2.9283 1.99954 2.4645 2.4645C1.99954 2.9283 1.63081 3.47939 1.37948 4.08613C1.12816 4.69286 0.999194 5.34328 1 6C0.999194 6.65673 1.12816 7.30715 1.37948 7.91388C1.63081 8.52062 1.99954 9.07171 2.4645 9.5355C2.9283 10.0005 3.47939 10.3692 4.08613 10.6205C4.69286 10.8719 5.34328 11.0008 6 11Z" fill="white" stroke="white" stroke-linejoin="round" />
                                                    <path d="M4 6L5.5 7.5L8.5 4.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                                </mask>
                                                <g mask="url(#mask0_2095_6598)">
                                                    <path d="M0 0H12V12H0V0Z" fill="#07C0EA" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2095_6598">
                                                    <rect width="12" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="bound-text">EU Ready</div>
                                </div>
                            </div>
                        </div>
                        <h1 className='cases-title'>The AI phone Agent That Answers, Books, Reminds, and Sells </h1>
                        <img className='cases-heroimg' src={heroimg} alt="" />
                    </div>
                    <div className="badge-con">
                        <div className="badge glance-badge">
                            At a glance
                        </div>
                    </div>
                </div>
                <div className="teams">
                    <h1 className='teams-title'>Why teams deploy <span className='joble-highlight'>Joble</span></h1>
                    <div className="team-box-container">
                        <div className="team-box">
                            <div className="number-con">
                                <div className="number">
                                    01
                                </div>
                            </div>
                            <div className="team-content">
                                <h3>More revenue</h3>
                                <p>Answer every call; 3× more meetings. </p>
                            </div>
                        </div>
                        <div className="team-box">
                            <div className="number-con">
                                <div className="number">
                                    01
                                </div>
                            </div>
                            <div className="team-content">
                                <h3>Fewer no-shows</h3>
                                <p>Reminders & reschedules; 20–40% drop.</p>
                            </div>
                        </div>
                        <div className="team-box">
                            <div className="number-con">
                                <div className="number">
                                    01
                                </div>
                            </div>

                            <div className="team-content">
                                <h3>Less busywork</h3>
                                <p>Follow-ups done for you. </p>
                            </div>
                        </div>
                        <div className="team-box">
                            <div className="number-con">
                                <div className="number">
                                    01
                                </div>
                            </div>
                            <div className="team-content">
                                <h3>One place for truth</h3>
                                <p>Transcripts, outcomes, and tasks in one timeline. </p>
                            </div>
                        </div>
                        <div className="team-box">
                            <div className="number-con">
                                <div className="number">
                                    01
                                </div>
                            </div>
                            <div className="team-content">
                                <h3>Everyone included</h3>
                                <p>Voice works when apps don’t. </p>
                            </div>
                        </div>
                        <div className="hero-buttons">
                            <button className="type_button">
                                Try the live web demo{" "}
                                <span className="arrow">
                                    <img src={arrow} alt="" />
                                </span>
                            </button>
                            <button className="white_bg_button">
                                Book a 20 mins consult{" "}
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
                            </button>
                        </div>
                    </div>
                </div>

                <div className="solutions-container">
                    <div className="joble-icon-container">
                        <img src={joble_icon} alt="" />
                    </div>
                    <div className="solutions-tabs">
                        <button
                            className={activeTab === "inbound" ? "active" : ""}
                            onClick={() => setActiveTab("inbound")}
                        >
                            Inbound AI Receptionist
                        </button>
                        <button
                            className={activeTab === "outbound" ? "active" : ""}
                            onClick={() => setActiveTab("outbound")}
                        >
                            Outbound AI Caller
                        </button>
                        <button
                            className={activeTab === "storefront" ? "active" : ""}
                            onClick={() => setActiveTab("storefront")}
                        >
                            Phone Storefront for Services
                        </button>
                    </div>


                    <div className="solutions-content">
                        <div className="first-box-con">
                            <div className="box" id='box-tab'>
                                <img src={data.image} alt={data.title} />
                                <div className="box-content">
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                    <div className="demo-button-container">
                                        <button className="demo-btn">Try the live demo <img src={arrow_right} alt="" /> </button>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <h4>What it Does</h4>
                                <ul>{data.whatItDoes.map((item, i) => <li key={i}>{item}</li>)}</ul>
                            </div>

                            <div className="box">
                                <h4>Who it's for</h4>
                                <ul>{data.whoItsFor.map((item, i) => <li key={i}>{item}</li>)}</ul>
                            </div>

                        </div>

                        <div className="second-box-con">
                            <div className="box">
                                <h4>Measurable outcomes</h4>
                                <ul>{data.outcomes.map((item, i) => <li key={i}>{item}</li>)}</ul>
                            </div>

                            <div className="box">
                                <h4>Sample flow</h4>
                                <p>{data.sampleFlow}</p>
                            </div>

                            <div className="box">
                                <h4>Set-up in minutes</h4>
                                <ul>{data.setup.map((item, i) => <li key={i}>{item}</li>)}</ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="snapshots">
                    <h1>Industry Snapshots (EU focus)</h1>
                    <div className="industries-carousel">
                        <div className="carousel-wrapper" ref={carouselRef}>
                            {industries.map((industry, index) => (
                                <div className="industry-card" key={index}>
                                    <h4>{industry.title}</h4>
                                    <ul>
                                        <li><strong>Problem:</strong> {industry.problem}</li>
                                        <li><strong>Joble:</strong> {industry.joble}</li>
                                        <li><strong>Result:</strong> {industry.result}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="carousel-controls">
                            <button className="prev" onClick={() => scroll('left')}>‹</button>
                            <button className="next" onClick={() => scroll('right')}>›</button>
                        </div>
                    </div>

                </div>

                <div className="badge trust_badge">
                    Trust & Security
                </div>

                <div className="compliance">
                    <h1>Compliance & Privacy <span className="joble-highlight">(Built-in)</span></h1>
                    <section className="features-section">
                        {/* Left column */}
                        <div className="feature-card">
                            {/* <div className="upper-grid"> */}
                            <div className="feature-grid grid-1">
                                <div className="feature-icon">
                                    <img src={shieldIcon} alt="GDPR icon" />
                                </div>
                                <h3>GDPR-first</h3>
                                <div className="feature-items">
                                    <div>EU data residency options</div>
                                    <div>Configurable retention</div>
                                    <div>Data export/delete</div>
                                </div>
                            </div>
                            <div className="feature-grid grid-2">
                                <div className="feature-icon">
                                    <img src={uploadIcon} alt="Data icon" />
                                </div>
                                <h4>Your data stays yours</h4>
                                <p>Export anytime</p>
                            </div>
                            {/* </div> */}

                            {/* <div className="lower-grid"> */}
                            <div className="feature-grid grid-3">
                                <div className="feature-icon">
                                    <img src={userIcon} alt="Consent icon" />
                                </div>
                                <h3>Consent & transparency</h3>
                                <p>The agent identifies itself and honours opt-outs.</p>
                            </div>
                            <div className="feature-grid grid-4">
                                <div className="feature-icon">
                                    <img src={databaseIcon} alt="Outbound controls" />
                                </div>
                                <h4>Outbound controls</h4>
                                <div className="feature-items">
                                    <div>Caller ID</div>
                                    <div>Quiet hours</div>
                                    <div>Suppression lists (PECR/NL Telecommunicatiewet)</div>
                                </div>
                            </div>

                            {/* </div> */}
                        </div>
                    </section>
                </div>

                <div className="dashboard">
                    <h1>What You See In The Dashboard</h1>
                    <div className="dashboard-container">
                        <div className="joble-dash">
                            <img src={joble_icon} alt="" />
                            <h4>Live Outcomes:</h4>
                            <p>Confirmed, Rescheduled, Transferred, Survey Complete</p>
                        </div>
                        <div className="joble-dash">
                            <img src={joble_icon} alt="" />
                            <h4>Recordings & Transcripts:</h4>
                            <p>Searchable, Exportable.</p>
                        </div>
                        <div className="joble-dash">
                            <img src={joble_icon} alt="" />
                            <h4>Next Steps:</h4>
                            <p>Tasks, Reminders, CRM Sync</p>
                        </div>
                        <div className="joble-dash">
                            <img src={joble_icon} alt="" />
                            <h4>ROI Panel:</h4>
                            <p>Calls → Bookings → Revenue Impact.</p>
                        </div>
                    </div>
                </div>

                <section className="roi-section">
                    <div className="roi-card">
                        <div className="roi-content roi-use-cases">
                            <div className="roi-text">
                                <h2 className="roi-title">Quick ROI Math</h2>
                                <p className="roi-subtitle">Clinic with 300 calls / month</p>
                                <button className="type_button price-hero" id='cal_home_btn'>
                                    <span>
                                        <img className='imgGroup' src={group} alt="" />
                                    </span>{" "}
                                    Run the cost calculator{" "}
                                    <span className="arrow">
                                        <img src={arrow} alt="" />
                                    </span>
                                </button>
                            </div>
                            <div className="list-items">
                                <ul className="roi-list">
                                    <li>
                                        <img src={checkIcon} alt="check" className="roi-icon" />
                                        <span>Usage from €0.25/min + €0.50 per confirmed booking. </span>
                                    </li>
                                    <li>
                                        <img src={checkIcon} alt="check" className="roi-icon" />
                                        <span>One extra customer worth €X often covers the month. </span>
                                    </li>
                                    <li>
                                        <img src={checkIcon} alt="check" className="roi-icon" />
                                        <span>We’ll model your numbers before launch. </span>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <img src={curveBg} alt="curve background" className="roi-curve" />
                    </div>
                </section>

                <div className="howItWorks use-cases-getting-started" style={{ textAlign: "center" }}>
                    <h1>Getting Started Is Simple</h1>
                    <div className="steps">
                        <div className="step">
                            <img src={iconCounter1} alt="" />
                            <h3>Connect</h3>
                            <p>Connect your calendar and CRM in 2 clicks</p>
                        </div>
                        <div className="step">
                            <img src={iconCounter2} alt="" />
                            <h3>Configure</h3>
                            <p>Connect your calendar and CRM in 2 clicks</p>
                        </div>
                        <div className="step">
                            <img src={iconCounter3} alt="" />
                            <h3>Go Live</h3>
                            <p>Connect your calendar and CRM in 2 clicks</p>
                        </div>
                    </div>


                </div>
                <ResponsiveSVG
                    title='Ready to see it on your calls?'
                    paragraph='Let’s stop the missed revenues and no-shows.'
                    link="sales@joble.app"
                />

            </MainLayout>
        </div>
    )
}

export default UseCases;