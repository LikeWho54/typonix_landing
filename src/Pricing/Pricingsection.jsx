import React from "react";
import { BsArrowRight } from "react-icons/bs";
import checkMark from "../../src/assets/Check Mark.svg";

function PricingSection() {
  const pricingOptions = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description:
        "Perfect for getting started with SEO insights and testing our platform.",
      features: [
        "1 free blog post",
        "Basic SEO gap analysis",
        "Competitor keyword insights",
        "Email support",
      ],
      backgroundColor: "#FFFFFF",
      buttonColor: "bg-slate-600",
      buttonTextColor: "text-white",
      tagColor: "bg-slate-100",
      tagTextColor: "text-slate-700",
    },
    {
      name: "Monthly",
      price: "$79",
      period: "/month",
      description:
        "Most popular plan for businesses that need regular content and SEO insights.",
      features: [
        "New blog post every 2 days",
        "Advanced SEO gap analysis",
        "Automated content calendar",
        "Keyword research & tracking",
        "Priority support",
      ],
      backgroundColor: "rgb(59 130 246 / 0.05)",
      buttonColor: "bg-blue-600",
      buttonTextColor: "text-white",
      tagColor: "bg-blue-600",
      tagTextColor: "text-white",
      isPopular: true,
    },
    {
      name: "Yearly",
      price: "$799",
      period: "/year",
      description:
        "Best value for committed businesses with comprehensive SEO and content needs.",
      features: [
        "New blog post every 2 days",
        "Advanced SEO gap analysis",
        "Automated content calendar",
        "Keyword research & tracking",
        "Priority support",
        "Free blog setup",
      ],
      backgroundColor: "#FFFFFF",
      buttonColor: "bg-slate-900",
      buttonTextColor: "text-white",
      tagColor: "bg-slate-100",
      tagTextColor: "text-slate-700",
    },
  ];

  return (
    <div id="pricing" className="pricing max-w-5xl mx-auto py-10">
      <div className="featured-headline flex flex-col gap-y-2">
        <p
          className={`text-blue-600 rounded-full px-2.5 py-[1px] mt-10 text-center font-semibold`}
        >
          Pricing Plans
        </p>
        <h3 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xs mx-auto md:max-w-full md:mx-0 text-center font-bold leading-[1.15] text-slate-900">
          Choose the perfect plan for your SEO needs
        </h3>
        <div className="pricing-card grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 lg:py-12 lg:pb-20 lg:pt-8 relative">
          {pricingOptions.map((option, index) => (
            <div key={index} className="relative">
              <div
                className={`card pricing-card-box border border-slate-200 rounded-xl flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-200`}
                style={{ backgroundColor: option.backgroundColor }}
              >
              <div className="border-b border-slate-500/50">
                <div className="p-5 flex flex-col gap-y-2">
                  <div className="flex items-center gap-2">
                    <p
                      className={` rounded-full px-2.5 py-[1px] w-fit text-sm ${option.tagColor} ${option.tagTextColor}`}
                    >
                      {option.name}
                    </p>
                    {option.isPopular && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 text-sm font-medium text-slate-500/70">
                    <span className="text-3xl font-bold text-slate-800">
                      {option.price}
                    </span>
                    <span className="text-slate-600">{option.period}</span>
                  </h3>
                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                    {option.description}
                  </p>
                  <a
                    href="https://app.typonix.com/signup"
                    className={`my-2 flex text-base lg:text-lg items-center justify-center rounded-full h-12 w-full font-bold  border border-slate-500 hover:shadow-lg hover:drop-shadow-lg transition duration-200 ${option.buttonColor} ${option.buttonTextColor}`}
                  >
                    <span
                      className="tracking-tight"
                      style={{ color: option.buttonTextColor }}
                    >
                      {option.name === "Free" ? "Get Free SEO Gap Analysis" : 
                       option.name === "Monthly" ? "Get Free SEO Gap Analysis" : 
                       "Contact Us"}
                    </span>
                    <BsArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="pricing-features my-2.5 flex flex-col gap-y-5 p-5 flex-grow">
                {option.features.map((feature, index) => (
                  <div key={index} className="flex gap-x-3">
                    <img src={checkMark} alt="" />
                    <p className="text-slate-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              </div>
              {/* Vertical dividers */}
              {index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-0 -right-3 w-px h-full bg-slate-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
