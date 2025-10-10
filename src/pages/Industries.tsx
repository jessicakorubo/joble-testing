import React from 'react';
import "../styles/industries.css";
import MainLayout from '../layout/MainLayout';
import arrow from "../assets/arrow-right.svg";
import call from "../assets/call.svg";
import iconChat from "../assets/icon-chat.png";
import iconMeet from "../assets/icon-meet.png";
import iconTasks from "../assets/icon-calendar.png";
import iconFiles from "../assets/icon-files.png";
import iconAI from "../assets/icon-ai.png";
// import iconVoice from "../assets/icon-voice.png";    

const Industries = () => {
    return (
        <div>
            <MainLayout>
                <div className="industries-page">
                    <section className="hero">
                        <div className="hero-content">
                            <div className="tag">The Joble Workplace-OS Solution</div>

                            <h1 className="hero-title">
                                <span className="blue-text">One Platform,</span>
                                <br />
                                Every Conversation,
                                <br />
                                <span className="blue-text">Zero Data Hand-Offs</span>
                            </h1>

                            <p className="hero-subtext">
                                Work has drifted into a maze of separate apps. Joble crushes that maze into one
                                sovereign-ready workspace you can launch in the cloud or run on-premises.
                            </p>

                            <div className="hero-buttons">
                                <button className="type_button">
                                    Get started for free{" "}
                                    <span className="arrow">
                                        <img src={arrow} alt="" />
                                    </span>
                                </button>
                                <button className="white_bg_button">
                                    Contact sales{" "}
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

                            <div className="badges">
                                <span className="badge pink">70% Lower cost vs. Big-Tech tools</span>
                                <span className="badge blue">20min Setup time—scan QR, go live</span>
                                <span className="badge yellow">GDPR & Schrems II proof by design</span>
                                <span className="badge orange">€0.01 AI costs cents, not €30/seat</span>
                            </div>
                        </div>
                    </section>
                    {/* HEXAGONAL SECTION */}
                    <section className="modules-section">
                        <h1>What's inside Joble Workspace-OS</h1>
                        <p className="modules-subtitle">
                            Replace your entire tool stack with one integrated platform
                        </p>

                        <div className="module-container">
                            <div className="module-circle">
                                <div className="center-circle">
                                    <div className="center-inner">
                                        <p className="center-text">
                                            Take one module or the full suite — price caps at <strong>€10 per user</strong>
                                        </p>
                                        <button className="center-button">Start a free trial →</button>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-container">
                                <div className="modules-grid">
                                    {/* top-left */}
                                    <div className="module-card card-1">
                                        <div className="module-icon-wrap">
                                            <img src={iconChat} alt="JobChat" />
                                        </div>
                                        <h3 className="module-title">JobChat</h3>
                                        <p className="module-replaces">Replaces Slack / Teams</p>
                                        <p className="module-desc">
                                            Real-time chat, threads, emoji, file-share — all searchable by AI
                                        </p>
                                    </div>
                                    {/* top-right */}
                                    <div className="module-card card-2">
                                        <div className="module-icon-wrap">
                                            <img src={iconMeet} alt="JobMeet" />
                                        </div>
                                        <h3 className="module-title">JobMeet</h3>
                                        <p className="module-replaces">Replaces Zoom / Meet</p>
                                        <p className="module-desc">
                                            HD video & voice, auto-transcripts, Skill-Based invites that cut meeting time 30%
                                        </p>
                                    </div>
                                    {/* middle-left */}
                                    <div className="module-card card-3">
                                        <div className="module-icon-wrap">
                                            <img src={iconTasks} alt="JobTasks" />
                                        </div>
                                        <h3 className="module-title">JobTasks + Calendar</h3>
                                        <p className="module-replaces">Replaces Trello / Asana / Calendly</p>
                                        <p className="module-desc">
                                            Kanban, Gantt, auto-schedule, follow-ups auto-generated from any chat or call
                                        </p>
                                    </div>
                                    {/* center circle */}
                                    {/* middle-right */}
                                    <div className="module-card card-4">
                                        <div className="module-icon-wrap">
                                            <img src={iconFiles} alt="JobFiles" />
                                        </div>
                                        <h3 className="module-title">JobFiles</h3>
                                        <p className="module-replaces">Replaces Dropbox / OneDrive</p>
                                        <p className="module-desc">
                                            Unlimited file storage on EU servers or your own box — instant previews, versioning
                                        </p>
                                    </div>
                                    {/* bottom-left */}
                                    <div className="module-card card-5">
                                        <div className="module-icon-wrap">
                                            <img src={iconAI} alt="Knowledge AI" />
                                        </div>
                                        <h3 className="module-title">Knowledge AI</h3>
                                        <p className="module-replaces">Replaces Costly Copilot add-ons</p>
                                        <p className="module-desc">
                                            One-click answers that pull from chats, files and calls — pay only per query
                                        </p>
                                    </div>
                                    {/* bottom-right */}
                                    <div className="module-card card-6">
                                        <div className="module-icon-wrap">
                                            <img src={call} alt="Voice AI" />
                                        </div>
                                        <h3 className="module-title">Voice-AI Receptionist</h3>
                                        <p className="module-replaces">Replaces Human front desk</p>
                                        <p className="module-desc">
                                            Answers in 47 languages, books into Joble or OpenTable — €0.25/min + €0.50 per booking
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>
                </div>

            </MainLayout>

        </div>
    )
}

export default Industries