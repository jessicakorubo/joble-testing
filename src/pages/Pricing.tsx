import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import chatMockup from "../assets/chat-mockup.png";
import "../styles/pricing.css";
import womanImg from "../assets/woman.png";
import call_recording from '../assets/call_recording.png';
import transcript from "../assets/transcription.png";
import number from "../assets/number.png";
import speech from "../assets/speech.png";
import crm from "../assets/crm.png";
import curveBg from "../assets/landing_frame.png";
import checkIcon from "../assets/checkIcon.png";
import ResponsiveSVG from '../components/ResponsiveSVG';
import group from "../assets/grouping.svg";
import arrow from "../assets/arrow-right.svg";


// import { Sparkles } from "lucide-react";



const features = [
    "Inbound AI Receptionist (answers, qualifies, books)",
    "Outbound AI Caller (reminders, re-engage, surveys)",
    "Phone Storefront (book/order by phone)",
    "Calendar and Calendar sync (Google/Microsoft)",
    "CRM via Zapier / Webhooks",
    "Internal Collaboration Tool",
    "Task Manager",
    "Transcripts, outcomes, and analytics",
    "Video Conferencing",
    "Your data. Your retention. Export anytime.",
    "GDPR controls (consent prompts, quiet hours, suppression lists)",
];

const Pricing = () => {
    const faqData = [
        {
            question: "Can I keep my number?",
            answer: "Yes—forward or port it.",
        },
        {
            question: "Does it replace staff?",
            answer: "No, it enhances team productivity by handling repetitive tasks.",
        },
        {
            question: "Integrations?",
            answer:
                "Yes, integrates with popular tools like Slack, Zapier, and more.",
        },
        {
            question: "Languages?",
            answer: "Supports English, Spanish, French, and more.",
        },
        {
            question: "Privacy?",
            answer: "All data is encrypted end-to-end. We take privacy seriously.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
            <MainLayout>
                <div className='pricing_page'>
                    <h1>Choose a plan that's right for you</h1>
                    <p className='hero-para'>Simple, transparent. Pay for what you see</p>
                    <section className="pricing-section">
                        <div className="pricing-left">
                            {/* GRID wrapper for the four small cards */}
                            <div className="pricing-cards">
                                <div className="pricing-card">
                                    <h4>Minutes from</h4>
                                    <p className="price">€0.50–€1.50 <span className="sub">/min</span></p>
                                    <small>Country rates vary</small>
                                </div>

                                <div className="pricing-card">
                                    <h4>Per meeting added</h4>
                                    <p className="price">€10</p>
                                    <small>/confirmed booking (optional)</small>
                                </div>

                                <div className="pricing-card">
                                    <h4>Platform (advanced)</h4>
                                    <p className="price">From €10</p>
                                    <small>/month/user</small>
                                </div>

                                <div className="pricing-card">
                                    <h4>Savings</h4>
                                    <p className="price">Volume bundles</p>
                                    <small>and annual commits</small>
                                </div>
                            </div>

                            <div className="hero-buttons">
                                <button className="type_button">
                                    Get an instant estimate{" "}
                                    <span className="arrow">
                                        <img src={arrow} alt="" />
                                    </span>
                                </button>
                                <button className="white_bg_button">
                                    Book a 20mins consult{" "}
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

                        <div className="pricing-right">
                            <img src={chatMockup} alt="Platform preview" />
                        </div>
                    </section>
                    <section className="includes">
                        <h2>What's included by default</h2>
                        <section className="w-full flex flex-col items-center py-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl w-full">
                                {features.slice(0, 10).map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 bg-white border rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition feature-card"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                            <path d="M11.4119 31.3809L22.702 31.4879C22.8371 31.4905 22.9694 31.5273 23.0864 31.5949C23.2035 31.6625 23.3014 31.7586 23.3712 31.8743L29.109 41.5983C29.1972 41.7454 29.3309 41.8598 29.4899 41.9241C29.6489 41.9884 29.8246 41.9992 29.9902 41.9548C30.1559 41.9105 30.3026 41.8133 30.4081 41.6781C30.5137 41.5429 30.5723 41.377 30.5751 41.2055L30.6822 29.9154C30.6848 29.7802 30.7216 29.648 30.7891 29.531C30.8567 29.4139 30.9528 29.3159 31.0686 29.2461L40.7925 23.5084C40.9396 23.4202 41.054 23.2865 41.1183 23.1275C41.1827 22.9685 41.1935 22.7928 41.1491 22.6272C41.1047 22.4615 41.0075 22.3148 40.8723 22.2092C40.7371 22.1037 40.5712 22.0451 40.3997 22.0423L29.1096 21.9352C28.9745 21.9326 28.8422 21.8958 28.7252 21.8283C28.6082 21.7607 28.5102 21.6646 28.4404 21.5488L22.7026 11.8249C22.6144 11.6778 22.4807 11.5634 22.3217 11.499C22.1627 11.4347 21.9871 11.4239 21.8214 11.4683C21.6557 11.5127 21.509 11.6099 21.4035 11.7451C21.2979 11.8803 21.2393 12.0462 21.2365 12.2177L21.1294 23.5078C21.1269 23.6429 21.0901 23.7752 21.0225 23.8922C20.9549 24.0092 20.8588 24.1072 20.7431 24.177L11.0191 29.9148C10.872 30.003 10.7576 30.1367 10.6933 30.2957C10.6289 30.4547 10.6182 30.6303 10.6625 30.796C10.7069 30.9617 10.8041 31.1084 10.9393 31.2139C11.0745 31.3194 11.2404 31.3781 11.4119 31.3809Z" fill="url(#paint0_linear_2144_3477)" stroke="#07C0EA" stroke-width="0.404751" stroke-linecap="round" stroke-linejoin="round" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2144_3477" x1="16.162" y1="16.9715" x2="35.6496" y2="36.4516" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#07C0EA" />
                                                    <stop offset="0.5" stop-color="#07C0EA" />
                                                    <stop offset="1" stop-color="#07C0EA" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span className="text-gray-800 text-sm">{feature}</span>
                                    </div>
                                ))}

                                {/* GDPR controls (full width) */}
                                <div className="flex items-center gap-2 bg-white border rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition col-span-1 sm:col-span-2 feature-card gdpr full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                        <path d="M11.4119 31.3809L22.702 31.4879C22.8371 31.4905 22.9694 31.5273 23.0864 31.5949C23.2035 31.6625 23.3014 31.7586 23.3712 31.8743L29.109 41.5983C29.1972 41.7454 29.3309 41.8598 29.4899 41.9241C29.6489 41.9884 29.8246 41.9992 29.9902 41.9548C30.1559 41.9105 30.3026 41.8133 30.4081 41.6781C30.5137 41.5429 30.5723 41.377 30.5751 41.2055L30.6822 29.9154C30.6848 29.7802 30.7216 29.648 30.7891 29.531C30.8567 29.4139 30.9528 29.3159 31.0686 29.2461L40.7925 23.5084C40.9396 23.4202 41.054 23.2865 41.1183 23.1275C41.1827 22.9685 41.1935 22.7928 41.1491 22.6272C41.1047 22.4615 41.0075 22.3148 40.8723 22.2092C40.7371 22.1037 40.5712 22.0451 40.3997 22.0423L29.1096 21.9352C28.9745 21.9326 28.8422 21.8958 28.7252 21.8283C28.6082 21.7607 28.5102 21.6646 28.4404 21.5488L22.7026 11.8249C22.6144 11.6778 22.4807 11.5634 22.3217 11.499C22.1627 11.4347 21.9871 11.4239 21.8214 11.4683C21.6557 11.5127 21.509 11.6099 21.4035 11.7451C21.2979 11.8803 21.2393 12.0462 21.2365 12.2177L21.1294 23.5078C21.1269 23.6429 21.0901 23.7752 21.0225 23.8922C20.9549 24.0092 20.8588 24.1072 20.7431 24.177L11.0191 29.9148C10.872 30.003 10.7576 30.1367 10.6933 30.2957C10.6289 30.4547 10.6182 30.6303 10.6625 30.796C10.7069 30.9617 10.8041 31.1084 10.9393 31.2139C11.0745 31.3194 11.2404 31.3781 11.4119 31.3809Z" fill="url(#paint0_linear_2144_3477)" stroke="#07C0EA" stroke-width="0.404751" stroke-linecap="round" stroke-linejoin="round" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2144_3477" x1="16.162" y1="16.9715" x2="35.6496" y2="36.4516" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#07C0EA" />
                                                <stop offset="0.5" stop-color="#07C0EA" />
                                                <stop offset="1" stop-color="#07C0EA" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className="text-gray-800 text-sm">{features[10]}</span>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section className="addons-section">
                        <div className="addons-container">
                            <div className="addons-left">
                                <img src={womanImg} alt="Person pointing" className="addons-image" />
                            </div>

                            <div className="addons-right">
                                <h2 className="addons-title">Popular add-ons (Usage based)</h2>
                                <p className="addons-subtitle">
                                    Exact rates vary by country and telco. We’ll confirm before go-live.
                                </p>

                                <div className="addons-list">
                                    <div className="addon-item">
                                        <div className="addon-icon"><img src={call_recording} alt="" /></div>
                                        <p>
                                            <strong>Call recording & storage:</strong> from €0.01 / recorded
                                            min
                                        </p>
                                    </div>

                                    <div className="addon-item">
                                        <div className="addon-icon"><img src={number} alt="" /></div>
                                        <p>
                                            <strong>Mobile / local numbers:</strong> from €3–€10 / number /
                                            month (country-dependent)
                                        </p>
                                    </div>

                                    <div className="addon-item">
                                        <div className="addon-icon"><img src={transcript} alt="" /></div>
                                        <p>
                                            <strong>Transcription:</strong> from €0.05 / audio min
                                        </p>
                                    </div>

                                    <div className="addon-item">
                                        <div className="addon-icon"><img src={speech} alt="" /></div>
                                        <p>
                                            <strong>Speech languages / custom scripts:</strong> custom
                                        </p>
                                    </div>

                                    <div className="addon-item">
                                        <div className="addon-icon"><img src={crm} alt="" /></div>
                                        <p>
                                            <strong>Custom CRM integration:</strong> scoped project
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="roi-section">
                        <div className="roi-card">
                            <div className="roi-content">
                                <div className="roi-text">
                                    <h2 className="roi-title">Quick ROI Example</h2>
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
                    <section className="faqs">
                        <div className="faq">
                            <h1>Frequently asked questions</h1>
                            {faqData.map((item, index) => (
                                <div className="faq-item" key={index}>
                                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                        {item.question}
                                        <span className="faq-icon">
                                            {openIndex === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    <div
                                        className={`faq-answer ${openIndex === index ? "open" : ""}`}
                                    >
                                        {item.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <ResponsiveSVG
                        title="Ready to price your rollout?"
                        paragraph="Get tailored quotes in minutes"
                        link="sales@joble.app"
                    />
                </div>
            </MainLayout>
        </div>
    )
}

export default Pricing