import React, { useState } from "react";
import arrow from "../assets/arrow-right.svg";
import MainLayout from "../layout/MainLayout";
import "../styles/industries.css";
import icon from '../assets/small_wht_joble.svg'
// ✅ Import header images
import professionalHeader from "../assets/professional.png";
import localHeader from "../assets/local-services.png";
import publicHeader from "../assets/public-sector.png";
import healthcareHeader from "../assets/healthcareHeader.png";
import retailHeader from "../assets/retailHeader.png";
import FeaturesSection from "../components/FeaturesSection";
import checkIcon from '../assets/checkIcon.png';
import group from '../assets/grouping.svg';
import curveBg from '../assets/landing_frame.png';
import ResponsiveSVG from "../components/ResponsiveSVG";

type Category =
    | "Healthcare & Dental"
    | "Local Services & Repairs"
    | "Retail & Hospitality"
    | "Professional Services"
    | "Public Sector & NGOs";

type CategoryData = {
    problem: string;
    solution: string;
    useCases: string;
    roi: string;
    valueAdd: string;
    image: string;
};

const Industries = () => {
    const [activeCategory, setActiveCategory] = useState<Category>(
        "Professional Services"
    );

    const data: Record<Category, CategoryData> = {
        "Healthcare & Dental": {
            problem: "No-shows and missed calls waste staff time.",
            solution: "Joble handles bookings, reminders, and intake automatically.",
            useCases: "Appointment confirmations, patient follow-ups, results calls.",
            roi: "20–40% fewer no-shows, cleaner calendars, happier teams.",
            valueAdd: "Integrates with Google/Outlook Calendars and EHR tools.",
            image: healthcareHeader,
        },
        "Local Services & Repairs": {
            problem: "Missed calls mean lost jobs.",
            solution: "Joble answers fast, books work, and follows up with quotes.",
            useCases: "Plumbing, HVAC, electrical, and home services.",
            roi: "2–3x more booked jobs with less back-and-forth.",
            valueAdd: "Works with HubSpot and Pipedrive for instant sync.",
            image: localHeader,
        },
        "Retail & Hospitality": {
            problem: "Missed reservations and slow responses hurt occupancy.",
            solution: "AI handles reservations, hours, and directions automatically.",
            useCases: "Hotels, salons, and restaurants.",
            roi: "Higher occupancy, smoother guest experience.",
            valueAdd: "Syncs with booking tools and CRM systems.",
            image: retailHeader,
        },
        "Professional Services": {
            problem: "Slow intake. Leads go cold. Calendar back-and-forth.",
            solution: "Answer. Qualify. Schedule. Log every step.",
            useCases:
                "Discovery prompts, conflict checks, doc requests, payment nudges.",
            roi: "Faster pipelines. Higher consult conversions. Less admin.",
            valueAdd: "HubSpot/Pipedrive/Zoho via Zapier. One-click exports.",
            image: professionalHeader,
        },
        "Public Sector & NGOs": {
            problem: "Manual follow-ups cause delays.",
            solution: "Automate reminders, event calls, and outreach programs.",
            useCases: "Citizen engagement, surveys, donations, registrations.",
            roi: "Streamlined workflows, faster responses.",
            valueAdd: "Integrates with CRMs and communication platforms.",
            image: publicHeader,
        },
    };

    const current = data[activeCategory];

    return (
        <MainLayout>
            <div className="industries-page">
                {/* --- HERO SECTION --- */}
                <div className="ind-hero">
                    {/* (your outbound design and hero content unchanged) */}
                    <h1>
                        The <span className="joble-highlight">AI Phone Agent</span> That
                        Answers, Books, Reminds, and Sells.
                    </h1>

                    <div className="hero-buttons ind-hero-buttons">
                        <button className="type_button">
                            Try the live web demo{" "}
                            <span className="arrow">
                                <img src={arrow} alt="" />
                            </span>
                        </button>
                        <button className="white_bg_button">
                            Run the cost calculator{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M16.9699 10.5893C17.1261 10.433 17.2139 10.2211 17.2139 10.0001C17.2139 9.77915 17.1261 9.56723 16.9699 9.41096L12.2557 4.69679C12.1788 4.6172 12.0869 4.55371 11.9852 4.51004C11.8835 4.46636 11.7742 4.44338 11.6635 4.44241C11.5529 4.44145 11.4432 4.46254 11.3408 4.50444C11.2383 4.54634 11.1453 4.60822 11.067 4.68646C10.9888 4.7647 10.9269 4.85775 10.885 4.96016C10.8431 5.06257 10.822 5.17231 10.823 5.28296C10.824 5.39361 10.847 5.50296 10.8906 5.60463C10.9343 5.7063 10.9978 5.79825 11.0774 5.87512L14.369 9.16679L3.33321 9.16679C3.1122 9.16679 2.90024 9.25459 2.74396 9.41087C2.58768 9.56715 2.49988 9.77911 2.49988 10.0001C2.49988 10.2211 2.58768 10.4331 2.74396 10.5894C2.90024 10.7457 3.1122 10.8335 3.33321 10.8335L14.369 10.8335L11.0774 14.1251C10.9256 14.2823 10.8416 14.4928 10.8435 14.7113C10.8454 14.9298 10.933 15.1388 11.0875 15.2933C11.242 15.4478 11.451 15.5355 11.6695 15.5374C11.888 15.5393 12.0985 15.4553 12.2557 15.3035L16.9699 10.5893Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* --- USE CASE SECTION --- */}
                <div className="container-container">
                    <div className="usecases-container">
                        {/* LEFT PANEL */}
                        <div className="left-panel">
                            <div className="case-img-con">
                                <img
                                    className="top-image"
                                    src={current.image}
                                    alt={activeCategory}
                                />
                            </div>

                            <div className="category-list">
                                {Object.keys(data).map((category) => {
                                    const isActive = activeCategory === category;
                                    return (
                                        <button
                                            key={category}
                                            onClick={() => setActiveCategory(category as Category)}
                                            className={`category-item ${isActive ? "active" : ""}`}
                                        >
                                            <span>{category}</span>
                                            {isActive && (
                                                <img
                                                    src={icon}
                                                    alt="active"
                                                    className="active-arrow"
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="right-panel">
                            <div className="right-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                    <path d="M23.8457 0C27.5133 0 30.4971 2.98378 30.4971 6.65136C30.4971 7.4423 29.8561 8.08326 29.0652 8.08326C28.2742 8.08326 27.6333 7.4423 27.6333 6.65136C27.6333 4.56321 25.9345 2.86379 23.8457 2.86379C21.7569 2.86379 20.0581 4.5626 20.0581 6.65136C20.0581 7.4423 19.4172 8.08326 18.6262 8.08326C17.8353 8.08326 17.1943 7.4423 17.1943 6.65136C17.1943 2.98378 20.1781 0 23.8457 0Z" fill="#07C0EA" />
                                    <path d="M6.79162 0C10.4592 0 13.443 2.98378 13.443 6.65136C13.443 10.3189 10.4592 13.3027 6.79162 13.3027C3.12404 13.3027 0.139648 10.3189 0.139648 6.65136C0.139648 2.98378 3.12404 0 6.79162 0ZM6.79162 10.4389C8.87978 10.4389 10.5792 8.74013 10.5792 6.65136C10.5792 4.5626 8.88039 2.86379 6.79162 2.86379C4.70286 2.86379 3.00405 4.5626 3.00405 6.65136C3.00405 8.74013 4.70286 10.4389 6.79162 10.4389Z" fill="#07C0EA" />
                                    <path d="M12.0112 5.21948C12.8022 5.21948 13.4431 5.86044 13.4431 6.65138V19.1197C13.4431 19.9339 14.302 20.6214 15.3183 20.6214C16.3345 20.6214 17.1934 19.9339 17.1934 19.1197V6.65138C17.1934 5.86044 17.8343 5.21948 18.6253 5.21948C19.4162 5.21948 20.0572 5.86044 20.0572 6.65138V19.1197C20.0572 21.5268 17.931 23.4852 15.3176 23.4852C12.7042 23.4852 10.5781 21.5268 10.5781 19.1197V6.65138C10.5781 5.86044 11.2191 5.21948 12.01 5.21948H12.0112Z" fill="#07C0EA" />
                                    <path d="M1.43189 13.2477C2.22283 13.2477 2.86379 13.8886 2.86379 14.6795C2.86379 18.0068 4.15917 21.1344 6.51178 23.487C8.8644 25.8396 11.9927 27.135 15.3193 27.135C18.6459 27.135 21.7741 25.8396 24.1267 23.487C26.4793 21.1344 27.7747 18.0061 27.7747 14.6795C27.7747 13.8886 28.4157 13.2477 29.2066 13.2477C29.9976 13.2477 30.6385 13.8886 30.6385 14.6795C30.6385 18.772 29.045 22.6189 26.1512 25.5127C23.2574 28.4065 19.4105 30 15.318 30C11.2256 30 7.37863 28.4065 4.48485 25.5127C1.59351 22.6189 0 18.772 0 14.6802C0 13.8892 0.640955 13.2483 1.43189 13.2483V13.2477Z" fill="#4A96FC" />
                                </svg>
                            </div>
                            <p>
                                <strong>Problem:</strong> {current.problem}
                            </p>
                            <p>
                                <strong>Solution:</strong> {current.solution}
                            </p>
                            <p>
                                <strong>Use cases:</strong> {current.useCases}
                            </p>
                            <p>
                                <strong>ROI:</strong> {current.roi}
                            </p>
                            <p>
                                <strong>Value add:</strong> {current.valueAdd}
                            </p>
                            <div className="dyn-usecases">
                                <button className="type_button price-hero" id='cal_home_btn'>
                                Calculate your ROI{" "}
                                <span className="arrow">
                                    <img src={arrow} alt="" />
                                </span>
                            </button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <FeaturesSection
                    title="What You Get (All Plans)"
                    features={[
                        "AI Receptionist",
                        "Outbound AI Caller (reminders, re-engage, surveys) ",
                        "APhone Storefront (book/order by phone) ",
                        "Two-way Google/Microsoft calendars",
                        "Numbers & Porting (NL/UK)",
                        "Warm transfer, transcripts, Team inbox",
                        "Consent-based recording",
                        "Export & delete"
                    ]}
                    fullWidthLast={false}
                />

                <section className="roi-section roi-industries">
                    <div className="roi-card">
                        <div className="roi-content">
                            <div className="roi-text">
                                <h2 className="roi-title">Clear ROI</h2>

                                <button className="type_button price-hero" id='cal_home_btn'>

                                    Calculate your ROI{" "}
                                    <span className="arrow">
                                        <img src={arrow} alt="" />
                                    </span>
                                </button>
                            </div>
                            <div className="list-items">
                                <ul className="roi-list">
                                    <li>
                                        <img src={checkIcon} alt="check" className="roi-icon" />
                                        <span>Minutes used: 600 min → ~€150</span>
                                    </li>
                                    <li>
                                        <img src={checkIcon} alt="check" className="roi-icon" />
                                        <span>Meetings added: 40 → €20 (if booking add-on enabled)</span>
                                    </li>
                                    <li>
                                        <img src={checkIcon} alt="check" className="roi-icon" />
                                        <span>Total: ~€170 / month</span>
                                    </li>
                                    <li>
                                        <img src={checkIcon} alt="check" className="roi-icon" />
                                        <span>
                                            If one extra patient is worth &gt;€170, Joble pays for itself.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <img src={curveBg} alt="curve background" className="roi-curve" />
                    </div>
                </section>

                <ResponsiveSVG
                    title="Still on the fence?"
                    paragraph="Let’s stop the missed revenue and no-shows."
                    link="Joble—Own your data, your AI, and your peace of mind"

                />

            </div>
        </MainLayout>
    );
};

export default Industries;
