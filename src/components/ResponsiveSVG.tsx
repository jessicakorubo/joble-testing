import React from 'react';
import { useMediaQuery } from 'react-responsive';
import "../styles/responsiveSVG.css";

interface ResponsiveSVGProps {
  className?: string;
  title: string;
  paragraph: string;
  link: string;
  linkText?: string; // optional, defaults to link itself
}

const ResponsiveSVG: React.FC<ResponsiveSVGProps> = ({
  className = "",
  title,
  paragraph,
  link,
  linkText
}) => {
  const isMobile = useMediaQuery({ maxWidth: 890 });

  return (
    <div className={`resp-svg ${className}`}>
      {isMobile ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 430 469"
          preserveAspectRatio="none"
          className="responsive-svg-shape"
        >
          <path
            d="M-579 0H1009V320.513C358.128 518.652 11.1324 518.339 -579 320.513V0Z"
            fill="url(#paint0_linear_2474_4751)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2474_4751"
              x1="215"
              y1="46.1681"
              x2="1148.83"
              y2="229.687"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#07C0EA" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 391"
          preserveAspectRatio="none"
          className="responsive-svg-shape"
        >
          <path
            d="M0 0H1440V283.256C849.789 427.028 535.133 426.801 0 283.256V0Z"
            fill="url(#paint0_linear_2208_15464)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2208_15464"
              x1="720"
              y1="33.5"
              x2="1549.47"
              y2="237.215"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#07C0EA" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      )}


      <div className="absolute curve-text">
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <div className="buttons">
          <button className="white_bg_button">Book a 20 mins consult</button>
          <button className="type_button" id="transparent_btn">Try the live web demo</button>
        </div>

        <div className="email">
          <p>
            Prefer email? <a href={`mailto:${link}`}>{linkText || link}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSVG;
