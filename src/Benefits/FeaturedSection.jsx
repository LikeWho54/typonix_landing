import React from "react";
import dashboardImage from "../assets/dash screenshot.png";

const featuredPosts = [
  {
    title: "Advanced Keyword Analysis",
    description:
      "Discover high-volume, low-competition keywords with our AI-powered analysis engine that identifies profitable opportunities",
  },
  {
    title: "Competitor Gap Analysis",
    description:
      "Uncover what your competitors are ranking for that you're missing, and find untapped keyword opportunities",
  },
  {
    title: "Real-time Ranking Tracking",
    description:
      "Monitor your keyword positions across search engines and get instant alerts when rankings change",
  },
];

const FeaturedPost = ({ title, description }) => (
  <div className="flex flex-col gap-y-3">
    <h3 className="text-white text-xl lg:text-2xl font-bold">{title}</h3>
    <p className="text-[#9b9b9b] leading-[1.35] text-sm lg:text-base">
      {description}
    </p>
  </div>
);

const FeaturedSection = () => (
  <div className="featured-section bg-gradient-to-r from-slate-900 to-slate-800 pt-12 pb-4 px-0 lg:px-14 lg:py-16">
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-x-20">
      <div className="featured-left-part w-full p-8 px-10 lg:p-0 lg:w-1/2 mx-auto">
        <img
          className="rounded-xl mx-auto ld:mx-0 shadow-2xl border border-slate-700"
          src={dashboardImage}
          alt="Typonix SEO Dashboard Features"
        />
      </div>
      <div className="featured-right-part w-full px-10 py-2 lg:p-0 lg:w-1/2 max-w-2xl mx-auto">
        <div className="featured-headline flex flex-col gap-y-2">
          <p className="text-blue-400 text-base mt-10 font-semibold">Key Features</p>
          <h3 className="text-3xl lg:text-[44px] font-bold leading-[1.15] text-white">
            Everything you need for SEO success
          </h3>
        </div>
        <div className="featured-post py-10 flex flex-col gap-y-7">
          {featuredPosts.map((post, index) => (
            <FeaturedPost
              key={index}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedSection;
