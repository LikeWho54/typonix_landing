import React from "react";
import { FiSearch, FiTrendingUp, FiTarget, FiBarChart, FiEye, FiZap } from "react-icons/fi";

const ToolCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="tool-card-item bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-center gap-y-4 p-6">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mx-auto`}>
        <Icon className="w-6 h-6 text-slate-700" />
      </div>
      <div className="tool-card-item-content flex flex-col justify-center gap-y-2">
        <h4 className="text-xl font-semibold text-slate-900 text-center">
          {title}
        </h4>
        <p className="text-slate-600 text-sm text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const tools = [
  {
    icon: FiSearch,
    title: "Keyword Discovery",
    description: "Find profitable keywords with high search volume and low competition using our advanced AI algorithms",
    color: "bg-blue-100",
  },
  {
    icon: FiTrendingUp,
    title: "Ranking Tracker",
    description: "Monitor your keyword positions across all major search engines with real-time updates",
    color: "bg-blue-100",
  },
  {
    icon: FiTarget,
    title: "Competitor Analysis",
    description: "Analyze competitor strategies and discover their top-performing keywords and content gaps",
    color: "bg-blue-100",
  },
  {
    icon: FiBarChart,
    title: "SEO Analytics",
    description: "Get comprehensive reports on your SEO performance with actionable insights and recommendations",
    color: "bg-blue-100",
  },
  {
    icon: FiEye,
    title: "SERP Monitoring",
    description: "Track search engine result pages and monitor featured snippets, local packs, and more",
    color: "bg-blue-100",
  },
  {
    icon: FiZap,
    title: "Content Optimizer",
    description: "Optimize your content for target keywords with AI-powered suggestions and readability analysis",
    color: "bg-blue-100",
  },
];

const ProductSection = () => {
  return (
    <div id="workflows" className="product max-w-6xl mx-auto pb-10">
      <div className="featured-headline flex flex-col gap-y-2">
        <p className="text-blue-600 rounded-full px-2.5 py-1 text-center font-semibold">
          Workflows
        </p>
        <h3 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xs mx-auto md:max-w-full md:mx-0 text-center font-bold leading-[1.15] text-slate-900">
          SEO Tools That Run on Autopilot
        </h3>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mt-4">
          Everything you need to dominate search rankings in one powerful platform
        </p>
        <div className="tool-card grid px-5 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 lg:pb-8 lg:pt-10 relative">
          {tools.map((tool, index) => (
            <div key={index} className="relative">
              <ToolCard {...tool} />
              {/* Vertical dividers */}
              {index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-0 -right-3 w-px h-full bg-slate-200"></div>
              )}
              {/* Horizontal dividers */}
              {index < 3 && (
                <div className="hidden md:block absolute -bottom-3 left-0 right-0 h-px bg-slate-200 md:right-3 lg:right-0"></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a href="https://app.typonix.com/signup" className="flex text-base lg:text-lg items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white h-[40px] lg:h-[50px] px-8 font-semibold hover:shadow-lg hover:drop-shadow-lg transition-all duration-200">
            <span className="tracking-tight">Get A Free SEO Gap Analysis</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
