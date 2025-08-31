import React from "react";
import { BsArrowRight } from "react-icons/bs";
import dashboardImage from "../assets/dash screenshot.png";
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
              <span className="tracking-tight">Get Free SEO Gap Analysis</span>
              <BsArrowRight className="ml-2" />
            </a>
            <p className="text-slate-400 text-xs lg:text-sm mt-2">(It only takes 5 minutes)</p>
            <p className="text-slate-300 text-sm mt-4 mb-2">Integrates with</p>
            <div className="flex items-center justify-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                <path fill="#fff" d="M24 4.050000000000001A19.95 19.95 0 1 0 24 43.95A19.95 19.95 0 1 0 24 4.050000000000001Z"></path>
                <path fill="#01579b" d="M8.001,24c0,6.336,3.68,11.806,9.018,14.4L9.385,17.488C8.498,19.479,8.001,21.676,8.001,24z M34.804,23.194c0-1.977-1.063-3.35-1.67-4.412c-0.813-1.329-1.576-2.437-1.576-3.752c0-1.465,1.471-2.84,3.041-2.84 c0.071,0,0.135,0.006,0.206,0.008C31.961,9.584,28.168,8,24.001,8c-5.389,0-10.153,2.666-13.052,6.749 c0.228,0.074,0.307,0.039,0.611,0.039c1.669,0,4.264-0.2,4.264-0.2c0.86-0.057,0.965,1.212,0.099,1.316c0,0-0.864,0.105-1.828,0.152 l5.931,17.778l3.5-10.501l-2.603-7.248c-0.861-0.046-1.679-0.152-1.679-0.152c-0.862-0.056-0.762-1.375,0.098-1.316 c0,0,2.648,0.2,4.217,0.2c1.675,0,4.264-0.2,4.264-0.2c0.861-0.057,0.965,1.212,0.104,1.316c0,0-0.87,0.105-1.832,0.152l5.891,17.61 l1.599-5.326C34.399,26.289,34.804,24.569,34.804,23.194z M24.281,25.396l-4.8,13.952c1.436,0.426,2.95,0.652,4.52,0.652 c1.861,0,3.649-0.324,5.316-0.907c-0.04-0.071-0.085-0.143-0.118-0.22L24.281,25.396z M38.043,16.318 c0.071,0.51,0.108,1.059,0.108,1.645c0,1.628-0.306,3.451-1.219,5.737l-4.885,14.135C36.805,35.063,40,29.902,40,24 C40,21.219,39.289,18.604,38.043,16.318z"></path>
                <path fill="#01579b" d="M4,24c0,11.024,8.97,20,19.999,20C35.03,44,44,35.024,44,24S35.03,4,24,4S4,12.976,4,24z M5.995,24 c0-9.924,8.074-17.999,18.004-17.999S42.005,14.076,42.005,24S33.929,42.001,24,42.001C14.072,42.001,5.995,33.924,5.995,24z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                <path fill="#7cb342" d="M37.216,11.78c-0.023-0.211-0.211-0.305-0.351-0.305s-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343    c-0.234-0.234-0.68-0.164-0.867-0.117c-0.023,0-0.469,0.141-1.195,0.375c-0.726-2.086-1.968-3.984-4.194-3.984h-0.211    C24.187,4.375,23.391,4,22.735,4c-5.155,0-7.639,6.444-8.412,9.725c-2.015,0.633-3.445,1.054-3.609,1.125    c-1.125,0.351-1.148,0.375-1.289,1.429c-0.117,0.797-3.046,23.456-3.046,23.456L29.179,44l12.373-2.671    C41.575,41.282,37.24,11.991,37.216,11.78z M27.937,9.483c-0.562,0.164-1.242,0.375-1.921,0.609V9.671    c0-1.265-0.164-2.296-0.469-3.117C26.718,6.695,27.445,7.984,27.937,9.483L27.937,9.483z M24.117,6.812    c0.305,0.797,0.516,1.922,0.516,3.468v0.234c-1.265,0.398-2.601,0.797-3.984,1.242C21.422,8.804,22.899,7.351,24.117,6.812    L24.117,6.812z M22.617,5.359c0.234,0,0.469,0.094,0.656,0.234c-1.664,0.773-3.421,2.718-4.148,6.655    c-1.101,0.351-2.156,0.656-3.163,0.984C16.806,10.233,18.915,5.359,22.617,5.359z"></path>
                <path fill="#558b2f" d="M36.865,11.428c-0.141,0-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343    C31.17,8.757,31.053,8.71,30.96,8.71L29.249,44l12.373-2.671c0,0-4.335-29.338-4.359-29.549    C37.169,11.569,37.005,11.475,36.865,11.428z"></path>
                <path fill="#fff" d="M24.792,18.593l-1.475,4.449c0,0-1.337-0.715-2.927-0.715c-2.374,0-2.489,1.498-2.489,1.867    c0,2.028,5.301,2.812,5.301,7.583c0,3.757-2.374,6.177-5.578,6.177c-3.872,0-5.808-2.397-5.808-2.397l1.037-3.411    c0,0,2.028,1.752,3.734,1.752c1.129,0,1.59-0.876,1.59-1.521c0-2.651-4.333-2.766-4.333-7.145c0-3.665,2.628-7.214,7.952-7.214    C23.777,17.994,24.792,18.593,24.792,18.593z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                <path d="M 22.050781 9.9492188 C 21.525781 9.9242187 21.099609 10 21.099609 10 L 25.099609 16 L 21.099609 21.900391 C 21.099609 21.900391 22.899219 22.200391 23.699219 21.400391 C 24.199219 20.900391 24.499219 20.4 26.199219 18 C 26.499219 17.5 26.800781 18 26.800781 18 C 28.300781 20 28.700391 20.800391 29.400391 21.400391 C 30.300391 22.100391 32 21.900391 32 21.900391 L 28 16 L 31.900391 10 C 31.900391 10 30.200391 9.7 29.400391 10.5 C 28.800391 11.1 28.200781 11.9 26.800781 14 C 26.800781 14 26.499219 14.5 26.199219 14 C 24.799219 12 24.199609 11.1 23.599609 10.5 C 23.199609 10.1 22.575781 9.9742188 22.050781 9.9492188 z M 0.41992188 9.9902344 C 0.27851562 9.9835938 0.1375 9.9875 0 10 L 3.1992188 22 C 3.1992187 22 4.1992187 22.000781 4.6992188 21.800781 C 5.3992187 21.500781 5.6996094 21.199609 6.0996094 19.599609 C 6.4996094 18.199609 7.4996094 13.899609 7.5996094 13.599609 C 7.7996094 12.899609 8.1007813 12.899609 8.3007812 13.599609 C 8.4007812 13.899609 9.4007812 18.099609 9.8007812 19.599609 C 10.200781 21.199609 10.499219 21.500781 11.199219 21.800781 C 11.799219 22.100781 12.800781 22 12.800781 22 L 16 10 C 14.9 9.9 13.6 10.499219 13.5 11.699219 L 11.800781 18.099609 L 10.400391 12.900391 C 10.100391 11.400391 9.3996094 10.599609 8.0996094 10.599609 C 6.7996094 10.599609 6.2007813 11.300391 5.8007812 12.900391 L 4.4003906 18.099609 L 2.6992188 11.699219 C 2.4367187 10.561719 1.4097656 10.036719 0.41992188 9.9902344 z M 19.599609 10 C 19.599609 10 18.800781 9.9992188 18.300781 10.199219 C 17.700781 10.499219 17.5 11.099609 17.5 12.599609 C 17.5 12.599609 17.800781 12.299609 18.300781 12.099609 C 19.700781 11.599609 19.599609 10.6 19.599609 10 z M 19.5 12 L 19.5 12.076172 C 19.524326 12.032657 19.530125 12 19.5 12 z M 19.5 12.076172 C 19.443576 12.177106 19.249766 12.36025 18.900391 12.5 C 18.600391 12.7 18.3 12.800391 18 12.900391 C 17.3 13.200391 17.400391 13.599609 17.400391 14.599609 L 17.400391 22 C 17.400391 22 18.199219 22.100781 18.699219 21.800781 C 19.399219 21.500781 19.5 21.099609 19.5 19.599609 L 19.5 12.076172 z"></path>
              </svg>
            </div>
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
