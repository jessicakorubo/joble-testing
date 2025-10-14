import React from "react";
import "../styles/pricing.css";

interface FeaturesSectionProps {
    title?: string;
    features: string[];
    fullWidthLast?: boolean; // NEW prop
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
    title = "What's Included (By default)",
    features,
    fullWidthLast = true,
}) => {
    return (
        <section className="includes">
            <h2>{title}</h2>
            <section className="w-full flex flex-col items-center py-12 offers-con">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl w-full">
                    {features.map((feature, idx) => {
                        const isLast = idx === features.length - 1;
                        const shouldBeFull = fullWidthLast && isLast;

                        return (
                            <div
                                key={idx}
                                className={`flex items-center gap-2 bg-white border px-4 py-3 shadow-sm hover:shadow-md transition feature-card ${shouldBeFull ? "full" : ""
                                    }`}
                            >
                                <svg className="feature-icon-svg" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <path d="M11.4119 30.5725L22.702 30.6796C22.8371 30.6822 22.9694 30.719 23.0864 30.7866C23.2035 30.8541 23.3014 30.9503 23.3712 31.066L29.109 40.7899C29.1972 40.9371 29.3309 41.0514 29.4899 41.1158C29.6489 41.1801 29.8246 41.1909 29.9902 41.1465C30.1559 41.1021 30.3026 41.0049 30.4081 40.8697C30.5137 40.7345 30.5723 40.5686 30.5751 40.3971L30.6822 29.107C30.6848 28.9719 30.7216 28.8396 30.7891 28.7226C30.8567 28.6056 30.9528 28.5076 31.0686 28.4378L40.7925 22.7C40.9396 22.6118 41.054 22.4781 41.1183 22.3191C41.1827 22.1601 41.1935 21.9845 41.1491 21.8188C41.1047 21.6531 41.0075 21.5064 40.8723 21.4009C40.7371 21.2954 40.5712 21.2367 40.3997 21.2339L29.1096 21.1269C28.9745 21.1243 28.8422 21.0875 28.7252 21.0199C28.6082 20.9523 28.5102 20.8562 28.4404 20.7405L22.7026 11.0165C22.6144 10.8694 22.4807 10.755 22.3217 10.6907C22.1627 10.6264 21.9871 10.6156 21.8214 10.66C21.6557 10.7044 21.509 10.8015 21.4035 10.9367C21.2979 11.0719 21.2393 11.2379 21.2365 11.4094L21.1294 22.6994C21.1269 22.8346 21.0901 22.9668 21.0225 23.0838C20.9549 23.2009 20.8588 23.2989 20.7431 23.3687L11.0191 29.1064C10.872 29.1946 10.7576 29.3283 10.6933 29.4873C10.6289 29.6463 10.6182 29.822 10.6625 29.9877C10.7069 30.1533 10.8041 30.3 10.9393 30.4056C11.0745 30.5111 11.2404 30.5697 11.4119 30.5725Z" fill="url(#paint0_linear_2288_2851)" stroke="#07C0EA" stroke-width="0.404751" stroke-linecap="round" stroke-linejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_2288_2851" x1="16.162" y1="16.1632" x2="35.6496" y2="35.6433" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#07C0EA" />
                                            <stop offset="0.5" stop-color="#07C0EA" />
                                            <stop offset="1" stop-color="#07C0EA" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span className="text-gray-800 text-sm">{feature}</span>
                            </div>
                        );
                    })}
                </div>
            </section>
        </section>
    );
};

export default FeaturesSection;
