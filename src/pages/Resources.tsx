import React, { useRef } from "react";
import "../styles/resources.css";
import MainLayout from "../layout/MainLayout";
import arrow from "../assets/arrow-right.svg";

// ✅ import your resource images
import resource_pic from "../assets/resources-blog.png";

const Resources = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const resources = [
        {
            id: 1,
            image: resource_pic,
            title:
                "12 tools solopreneurs and small businesses rely on to get more done",
            description:
                "Solopreneurs and small business owners share the tech they use to run and grow their businesses.",
            link: "#",
        },
        {
            id: 2,
            image: resource_pic,
            title: "How small teams automate customer communication and save hours",
            description:
                "Discover how automating your workflow can help your business save time and scale faster.",
            link: "#",
        },
        {
            id: 3,
            image: resource_pic,
            title: "AI tools changing how startups engage with customers",
            description:
                "Startups are embracing automation. Learn which tools make the biggest impact today.",
            link: "#",
        },
        {
            id: 4,
            image: resource_pic,
            title: "Customer retention strategies that actually work",
            description:
                "Learn proven ways to improve customer engagement and boost loyalty with smart automation.",
            link: "#",
        },
        {
            id: 5,
            image: resource_pic,
            title: "The future of AI-powered scheduling tools",
            description:
                "Explore how AI is transforming how businesses manage appointments, meetings, and workflows.",
            link: "#",
        },
    ];

    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const scrollAmount = direction === "left" ? -350 : 350;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <MainLayout>
            <div className="resources-page">
                <h2>Everything You Need—Stories, Facts, Jobs, and a Direct Line to us.</h2>

                <div className="resources-carousel-wrapper">
                    {/* Carousel */}
                    <div className="resources-carousel" ref={carouselRef}>
                        {resources.map((item) => (
                            <div key={item.id} className="resource-card">
                                <div className="resource-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href={item.link} className="read-more-btn">
                                    Read now →
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* ✅ Buttons under carousel */}
                    <div className="scroll-buttons">
                        <button className="scroll-btn-left scroller" onClick={() => scroll("left")}>
                            ‹
                        </button>
                        <button className="scroll-btn-right scroller" onClick={() => scroll("right")}>
                            ›
                        </button>
                    </div>
                </div>

                <button className="see-all">
                    See all
                </button>

                <div className="badge compare-badge">
                    Compare Joble
                </div>
                <h2 className="fact">
                    Numbers Don't Lie; <br />
                    Screenshots Don't Either
                </h2>
                <div className="curved-grey-card score-card">
                    <p>Side-by-side scorecards vs. Microsoft 365, Google Workspace, Slack + Zoom stacks. Transparent pricing calculators and live feature checklists</p>
                    <p className="spoiler">Spoiler: we’re 70 % cheaper and 100 % data-sovereign</p>
                </div>

                <div className="calc">
                    <button className="type_button price-hero" id='cal_home_btn'>

                        Run the cost calculator{" "}
                        <span className="arrow">
                            <img src={arrow} alt="" />
                        </span>
                    </button>
                </div>
                <div className="badge career-badge">
                    Careers
                </div>
                <h2 className="clock">Stop Clock punching; Start
                    Building the Post-cloud Future
                </h2>
                <div className="curved-grey-card score-card">
                    <p>Remote-first, Africa-and-Europe team, 40 % women in tech roles, equity on day one.
                        Open seats in Go/Rust back-end, React front-end, ML, DevRel, customer success</p>
                    <p className="spoiler">Perk we’re proud of—“Own Your Friday”: no meetings, just create.</p>
                </div>
                 <div className="apply">
                    <button className="type_button price-hero" id='cal_home_btn'>

                        Click to apply{" "}
                        <span className="arrow">
                            <img src={arrow} alt="" />
                        </span>
                    </button>
                </div>
            </div>
        </MainLayout>
    );
};

export default Resources;
