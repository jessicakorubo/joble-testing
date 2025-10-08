import React from 'react';
import {useMediaQuery} from 'react-responsive';
import "../styles/responsiveSVG.css";

interface ResponsiveSVGProps {
  className?: string;
  children?: React.ReactNode;
}


const ResponsiveSVG: React.FC<ResponsiveSVGProps> = ({className = "", children }) => {

    //detect screen size using react responsive
    const isMobile = useMediaQuery({maxWidth: 890});

  return (
    <div className='resp-svg'>
        {isMobile ?  (
            //mobile svg
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="469" viewBox="0 0 430 469" fill="none">
            <path d="M-579 0H1009V320.513C358.128 518.652 11.1324 518.339 -579 320.513V0Z" fill="url(#paint0_linear_2474_4751)" />
            <defs>
              <linearGradient id="paint0_linear_2474_4751" x1="215" y1="46.1681" x2="1148.83" y2="229.687" gradientUnits="userSpaceOnUse">
                <stop stop-color="#07C0EA" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
            <svg
            
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="391"
            viewBox="0 0 1440 391"
            fill="none"
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
                <stop stop-color="#07C0EA" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        )}
        <div className='absolute'>{children}</div>
    </div>
  )
}

export default ResponsiveSVG