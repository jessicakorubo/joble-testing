import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout';
import big_cal from "../assets/big-calc.png";
import "../styles/calculator.css";
import ResponsiveSVG from '../components/ResponsiveSVG';

type UsageFormData = {
    country: string;
    callMinutes: string; // <— make these strings
    meetingBookings: string;
    meetingValue: string;
};

const Calculator: React.FC = () => {
    const [formData, setFormData] = useState<UsageFormData>({
        country: "",
        callMinutes: "",
        meetingBookings: "",
        meetingValue: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Saved form data:", formData);
        localStorage.setItem("usageData", JSON.stringify(formData));
    };
    return (
        <div>
            <MainLayout>
                <div className='calculator'>
                    <div className="calc-page">
                        <div className="calc-heading">
                            <img src={big_cal} alt="" />
                            <div className="cal-text">
                                <h2>Cost Calculator</h2>
                                <p>See how much you could save by switching to joble</p>
                            </div>
                        </div>
                        <div className="cal-grid">
                            <div className="left-cal-section">
                                <div className="grid-card left-grid">
                                    <div className="details">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M24.3486 35.4169C30.4615 35.4169 35.4169 30.4615 35.4169 24.3486C35.4169 18.2357 30.4615 13.2803 24.3486 13.2803C18.2357 13.2803 13.2803 18.2357 13.2803 24.3486C13.2803 30.4615 18.2357 35.4169 24.3486 35.4169Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M20.929 28.5787C21.257 28.9924 21.6794 29.3214 22.1608 29.538C22.6422 29.7546 23.1686 29.8526 23.6957 29.8237H25.3565C26.0904 29.8237 26.7942 29.5322 27.3132 29.0132C27.8321 28.4943 28.1236 27.7905 28.1236 27.0566C28.1236 26.3227 27.8321 25.6189 27.3132 25.1C26.7942 24.5811 26.0904 24.2895 25.3565 24.2895H23.5574C22.8235 24.2895 22.1197 23.998 21.6007 23.4791C21.0818 22.9602 20.7903 22.2563 20.7903 21.5225C20.7903 20.7886 21.0818 20.0848 21.6007 19.5658C22.1197 19.0469 22.8235 18.7554 23.5574 18.7554H25.2182C25.7486 18.6956 26.2854 18.7796 26.7722 18.9987C27.2589 19.2177 27.6778 19.5637 27.9849 20.0004M24.3874 17.2337V31.0687M13.7457 20.577C13.3724 20.2271 13.0752 19.8041 12.8726 19.3342C12.67 18.8644 12.5664 18.3579 12.5682 17.8462V14.2487C12.5662 13.7576 12.6615 13.2709 12.8486 12.8168C13.0356 12.3627 13.3107 11.9502 13.658 11.6029C14.0053 11.2557 14.418 10.9807 14.8721 10.7937C15.3263 10.6068 15.8129 10.5116 16.304 10.5137C16.859 10.5237 17.4055 10.6523 17.9066 10.8909C18.4078 11.1295 18.8522 11.4726 19.2099 11.897M10.9082 14.5254H15.6124M10.9082 17.292H15.6124" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3505 26.4787C11.402 26.0644 9.60143 25.1319 8.13871 23.7797C6.67599 22.4274 5.60532 20.7054 5.03964 18.7954C4.47396 16.8854 4.43423 14.8581 4.92465 12.9274C5.41507 10.9967 6.41745 9.23411 7.82607 7.82558C9.23469 6.41704 10.9973 5.41477 12.9281 4.92448C14.8588 4.43418 16.8861 4.47404 18.7961 5.03984C20.7061 5.60564 22.428 6.67642 23.7801 8.13923C25.1323 9.60204 26.0646 11.4027 26.4788 13.3512" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p>Your Usage Details</p>
                                    </div>
                                    <p>Enter your expected usage to calculate costs</p>
                                    <div className="form">
                                        <form className="usage-form" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="country">Country/Region</label>
                                                <select id="country" name="country" value={formData.country} onChange={handleChange}>
                                                    <option value="">Select country</option>
                                                    <option value="uk">United Kingdom</option>
                                                    <option value="us">United States</option>
                                                    <option value="de">Germany</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="call-minutes">Monthly call minutes</label>
                                                <input id="call-minutes" type="number" name="callMinutes" placeholder="e.g. 100" value={formData.callMinutes}
                                                    onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="meeting-bookings">Monthly meeting bookings</label>
                                                <input id="meeting-bookings" name="meetingBookings"
                                                    type="number"
                                                    value={formData.meetingBookings}
                                                    onChange={handleChange}
                                                    placeholder="e.g. 100" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="meeting-value">Meeting value</label>
                                                <input id="meeting-value" name="meetingValue"
                                                    type="number"
                                                    value={formData.meetingValue}
                                                    onChange={handleChange}
                                                    placeholder="e.g. 100" />
                                            </div>
                                            <button type="submit" className="calculate-btn">Calculate</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="right-cal-section">
                                <div className="content grid-card ">
                                    <div className="comp" id='comparison'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="42"
                                            height="42"
                                            viewBox="0 0 42 42"
                                            fill="none"
                                        >
                                            <path
                                                d="M10.3129 25.297V36.4695C10.3129 36.9254 10.1318 37.3626 9.80948 37.685C9.48714 38.0073 9.04994 38.1884 8.59407 38.1884H5.15636C4.70049 38.1884 4.26329 38.0073 3.94094 37.685C3.61859 37.3626 3.4375 36.9254 3.4375 36.4695V25.297C3.4375 24.8411 3.61859 24.4039 3.94094 24.0816C4.26329 23.7592 4.70049 23.5781 5.15636 23.5781H8.59407C9.04994 23.5781 9.48714 23.7592 9.80948 24.0816C10.1318 24.4039 10.3129 24.8411 10.3129 25.297ZM10.3129 25.297H20.1964C20.7662 25.297 21.3127 25.5233 21.7156 25.9263C22.1186 26.3292 22.3449 26.8757 22.3449 27.4456C22.3449 28.0154 22.1186 28.5619 21.7156 28.9648C21.3127 29.3678 20.7662 29.5941 20.1964 29.5941H16.3289"
                                                stroke="#333333"
                                                strokeWidth="2.57828"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M18.9068 29.5944H25.2528C26.7135 29.5942 28.1361 29.1288 29.3145 28.2657L33.8333 24.9569C34.3084 24.5892 34.901 24.4069 35.5007 24.4439C36.1003 24.4809 36.666 24.7347 37.0923 25.158C37.3333 25.3985 37.5216 25.6865 37.6455 26.0036C37.7693 26.3208 37.8259 26.6602 37.8117 27.0003C37.7975 27.3405 37.7127 27.674 37.5629 27.9797C37.413 28.2854 37.2012 28.5566 36.941 28.7762L29.3832 34.9263C28.157 35.9245 26.6242 36.4696 25.0431 36.4698H10.3125M32.6576 12.4058C32.6576 14.6852 31.7522 16.8711 30.1404 18.4829C28.5287 20.0946 26.3427 21.0001 24.0634 21.0001C21.784 21.0001 19.598 20.0946 17.9863 18.4829C16.3745 16.8711 15.4691 14.6852 15.4691 12.4058C15.4691 10.1265 16.3745 7.94047 17.9863 6.32873C19.598 4.71699 21.784 3.81152 24.0634 3.81152C26.3427 3.81152 28.5287 4.71699 30.1404 6.32873C31.7522 7.94047 32.6576 10.1265 32.6576 12.4058Z"
                                                stroke="#333333"
                                                strokeWidth="2.57828"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <h3>Your Cost Comparison</h3>
                                    </div>
                                    <div className="center-joble">
                                        <p className="no-joble">Without Joble</p>
                                        <div className="price-section">
                                            <div className="monthly_price">
                                                <span className="price-month">€183.3</span> <br />
                                                <p className="per-time">Per month</p>
                                            </div>
                                            <div className="yearly_price">
                                                <span className="price-year">€183.3</span> <br />
                                                <p className="per-time">Lost yearly</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* <div className="toggle">
                                        <button className="active">Monthly</button>
                                        <button>Yearly</button>
                                    </div> */}
                                    <div className="savings">
                                        <span className="badge">57% Savings with Joble</span>
                                        <div className="saved">
                                            <div className="monthly-saving saves">
                                                <p>Monthly</p>
                                                <p>€100.00</p>
                                            </div>
                                            <div className="yearly-saving saves">
                                                <p>Yearly</p>
                                                <p>€1200.00</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                    <form action="" className="quote">
                                        <div className="quote-container">
                                            <input type="email" name="email" id="email" placeholder="email address" />
                                            <button type="submit">Send my quote</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="grid-card impact-section" id='impact-section'>
                                    <div className="comp">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="42"
                                            height="42"
                                            viewBox="0 0 42 42"
                                            fill="none"
                                        >
                                            <path
                                                d="M10.3129 25.297V36.4695C10.3129 36.9254 10.1318 37.3626 9.80948 37.685C9.48714 38.0073 9.04994 38.1884 8.59407 38.1884H5.15636C4.70049 38.1884 4.26329 38.0073 3.94094 37.685C3.61859 37.3626 3.4375 36.9254 3.4375 36.4695V25.297C3.4375 24.8411 3.61859 24.4039 3.94094 24.0816C4.26329 23.7592 4.70049 23.5781 5.15636 23.5781H8.59407C9.04994 23.5781 9.48714 23.7592 9.80948 24.0816C10.1318 24.4039 10.3129 24.8411 10.3129 25.297ZM10.3129 25.297H20.1964C20.7662 25.297 21.3127 25.5233 21.7156 25.9263C22.1186 26.3292 22.3449 26.8757 22.3449 27.4456C22.3449 28.0154 22.1186 28.5619 21.7156 28.9648C21.3127 29.3678 20.7662 29.5941 20.1964 29.5941H16.3289"
                                                stroke="#333333"
                                                strokeWidth="2.57828"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M18.9068 29.5944H25.2528C26.7135 29.5942 28.1361 29.1288 29.3145 28.2657L33.8333 24.9569C34.3084 24.5892 34.901 24.4069 35.5007 24.4439C36.1003 24.4809 36.666 24.7347 37.0923 25.158C37.3333 25.3985 37.5216 25.6865 37.6455 26.0036C37.7693 26.3208 37.8259 26.6602 37.8117 27.0003C37.7975 27.3405 37.7127 27.674 37.5629 27.9797C37.413 28.2854 37.2012 28.5566 36.941 28.7762L29.3832 34.9263C28.157 35.9245 26.6242 36.4696 25.0431 36.4698H10.3125M32.6576 12.4058C32.6576 14.6852 31.7522 16.8711 30.1404 18.4829C28.5287 20.0946 26.3427 21.0001 24.0634 21.0001C21.784 21.0001 19.598 20.0946 17.9863 18.4829C16.3745 16.8711 15.4691 14.6852 15.4691 12.4058C15.4691 10.1265 16.3745 7.94047 17.9863 6.32873C19.598 4.71699 21.784 3.81152 24.0634 3.81152C26.3427 3.81152 28.5287 4.71699 30.1404 6.32873C31.7522 7.94047 32.6576 10.1265 32.6576 12.4058Z"
                                                stroke="#333333"
                                                strokeWidth="2.57828"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <h3>Opportunity Impact</h3>
                                    </div>
                                    <div className="impact">
                                        <div className="impact-card">
                                            <div className="impact-metric">
                                                <span className="number">5</span>
                                                <span className="label">Extra Meetings<br />Per Month</span>
                                            </div>
                                        </div>
                                        <div className="impact-card">
                                            <div className="impact-metric">
                                                <span className="number">€5</span>
                                                <span className="label">Revenue Potential<br />Per Month</span>
                                            </div>
                                        </div>
                                        <div className="impact-card">
                                            <div className="impact-metric">
                                                <span className="number">5%</span>
                                                <span className="label">Return on<br /> <span className='lower-impact'>Investment</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <ResponsiveSVG
                        title="Ready to stop losing revenue to missed calls and no shows?"
                        paragraph=""
                        link="sales@joble.app"
                    />
                </div>
            </MainLayout>
        </div>
    )
}

export default Calculator