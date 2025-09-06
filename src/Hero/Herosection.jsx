import React from "react";
import { BsArrowRight } from "react-icons/bs";
import dashboardImage from "../../public/Screenshot 2025-09-06 at 14-53-03 Typonix.png";
import Navbar from "../Navbar";

function Herosection() {
  return (
    <div className="hero">
      {/* Hero Section */}
      <div className="hero-section bg-[radial-gradient(circle_at_center,#173E5E_0%,#010204_100%)] border-0">
        <Navbar />
        <div className="hero-content px-10 max-w-4xl xl:max-w-5xl mx-auto pt-24 lg:pt-32 pb-14 lg:pb-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl max-w-4xl md:max-w-[39rem] lg:max-w-4xl mx-auto leading-[1.4] text-white font-medium tracking-[-0.015em]">
            Turn Competitor Gaps<br />Into SEO Rankings
          </h1>
          <p className="py-5 px-5 lg:px-0 text-sm lg:text-base max-w-sm md:max-w-lg lg:max-w-xl mx-auto leading-[1.7] text-slate-300">
            See exactly what's working for your competitors, uncover missed opportunities, and let AI generate SEO-optimized content that wins.
          </p>
          <div className="hero-button flex flex-col items-center py-4">
            <a href="https://app.typonix.com/signup" className="flex text-base lg:text-lg items-center justify-center rounded-lg h-[40px] lg:h-[50px] px-6 lg:px-8 bg-blue-600 hover:bg-blue-700 font-semibold text-white hover:shadow-lg hover:drop-shadow-lg transition-all duration-200">
              <span className="tracking-tight">Get A Free SEO Gap Analysis</span>
              <BsArrowRight className="ml-2" />
            </a>
            <p className="text-slate-400 text-xs lg:text-sm mt-2">(It only takes 5 minutes)</p>
          </div>
        </div>
      </div>

      {/* Hero Section Video */}
      <div className="hero-video border-0 -mt-1 bg-[radial-gradient(circle_at_center,#173E5E_0%,#010204_100%)]">
        <div className="hero-section-video px-10 md:px-14 lg:px-10 xl:px-2 py-2 mx-auto max-w-4xl xl:max-w-5xl rounded-lg relative ">
          <div className="image-container">
            <img
              className="rounded-xl shadow-lg drop-shadow-lg border border-slate-700"
              src={dashboardImage}
              alt="Typonix Dashboard - SEO Keyword Research Tool"
            />
          </div>
        </div>
      </div>

      {/* Analytics */}
      {/* You can just change the "value" and "label" to edit those */}
      <div className="analytics pt-14 pb-20 px-5 lg:px-10 xl:px-2 max-w-5xl xl:max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 relative">
        {[
          { value: "10M+", label: "Keywords analyzed daily" },
          { value: "500+", label: "SEO opportunities found" },
          { value: "95%", label: "Ranking improvement rate" },
          { value: "300+", label: "Rankings Improved" },
        ].map(({ value, label }, index) => (
          <div key={index} className="flex flex-col gap-y-5 relative">
            <h3 className="text-2xl lg:text-4xl font-bold text-center text-blue-600">
              {value}
            </h3>
            <p className="text-center text-sm lg:text-base text-slate-600">
              {label}
            </p>
            {/* Vertical dividers */}
            {index < 3 && (
              <div className="absolute top-0 -right-2 w-px h-full bg-slate-300 hidden md:block"></div>
            )}
            {/* Mobile horizontal divider after first row */}
            {index === 1 && (
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-slate-300 md:hidden"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Herosection;
