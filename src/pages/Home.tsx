import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../layout/MainLayout";
import "../styles/home.css";
import outbound_line from "../assets/outbound-image.png";
import heroImage2 from "../assets/hero-image2.png";
import comapanies_slider from "../assets/companies_slider.png";
import ISOpractices from "../assets/ISOpractices.png";
import landing_frame from "../assets/landing_frame.png";
import hand_result from "../assets/hand_result.png";
import people from "../assets/people.png";
import video from "../assets/video.png";
import clock from "../assets/clock.png";
import web from "../assets/web.png";
import outboundAI from "../assets/outboundAI.png";
import phone_statement from "../assets/phone_statement@3x.png";
import iconCounter1 from "../assets/iconCounter1.png";
import iconCounter2 from "../assets/iconCounter2.png";
import iconCounter3 from "../assets/iconCounter3.png";
import arrow from "../assets/arrow-right.svg";
import group from "../assets/group.svg";
import shieldIcon from "../assets/shieldIcon.svg";
import uploadIcon from "../assets/uploadIcon.svg";
import userIcon from "../assets/userIcon.svg";
import databaseIcon from "../assets/databaseIcon.svg";
import call from "../assets/call.svg";
import calendar2 from "../assets/calendar.svg";
import platform from "../assets/platform.svg";
import demoVideo from "../assets/joble_video.mp4";
import outbound2 from "../assets/outbound2.png";
import joble_svg from "../assets/joble_svg.svg";
import ResponsiveSVG from "../components/ResponsiveSVG";

const Home = () => {
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

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!videoRef.current) return; // ✅ safety check

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  const [activeImage, setActiveImage] = useState(heroImage2);

  const handleImageChange = (image: React.SetStateAction<string>) => {
    setActiveImage(image);
  };

  const words = ["Picks up,", "Books,", "Reminds,", "Sells."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // change every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <MainLayout>
        <div className="hero-section">
          <div className="left-hero-section">
            <div className="outbound-line">
              <img src={outbound_line} alt="" />
            </div>
            <div className="hero-text">
              <h1>
                The AI Phone Agent That{" "}
                <span className="dynamic-tag">{words[currentWordIndex]}</span>
              </h1>
              <p>Never miss a call, Book more meetings. Cut no shows.</p>
              <div className="hero-buttons">
                <button className="type_button">
                  Try the live web demo{" "}
                  <span className="arrow">
                    <img src={arrow} alt="" />
                  </span>
                </button>
                <button className="white_bg_button">
                  Run the cost calculator{" "}
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
          <div className="right-hero-section">
            <img src={heroImage2} alt="" />
          </div>
        </div>
        {/* Companies slider */}
        <div className="companies_slider">
          <p>
            {" "}
            <b>Syncs With</b>
          </p>
          <div className="company_logos">
            <img src={comapanies_slider} alt="" />
            <img src={ISOpractices} alt="" />
          </div>
        </div>
        <div className="switch">
          <h1>
            Why teams switch to <span className="joble-highlight">joble</span>{" "}
          </h1>
          <p>Stop losing revenue to preventable problems</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="joble_icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M27.9476 0.5C32.2266 0.5 35.7077 3.98116 35.7077 8.26012C35.7077 9.1829 34.9599 9.9307 34.0371 9.9307C33.1144 9.9307 32.3666 9.1829 32.3666 8.26012C32.3666 5.82388 30.3846 3.84117 27.9476 3.84117C25.5107 3.84117 23.5287 5.82316 23.5287 8.26012C23.5287 9.1829 22.7809 9.9307 21.8581 9.9307C20.9353 9.9307 20.1875 9.1829 20.1875 8.26012C20.1875 3.98116 23.6687 0.5 27.9476 0.5Z" fill="#07C0EA" />
                <path d="M8.05136 0.5C12.3303 0.5 15.8115 3.98116 15.8115 8.26012C15.8115 12.5391 12.3303 16.0202 8.05136 16.0202C3.7724 16.0202 0.290527 12.5391 0.290527 8.26012C0.290527 3.98116 3.7724 0.5 8.05136 0.5ZM8.05136 12.6791C10.4876 12.6791 12.4703 10.6971 12.4703 8.26012C12.4703 5.82316 10.4883 3.84117 8.05136 3.84117C5.6144 3.84117 3.63241 5.82316 3.63241 8.26012C3.63241 10.6971 5.6144 12.6791 8.05136 12.6791Z" fill="#07C0EA" />
                <path d="M14.1408 6.58887C15.0636 6.58887 15.8114 7.33667 15.8114 8.25945V22.8062C15.8114 23.7561 16.8134 24.5582 17.999 24.5582C19.1847 24.5582 20.1867 23.7561 20.1867 22.8062V8.25945C20.1867 7.33667 20.9345 6.58887 21.8573 6.58887C22.7801 6.58887 23.5279 7.33667 23.5279 8.25945V22.8062C23.5279 25.6145 21.0474 27.8994 17.9983 27.8994C14.9493 27.8994 12.4688 25.6145 12.4688 22.8062V8.25945C12.4688 7.33667 13.2165 6.58887 14.1393 6.58887H14.1408Z" fill="#07C0EA" />
                <path d="M1.79754 15.9551C2.72032 15.9551 3.46812 16.7029 3.46812 17.6257C3.46812 21.5075 4.97944 25.1565 7.72423 27.9013C10.469 30.6461 14.1187 32.1574 17.9999 32.1574C21.881 32.1574 25.5307 30.6461 28.2755 27.9013C31.0203 25.1565 32.5316 21.5068 32.5316 17.6257C32.5316 16.7029 33.2794 15.9551 34.2022 15.9551C35.125 15.9551 35.8728 16.7029 35.8728 17.6257C35.8728 22.4003 34.0136 26.8885 30.6375 30.2647C27.2613 33.6409 22.7731 35.5 17.9984 35.5C13.2238 35.5 8.73558 33.6409 5.35941 30.2647C1.9861 26.8885 0.126953 22.4003 0.126953 17.6264C0.126953 16.7036 0.874753 15.9558 1.79754 15.9558V15.9551Z" fill="#4A96FC" />
              </svg>
            </div>
            <h3>Missed calls cause revenue?</h3>
            <p>We Answer</p>
          </div>
          <div className="card">
            <div className="joble_icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M27.9476 0.5C32.2266 0.5 35.7077 3.98116 35.7077 8.26012C35.7077 9.1829 34.9599 9.9307 34.0371 9.9307C33.1144 9.9307 32.3666 9.1829 32.3666 8.26012C32.3666 5.82388 30.3846 3.84117 27.9476 3.84117C25.5107 3.84117 23.5287 5.82316 23.5287 8.26012C23.5287 9.1829 22.7809 9.9307 21.8581 9.9307C20.9353 9.9307 20.1875 9.1829 20.1875 8.26012C20.1875 3.98116 23.6687 0.5 27.9476 0.5Z" fill="#07C0EA" />
                <path d="M8.05136 0.5C12.3303 0.5 15.8115 3.98116 15.8115 8.26012C15.8115 12.5391 12.3303 16.0202 8.05136 16.0202C3.7724 16.0202 0.290527 12.5391 0.290527 8.26012C0.290527 3.98116 3.7724 0.5 8.05136 0.5ZM8.05136 12.6791C10.4876 12.6791 12.4703 10.6971 12.4703 8.26012C12.4703 5.82316 10.4883 3.84117 8.05136 3.84117C5.6144 3.84117 3.63241 5.82316 3.63241 8.26012C3.63241 10.6971 5.6144 12.6791 8.05136 12.6791Z" fill="#07C0EA" />
                <path d="M14.1408 6.58887C15.0636 6.58887 15.8114 7.33667 15.8114 8.25945V22.8062C15.8114 23.7561 16.8134 24.5582 17.999 24.5582C19.1847 24.5582 20.1867 23.7561 20.1867 22.8062V8.25945C20.1867 7.33667 20.9345 6.58887 21.8573 6.58887C22.7801 6.58887 23.5279 7.33667 23.5279 8.25945V22.8062C23.5279 25.6145 21.0474 27.8994 17.9983 27.8994C14.9493 27.8994 12.4688 25.6145 12.4688 22.8062V8.25945C12.4688 7.33667 13.2165 6.58887 14.1393 6.58887H14.1408Z" fill="#07C0EA" />
                <path d="M1.79754 15.9551C2.72032 15.9551 3.46812 16.7029 3.46812 17.6257C3.46812 21.5075 4.97944 25.1565 7.72423 27.9013C10.469 30.6461 14.1187 32.1574 17.9999 32.1574C21.881 32.1574 25.5307 30.6461 28.2755 27.9013C31.0203 25.1565 32.5316 21.5068 32.5316 17.6257C32.5316 16.7029 33.2794 15.9551 34.2022 15.9551C35.125 15.9551 35.8728 16.7029 35.8728 17.6257C35.8728 22.4003 34.0136 26.8885 30.6375 30.2647C27.2613 33.6409 22.7731 35.5 17.9984 35.5C13.2238 35.5 8.73558 33.6409 5.35941 30.2647C1.9861 26.8885 0.126953 22.4003 0.126953 17.6264C0.126953 16.7036 0.874753 15.9558 1.79754 15.9558V15.9551Z" fill="#4A96FC" />
              </svg>
            </div>
            <h3>Staff time is finite?</h3>
            <p>We Automate Follow ups</p>
          </div>
          <div className="card">
            <div className="joble_icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M27.9476 0.5C32.2266 0.5 35.7077 3.98116 35.7077 8.26012C35.7077 9.1829 34.9599 9.9307 34.0371 9.9307C33.1144 9.9307 32.3666 9.1829 32.3666 8.26012C32.3666 5.82388 30.3846 3.84117 27.9476 3.84117C25.5107 3.84117 23.5287 5.82316 23.5287 8.26012C23.5287 9.1829 22.7809 9.9307 21.8581 9.9307C20.9353 9.9307 20.1875 9.1829 20.1875 8.26012C20.1875 3.98116 23.6687 0.5 27.9476 0.5Z" fill="#07C0EA" />
                <path d="M8.05136 0.5C12.3303 0.5 15.8115 3.98116 15.8115 8.26012C15.8115 12.5391 12.3303 16.0202 8.05136 16.0202C3.7724 16.0202 0.290527 12.5391 0.290527 8.26012C0.290527 3.98116 3.7724 0.5 8.05136 0.5ZM8.05136 12.6791C10.4876 12.6791 12.4703 10.6971 12.4703 8.26012C12.4703 5.82316 10.4883 3.84117 8.05136 3.84117C5.6144 3.84117 3.63241 5.82316 3.63241 8.26012C3.63241 10.6971 5.6144 12.6791 8.05136 12.6791Z" fill="#07C0EA" />
                <path d="M14.1408 6.58887C15.0636 6.58887 15.8114 7.33667 15.8114 8.25945V22.8062C15.8114 23.7561 16.8134 24.5582 17.999 24.5582C19.1847 24.5582 20.1867 23.7561 20.1867 22.8062V8.25945C20.1867 7.33667 20.9345 6.58887 21.8573 6.58887C22.7801 6.58887 23.5279 7.33667 23.5279 8.25945V22.8062C23.5279 25.6145 21.0474 27.8994 17.9983 27.8994C14.9493 27.8994 12.4688 25.6145 12.4688 22.8062V8.25945C12.4688 7.33667 13.2165 6.58887 14.1393 6.58887H14.1408Z" fill="#07C0EA" />
                <path d="M1.79754 15.9551C2.72032 15.9551 3.46812 16.7029 3.46812 17.6257C3.46812 21.5075 4.97944 25.1565 7.72423 27.9013C10.469 30.6461 14.1187 32.1574 17.9999 32.1574C21.881 32.1574 25.5307 30.6461 28.2755 27.9013C31.0203 25.1565 32.5316 21.5068 32.5316 17.6257C32.5316 16.7029 33.2794 15.9551 34.2022 15.9551C35.125 15.9551 35.8728 16.7029 35.8728 17.6257C35.8728 22.4003 34.0136 26.8885 30.6375 30.2647C27.2613 33.6409 22.7731 35.5 17.9984 35.5C13.2238 35.5 8.73558 33.6409 5.35941 30.2647C1.9861 26.8885 0.126953 22.4003 0.126953 17.6264C0.126953 16.7036 0.874753 15.9558 1.79754 15.9558V15.9551Z" fill="#4A96FC" />
              </svg>
            </div>
            <h3>No-shows drain margin?</h3>
            <p>We Remind</p>
          </div>
          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M27.9476 0.5C32.2266 0.5 35.7077 3.98116 35.7077 8.26012C35.7077 9.1829 34.9599 9.9307 34.0371 9.9307C33.1144 9.9307 32.3666 9.1829 32.3666 8.26012C32.3666 5.82388 30.3846 3.84117 27.9476 3.84117C25.5107 3.84117 23.5287 5.82316 23.5287 8.26012C23.5287 9.1829 22.7809 9.9307 21.8581 9.9307C20.9353 9.9307 20.1875 9.1829 20.1875 8.26012C20.1875 3.98116 23.6687 0.5 27.9476 0.5Z" fill="#07C0EA" />
              <path d="M8.05136 0.5C12.3303 0.5 15.8115 3.98116 15.8115 8.26012C15.8115 12.5391 12.3303 16.0202 8.05136 16.0202C3.7724 16.0202 0.290527 12.5391 0.290527 8.26012C0.290527 3.98116 3.7724 0.5 8.05136 0.5ZM8.05136 12.6791C10.4876 12.6791 12.4703 10.6971 12.4703 8.26012C12.4703 5.82316 10.4883 3.84117 8.05136 3.84117C5.6144 3.84117 3.63241 5.82316 3.63241 8.26012C3.63241 10.6971 5.6144 12.6791 8.05136 12.6791Z" fill="#07C0EA" />
              <path d="M14.1408 6.58887C15.0636 6.58887 15.8114 7.33667 15.8114 8.25945V22.8062C15.8114 23.7561 16.8134 24.5582 17.999 24.5582C19.1847 24.5582 20.1867 23.7561 20.1867 22.8062V8.25945C20.1867 7.33667 20.9345 6.58887 21.8573 6.58887C22.7801 6.58887 23.5279 7.33667 23.5279 8.25945V22.8062C23.5279 25.6145 21.0474 27.8994 17.9983 27.8994C14.9493 27.8994 12.4688 25.6145 12.4688 22.8062V8.25945C12.4688 7.33667 13.2165 6.58887 14.1393 6.58887H14.1408Z" fill="#07C0EA" />
              <path d="M1.79754 15.9551C2.72032 15.9551 3.46812 16.7029 3.46812 17.6257C3.46812 21.5075 4.97944 25.1565 7.72423 27.9013C10.469 30.6461 14.1187 32.1574 17.9999 32.1574C21.881 32.1574 25.5307 30.6461 28.2755 27.9013C31.0203 25.1565 32.5316 21.5068 32.5316 17.6257C32.5316 16.7029 33.2794 15.9551 34.2022 15.9551C35.125 15.9551 35.8728 16.7029 35.8728 17.6257C35.8728 22.4003 34.0136 26.8885 30.6375 30.2647C27.2613 33.6409 22.7731 35.5 17.9984 35.5C13.2238 35.5 8.73558 33.6409 5.35941 30.2647C1.9861 26.8885 0.126953 22.4003 0.126953 17.6264C0.126953 16.7036 0.874753 15.9558 1.79754 15.9558V15.9551Z" fill="#4A96FC" />
            </svg>
            <h3>Not everyone is online?</h3>
            <p>Voice reaches everyone</p>
          </div>
        </div>
        <div className="joble">
          <h2>
            What <span className="joble-highlight">Joble</span> Does
          </h2>
          <div className="badge brain-badge">
            Three products, one brain
          </div>
        </div>
        <div className="service-section">
          <div className="services">
            <div
              className="service"
              onClick={() => handleImageChange(outbound2)}
            >
              <h3><b>Inbound AI Receptionist</b> </h3>
              <p>
                <b>Answers every call. Qualifies. Books meetings. </b>
              </p>
              <ul>
                <li>Real time calendar sync</li>
                <li>Instant warm transfer</li>
                <li>Call recording & transcript (optional)</li>
              </ul>
              <p className="outcome">
                Outcome: <br /> More bookings, faster response, zero missed calls
              </p>
            </div>
            <div
              className="service"
              onClick={() => handleImageChange(outboundAI)}
            >
              <h3> <b>Outbound AI Caller</b>  </h3>
              <p>
                <b>Calls the lists you don’t have time to call. .</b>
              </p>
              <ul>
                <li>Show-up reduction: reminders, confirmations, reschedules</li>
                <li>Instant warm transferRevenue outreach: re-engage leads, promote offers </li>
                <li>Surveys: collect voice responses when internet is weak</li>
              </ul>
              <p className="outcome">
                Outcome: <br />Fewer no-shows. More pipeline. Real data.
              </p>
            </div>
            <div
              className="service"
              onClick={() => handleImageChange(phone_statement)}
            >
              <h3> <b>Phone Storefront</b> </h3>
              <p>
                <b>Let customers book or order by phone.</b>
              </p>
              <ul>
                <li>Upload services or products </li>
                <li>Guided voice flow, no web friction </li>
                <li>Perfect for professional services, clinics, salons, repairs, local services</li>
              </ul>
              <p className="outcome">
                Outcome: <br /> More conversions. Less drop-off. Happier customers.
              </p>
            </div>
          </div>
          <div className="service-pics">
            <img
              key={activeImage}
              src={activeImage}
              className="fade-image"
              alt="Service Illustration"
            />
          </div>
        </div>
        <div className="landing_section">
          <div className="landing">
            <h3>
              Everything lands in one timeline: calls, notes, transcripts,
              outcomes
            </h3>
            <button className="type_button">
              See it in the demo{" "}
              <span className="arrow">
                <img src={arrow} alt="" />
              </span>
            </button>
          </div>
          <div className="landing-frame">
            <img src={landing_frame} alt="" />
          </div>
        </div>

        <div className="results">
          <h1>Results you can feel</h1>
          <div className="result-cards">
            <div className="result-card">
              <img src={video} alt="" className="result_icon" />
              <h4>5x more meetings</h4>
              <p>from answered + outbound calls</p>
            </div>
            <div className="result-card">
              <img src={people} alt="" className="people_icon" />
              <h4>60–80% fewer no-shows</h4>
              <p>from answered + outbound calls</p>
            </div>
            <div className="result-card">
              <img src={hand_result} alt="" className="result_icon" />
              <h4>Inclusive by default</h4>
              <p>from answered + outbound calls</p>
            </div>
            <div className="result-card">
              <img src={clock} alt="" className="clock_icon" />
              <h4>40hrs saved weekly</h4>
              <p>from answered + outbound calls</p>
            </div>
            <div className="result-card">
              <img src={web} alt="" className="result_icon" />
              <h4>100+</h4>
              <p>languages</p>
            </div>
          </div>
          <p className="mileage">(Your mileage may vary. We’ll model your ROI before launch.) </p>
        </div>
        <div className="howItWorks" style={{ textAlign: "center" }}>
          <h1>How it works</h1>
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
          <button className="type_button" id="cons_home_btn">
            Book a 20 mins consult{" "}
            <span className="arrow">
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>
        <div className="roi" style={{ textAlign: "center" }}>
          <h1>Fast ROI (Show me the way)</h1>
          <div className="roi_math">
            <div className="calculations">
              <div className="other roi_border">
                <p> One booked meeting</p>
              </div>
              <div className="cost roi_border">
                <p>Joble Cost per minute from</p>
                <h3>€0.75 + €0.50</h3>
                <p>per confirmed booking</p>
              </div>
            </div>
            <div className="break-even">
              <div className="roi_border extra">
                <p>
                  {" "}
                  <span className="small">You break even when </span>
                  <br /> <br />
                  <span className="tt-bold">
                    {" "}
                    <b>
                      extra bookings × €X ≥ minutes × €0.75 + bookings × €0.50
                    </b>{" "}
                  </span>
                </p>
              </div>

              <div className="example small bolder">
                {" "}
                <b>
                  Example: 60 minutes + 10 bookings ≈ €75 + €5 = €80 → one
                  closed deal often covers the month.
                </b>
              </div>
            </div>
          </div>
          <button className="type_button" id="cal_home_btn">
            <span>
              <img src={group} alt="" />
            </span>{" "}
            Run the cost calculator{" "}
            <span className="arrow">
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>
        <div className="trust_badge badge">
          Trust & Security
        </div>
        <div className="compliance">
          <h1>Built for <span className="joble-highlight">EU compliance</span></h1>
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
        <div className="stack-section">
          <h1>Works with your stack</h1>
          <div className="stack-work">
            <div className="stacks">
              <div className="stack">
                <h3>
                  Free Calendars{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="26"
                      viewBox="0 0 25 26"
                      fill="none"
                    >
                      <path
                        d="M8.4502 2.86353V6.91766M16.5585 2.86353V6.91766"
                        stroke="#0EC940"
                        stroke-width="1.47414"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.5988 4.89062H5.40939C4.28987 4.89062 3.38232 5.79817 3.38232 6.91769V21.1071C3.38232 22.2267 4.28987 23.1342 5.40939 23.1342H19.5988C20.7184 23.1342 21.6259 22.2267 21.6259 21.1071V6.91769C21.6259 5.79817 20.7184 4.89062 19.5988 4.89062Z"
                        stroke="#0EC940"
                        stroke-width="1.47414"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.38232 10.9724H21.6259"
                        stroke="#0EC940"
                        stroke-width="1.47414"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </h3>
                <div className="feature-items">
                  <div className="feature-selection">
                    With meeting conferencing or google{" "}
                  </div>
                  <div className="feature-selection">Google </div>
                  <div className="feature-selection">Microsoft </div>
                </div>
              </div>
              <div className="stack">
                <h3>
                  CRMs (via Zapier/API){" "}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path d="M22.208 7.79167C22.208 10.0937 18.0101 11.9583 12.833 11.9583C7.65592 11.9583 3.45801 10.0937 3.45801 7.79167M22.208 7.79167C22.208 5.48958 18.0101 3.625 12.833 3.625C7.65592 3.625 3.45801 5.48958 3.45801 7.79167M22.208 7.79167V13M3.45801 7.79167V13M22.208 13C22.208 15.3021 18.0101 17.1667 12.833 17.1667C7.65592 17.1667 3.45801 15.3021 3.45801 13M22.208 13V18.2083C22.208 20.5104 18.0101 22.375 12.833 22.375C7.65592 22.375 3.45801 20.5104 3.45801 18.2083V13" stroke="#9A05EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </h3>
                <div className="feature-items">
                  <div className="feature-selection">Hubspot</div>
                  <div className="feature-selection">Hardrive </div>
                  <div className="feature-selection">Zoho </div>
                  <div className="feature-selection">Custom webhooks </div>
                </div>
              </div>
              <div className="stack">
                <h3>
                  Voice & logs{" "}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                      <path d="M12.8385 23.1354C18.4362 23.1354 22.9738 18.5978 22.9738 13.0001C22.9738 7.40233 18.4362 2.86475 12.8385 2.86475C7.24071 2.86475 2.70312 7.40233 2.70312 13.0001C2.70312 18.5978 7.24071 23.1354 12.8385 23.1354Z" stroke="#F79521" stroke-opacity="0.47" stroke-width="2.02707" />
                      <path d="M15.8786 9.95944V16.0406M18.9192 11.9865V14.0136M9.79743 9.95944V16.0406M6.75684 11.9865V14.0136M12.838 7.93237V18.0677" stroke="#F79521" stroke-opacity="0.47" stroke-width="2.02707" stroke-linecap="round" />
                    </svg>
                  </span>
                </h3>
                <div className="feature-items">
                  <div className="feature-selection">
                    Searchable transcripts, call outcomes, and next steps in one
                    view{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gain-section">
          <div className="gain-joble">
            <svg xmlns="http://www.w3.org/2000/svg" width="115" height="115" viewBox="0 0 115 115" fill="none">
              <rect width="115" height="115" rx="57.5" fill="#07C0EA" />
              <path d="M75.8712 26C83.6954 26 90.0608 32.3654 90.0608 40.1896C90.0608 41.8769 88.6934 43.2443 87.0061 43.2443C85.3187 43.2443 83.9514 41.8769 83.9514 40.1896C83.9514 35.7348 80.3272 32.1094 75.8712 32.1094C71.4152 32.1094 67.7911 35.7335 67.7911 40.1896C67.7911 41.8769 66.4237 43.2443 64.7364 43.2443C63.049 43.2443 61.6816 41.8769 61.6816 40.1896C61.6816 32.3654 68.047 26 75.8712 26Z" fill="white" />
              <path d="M39.4897 26C47.3139 26 53.6793 32.3654 53.6793 40.1896C53.6793 48.0138 47.3139 54.3791 39.4897 54.3791C31.6655 54.3791 25.2988 48.0138 25.2988 40.1896C25.2988 32.3654 31.6655 26 39.4897 26ZM39.4897 48.2697C43.9444 48.2697 47.5699 44.6456 47.5699 40.1896C47.5699 35.7335 43.9457 32.1094 39.4897 32.1094C35.0337 32.1094 31.4096 35.7335 31.4096 40.1896C31.4096 44.6456 35.0337 48.2697 39.4897 48.2697Z" fill="white" />
              <path d="M50.6247 37.135C52.312 37.135 53.6794 38.5024 53.6794 40.1897V66.7888C53.6794 68.5258 55.5117 69.9924 57.6797 69.9924C59.8476 69.9924 61.6799 68.5258 61.6799 66.7888V40.1897C61.6799 38.5024 63.0473 37.135 64.7346 37.135C66.4219 37.135 67.7893 38.5024 67.7893 40.1897V66.7888C67.7893 71.924 63.2536 76.1018 57.6784 76.1018C52.1031 76.1018 47.5674 71.924 47.5674 66.7888V40.1897C47.5674 38.5024 48.9348 37.135 50.6221 37.135H50.6247Z" fill="white" />
              <path d="M28.0547 54.2617C29.742 54.2617 31.1094 55.6291 31.1094 57.3164C31.1094 64.4145 33.8729 71.0868 38.8918 76.1057C43.9107 81.1246 50.5843 83.8881 57.6811 83.8881C64.7778 83.8881 71.4514 81.1246 76.4703 76.1057C81.4893 71.0868 84.2527 64.4132 84.2527 57.3164C84.2527 55.6291 85.6201 54.2617 87.3074 54.2617C88.9948 54.2617 90.3622 55.6291 90.3622 57.3164C90.3622 66.047 86.9627 74.2538 80.7892 80.4272C74.6158 86.6006 66.409 90.0001 57.6785 90.0001C48.9479 90.0001 40.7411 86.6006 34.5677 80.4272C28.3995 74.2538 25 66.047 25 57.3177C25 55.6304 26.3674 54.263 28.0547 54.263V54.2617Z" fill="white" />
            </svg>
          </div>
          <div className="value-gain">
            <h1>Who gets value on day one </h1>
            <div className="long-arrow"></div>
            <h1>Gain</h1>
          </div>
          <div className="gain-container">
            <div className="gain-list">
              <ol>
                <li>Healthcare & Dental</li>
                <li>Clinics & Wellness</li>
                <li>Local Services & Repairs</li>
                <li>Retail & Hospitality</li>
                <li>Professional Services</li>
                <li>Public Sector & NGOs</li>
              </ol>
            </div>
            <div className="gains">

              <div className="gain-border">
                <div className="gain-bg">
                  <ul>
                    <li>Confirmations</li>
                    <li>Waitlist fills</li>
                    <li>Fewer no-shows</li>
                  </ul>
                </div>
              </div>
              <div className="gain-button">
                <button className="type_button" id='cal_home_btn'>
                  <span></span> See your use case
                  <span className="arrow">
                    <img src={arrow} alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="badge fair_badge">Simple & Fair</div>
        <h1>Pricing</h1>
        <div className="pricing">
          <div className="pricing-card">
            <img src={call} alt="" className="icon" />
            <h3>Usage</h3>
            <h3> €1.50/min (NL)</h3>
            <h3>€1.50/min (UK)</h3>
          </div>
          <div className="pricing-card">
            <img src={calendar2} alt="" className="icon" />
            <h3>Per booking added</h3>
            <h3>€0.50/meeting</h3>
          </div>
          <div className="pricing-card">
            <img src={platform} alt="" className="icon" />
            <h3 id="platform">Platform (optional)</h3>
            <h3>€10/user</h3>
            <p>Collaboration tools, advanced routing & analytics</p>
            <p>Volume & nonprofit pricing available.</p>
          </div>
        </div>
        <div className="pricing-button">
          <button className="type_button">
            <span></span> Get an instant estimate
            <span className="arrow">
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>
        <div className="video-container">
          <div className="vid-text">
            <h2>See it in 2 minutes</h2>
            <p>Inbound receptionist demo: answers → qualifies → books </p>
            <p>Outbound reminders demo: reduce no-shows </p>
            <p>Phone storefront demo: voice-driven booking/purchase </p>
            <div className="vid-button">
              <button className="type_button">Try the live web demo</button>
            </div>
          </div>
          <div className="video-frame">
            <video
              ref={videoRef}
              onClick={handleVideoClick}
              controls
              className="video"
            >
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="testimonials">
          <div className="test-badge badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M3.55561 11.5473C2.86877 10.8181 2.5 9.99988 2.5 8.67341C2.5 6.34045 4.13767 4.24899 6.52039 3.21533L7.11552 4.13374C4.89203 5.33681 4.45745 6.89721 4.28376 7.88121C4.64175 7.69608 5.11039 7.63095 5.56981 7.67355C6.77272 7.78508 7.7208 8.77255 7.7208 9.99988C7.7208 11.2885 6.67611 12.3332 5.38744 12.3332C4.67207 12.3332 3.98797 12.0062 3.55561 11.5473ZM10.2223 11.5473C9.53547 10.8181 9.16667 9.99988 9.16667 8.67341C9.16667 6.34045 10.8043 4.24899 13.1871 3.21533L13.7822 4.13374C11.5587 5.33681 11.1241 6.89721 10.9504 7.88121C11.3084 7.69608 11.7771 7.63095 12.2365 7.67355C13.4394 7.78508 14.3875 8.77255 14.3875 9.99988C14.3875 11.2885 13.3428 12.3332 12.0541 12.3332C11.3387 12.3332 10.6547 12.0062 10.2223 11.5473Z" fill="#242A33" />
            </svg>Testimonials
          </div>
          <h1>Proof & Trust</h1>
          <p className="proof">
            Joble cut missed calls to near zero and doubled our booked
            consults
          </p>
          <p id="ops">Ops Lead, Multi-site clinic (NL) </p>
          <div className="test-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.78227 8.00047L5.48242 4.70062L6.42524 3.75781L10.6679 8.00047L6.42524 12.2431L5.48242 11.3003L8.78227 8.00047Z"
                fill="#242A33"
              />
            </svg>

          </div>
        </div>
        <div className="fast-badge badge">Fast answers</div>
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
        <div className="curve">
          <ResponsiveSVG className="resp-svg">
            <div className="curve-text">
            <h1>Ready to stop losing revenue to missed calls and no-shows?</h1>
            <div className="buttons">
              <button className="white_bg_button">
                {" "}
                Book a 20 mins consult
              </button>
              <button className="type_button" id="transparent_btn">
                {" "}
                Try the live web demo
              </button>
            </div>
            <div className="email">
              <p>
                Prefer email?{" "}
                <a href="mailto:sales@joble.app">sales@joble.app</a>
              </p>
            </div>
          </div>
          </ResponsiveSVG>

          
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
