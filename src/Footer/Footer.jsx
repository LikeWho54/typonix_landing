import React from "react";
import { BsArrowRight } from "react-icons/bs";
const logo = "https://ucarecdn.com/6c7e80b5-191c-463c-8465-f8e93f57edf2/6.svg";

function Footer() {
  const footerLinks = [
    {
      column1: [
        { id: 1, title: "Features", url: "#services" },
        { id: 2, title: "Keyword Research", url: "#services" },
        { id: 3, title: "Rank Tracking", url: "#workflows" },
        { id: 4, title: "Competitor Analysis", url: "#services" },
      ],
      column2: [
        { id: 5, title: "Terms and Conditions", url: "#" },
        { id: 6, title: "Privacy Policy", url: "#" },
      ],
      column3: [
        { id: 7, title: "Contact Us", url: "#" },
      ],
    },
  ];

  return (
    <div className="footer bg-slate-900 py-20">
      <div className="footer-headline border-b border-slate-300/20 mx-auto max-w-5xl flex flex-col md:flex-row md:items-center md:justify-between px-8 lg:px-20 xl:px-0 pb-10">
        <div className="left-footer-part md:w-1/2 flex flex-col justify-start items-start">
          <h3 className="text-2xl lg:text-4xl text-white font-bold max-w-sm leading-[1.15]">
            Ready to boost your SEO performance?
          </h3>
        </div>
        <div className="right-footer-part pt-5 md:w-1/2">
          <div className="hero-button flex gap-x-5 py-4 justify-center items-center">
            <a
              href="https://app.typonix.com/signup"
              className="flex text-base lg:text-lg items-center justify-center rounded-lg h-[50px] lg:h-[60px] w-64 lg:w-72 bg-blue-600 hover:bg-blue-700 font-semibold text-white hover:shadow-lg hover:drop-shadow-lg transition duration-200"
            >
              <span className="tracking-tight">Get Free SEO Gap Analysis</span>
              <BsArrowRight className="ml-2" />
            </a>
            <a
              href="#"
              className="flex text-sm lg:text-base items-center justify-center rounded-lg border border-slate-600 h-[40px] lg:h-[44px] w-40 font-semibold text-white hover:shadow-lg hover:drop-shadow-lg hover:bg-slate-800 transition duration-200"
            >
              <span className="tracking-tight">Book Demo</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-headline mx-auto max-w-5xl pt-10 flex flex-col md:flex-row md:items-center md:justify-between px-8 lg:px-20 xl:px-0">
        <div className="left-footer-part md:w-1/2 flex flex-col justify-start items-start">
          <button>
            <div className="header-logo flex items-center space-x-2">
              <img src={logo} alt="3P Digital LLC Logo" className="w-8 h-8" style={{filter: 'brightness(0) saturate(100%) invert(1)'}} />
              <h1 className="text-xl text-white font-[650]">Typonix</h1>
            </div>
          </button>
          <p className="text-white/60 text-sm mt-5 max-w-xs font-[400]">
            Typonix is the leading SEO platform for keyword research, competitor analysis, 
            and ranking optimization. Boost your organic traffic with data-driven insights.
          </p>
          <p className="text-white text-sm mt-10">© 2025 3P Digital LLC. All rights reserved.</p>
        </div>

        <div className="right-footer-part pt-5 md:w-1/2">
          <div className="flex gap-x-3 items-center justify-between px-0 lg:px-10">
            {Object.keys(footerLinks[0]).map((columnKey) => (
              <ul
                key={columnKey}
                className="footer-link-list text-white/50 text-sm font-[400] flex flex-col gap-y-2"
              >
                {footerLinks[0][columnKey].map((link) => (
                  <li className="footer-link-item" key={link.id}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
