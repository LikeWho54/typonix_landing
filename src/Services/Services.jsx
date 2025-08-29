import React from "react";
import code from "../../src/assets/code.svg";
import monitor from "../../src/assets/monitor.svg";
import contentWriting from "../../src/assets/file-text.svg";
import branding from "../../src/assets/heart.svg";
import illustrate from "../../src/assets/pen-tool.svg";
import motionGraphics from "../../src/assets/play-circle.svg";

const servicesData = [
  {
    title: "Keyword Research",
    description:
      "Discover high-impact keywords and analyze search volumes to drive targeted organic traffic",
    image: monitor,
  },
  {
    title: "Competitor Analysis",
    description:
      "Analyze competitor strategies and uncover gap opportunities in your market",
    image: code,
  },
  {
    title: "Content Optimization",
    description:
      "Optimize your content for search engines with data-driven keyword strategies",
    image: contentWriting,
  },
  {
    title: "Ranking Tracking",
    description:
      "Monitor your keyword rankings and track performance improvements over time",
    image: branding,
  },
  {
    title: "SEO Analytics",
    description:
      "Get detailed insights and reports on your SEO performance and opportunities",
    image: illustrate,
  },
  {
    title: "SERP Analysis",
    description:
      "Analyze search engine results pages to understand ranking factors and competition",
    image: motionGraphics,
  },
];

const Card = ({ title, description, image }) => {
  return (
    <div className="services-card-box border border-slate-200 rounded-xl p-6 flex flex-col gap-y-6 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300">
      <div className="h-16 w-16 flex items-center justify-center bg-blue-50 rounded-full">
        <img className="h-8 w-8" src={image} alt="" />
      </div>
      <div className="card-content flex flex-col gap-y-2">
        <h3 className="text-xl lg:text-2xl font-semibold text-slate-900">
          {title}
        </h3>
        <p className="text-base text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services max-w-5xl mx-auto px-0 py-10 border-b border-slate-100">
      <div className="services-headline flex flex-col lg:flex-row lg:items-center lg:justify-between px-10 lg:px-20 xl:px-0">
        <div className="left-service-part lg:w-1/2 flex flex-col justify-start items-start">
          <p className="text-blue-600 text-[15px] max-w-xs sm:max-w-sm sm:mx-auto md:mr-0 md:ml-0 pb-2 lg:pb-4 font-semibold">
            SEO Features
          </p>
          <h3 className="text-3xl lg:text-[44px] font-bold max-w-xs sm:max-w-4xl lg:max-w-sm sm:mx-auto md:mr-0 md:ml-0 leading-[1.15] text-slate-900">
            Powerful SEO tools to boost your rankings
          </h3>
        </div>
        <div className="right-service-part pt-5 lg:w-1/2">
          <p className="text-base max-w-xs mr-auto sm:max-w-4xl lg:max-w-sm lg:mx-auto lg:mr-0 lg:ml-auto leading-[1.7] text-slate-600">
            Typonix provides comprehensive SEO analytics and keyword research tools 
            to help you dominate search engine results and drive organic growth.
          </p>
        </div>
      </div>
      <div className="services-card grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12 lg:py-20 relative">
        {servicesData.map((service, index) => (
          <div key={index} className="relative">
            <Card {...service} />
            {/* Vertical dividers */}
            {index % 3 !== 2 && (
              <div className="hidden lg:block absolute top-0 -right-5 w-px h-full bg-slate-200"></div>
            )}
            {/* Horizontal dividers */}
            {index < 3 && (
              <div className="hidden md:block absolute -bottom-5 left-0 right-0 h-px bg-slate-200 md:right-5 lg:right-0"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
