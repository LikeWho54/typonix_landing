import React from "react";
import { BsArrowRight } from "react-icons/bs";
import checkMark from "../../src/assets/Check Mark.svg";
import Pricingtoggle from "./Pricingtoggle";
import { useState } from "react";

function PricingSection() {
  const [enabled, setEnabled] = useState(false);
  const pricingOptions = [
    {
      name: "Starter",
      price: "$29",
      yearlyPrice: "$290",
      description:
        "Perfect for individual SEO professionals and small websites looking to get started.",
      features: [
        "Track up to 100 keywords",
        "5 competitor analysis reports",
        "Basic keyword research tools",
        "Monthly ranking reports",
        "Email support",
      ],
      backgroundColor: "#FFFFFF",
      buttonColor: "bg-blue-600",
      buttonTextColor: "text-white",
      tagColor: "bg-blue-100",
      tagTextColor: "text-blue-700",
    },
    {
      name: "Professional",
      price: "$79",
      yearlyPrice: "$790",
      description:
        "Ideal for agencies and growing businesses that need comprehensive SEO analytics.",
      features: [
        "Track up to 1,000 keywords",
        "Unlimited competitor analysis",
        "Advanced keyword gap analysis",
        "Weekly automated reports",
        "SERP feature tracking",
        "Priority support",
      ],
      backgroundColor: "rgb(59 130 246 / 0.05)",
      buttonColor: "bg-blue-600",
      buttonTextColor: "text-white",
      tagColor: "bg-blue-600",
      tagTextColor: "text-white",
    },
    {
      name: "Enterprise",
      price: "$199",
      yearlyPrice: "$1990",
      description:
        "For large organizations requiring white-label solutions and custom integrations.",
      features: [
        "Unlimited keyword tracking",
        "White-label reporting",
        "API access & integrations",
        "Custom competitor sets",
        "Dedicated account manager",
        "24/7 phone support",
      ],
      backgroundColor: "#FFFFFF",
      buttonColor: "bg-slate-900",
      buttonTextColor: "text-white",
      tagColor: "bg-slate-100",
      tagTextColor: "text-slate-700",
    },
  ];

  return (
    <div className="pricing max-w-5xl mx-auto py-10 border-b border-slate-100">
      <div className="featured-headline flex flex-col gap-y-2">
        <p
          className={`text-blue-600 rounded-full px-2.5 py-[1px] mt-10 text-center font-semibold`}
        >
          Pricing Plans
        </p>
        <h3 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xs mx-auto md:max-w-full md:mx-0 text-center font-bold leading-[1.15] text-slate-900">
          Choose the perfect plan for your SEO needs
        </h3>
        <div className="flex justify-center mt-14">
          <Pricingtoggle enabled={enabled} setEnabled={setEnabled} />
        </div>
        <div className="pricing-card grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 lg:py-12 lg:pb-20 lg:pt-8 relative">
          {pricingOptions.map((option, index) => (
            <div key={index} className="relative">
              <div
                className={`card pricing-card-box border border-slate-200 rounded-xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200`}
                style={{ backgroundColor: option.backgroundColor }}
              >
              <div className="border-b border-slate-500/50">
                <div className="p-5 flex flex-col gap-y-2">
                  <p
                    className={` rounded-full px-2.5 py-[1px] w-fit text-sm ${option.tagColor} ${option.tagTextColor}`}
                  >
                    {option.name}
                  </p>
                  <h3 className="mt-5 text-sm font-medium text-slate-500/70">
                    <span className="text-3xl font-bold text-slate-800">
                      {enabled ? option.yearlyPrice : option.price}
                    </span>{" "}
                    {enabled ? "/year" : "/month"}
                  </h3>
                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                    {option.description}
                  </p>
                  <button
                    className={`my-2 flex text-base lg:text-lg items-center justify-center rounded-full h-12 w-full font-bold  border border-slate-500 hover:shadow-lg hover:drop-shadow-lg transition duration-200 ${option.buttonColor} ${option.buttonTextColor}`}
                  >
                    <span
                      className="tracking-tight"
                      style={{ color: option.buttonTextColor }}
                    >
                      Select {option.name}
                    </span>
                    <BsArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
              <div className="pricing-features my-2.5 flex flex-col gap-y-5 p-5">
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
