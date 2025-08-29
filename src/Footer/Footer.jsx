import React from "react";
import { BsArrowRight } from "react-icons/bs";
import logo from "../../src/assets/website-logo.svg";

function Footer() {
  const footerLinks = [
    {
      column1: [
        { id: 1, title: "Features", url: "#" },
        { id: 2, title: "Keyword Research", url: "#" },
        { id: 3, title: "Rank Tracking", url: "#" },
        { id: 4, title: "Competitor Analysis", url: "#" },
      ],
      column2: [
        { id: 5, title: "Company", url: "#" },
        { id: 6, title: "About Us", url: "#" },
        { id: 7, title: "Careers", url: "#" },
        { id: 8, title: "Contact", url: "#" },
      ],
      column3: [
        { id: 9, title: "Resources", url: "#" },
        { id: 10, title: "SEO Blog", url: "#" },
        { id: 11, title: "Help Center", url: "#" },
        { id: 12, title: "API Docs", url: "#" },
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
              href="#"
              className="flex text-base lg:text-base items-center justify-center rounded-lg h-[40px] lg:h-[44px] w-40 bg-blue-600 hover:bg-blue-700 font-semibold text-white hover:shadow-lg hover:drop-shadow-lg transition duration-200"
            >
              <span className="tracking-tight">Start Free Trial</span>
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
              <img src={logo} alt="" />
              <h1 className="text-xl text-white font-[650]">Typonix</h1>
            </div>
          </button>
          <p className="text-white/60 text-sm mt-5 max-w-xs font-[400]">
            Typonix is the leading SEO platform for keyword research, competitor analysis, 
            and ranking optimization. Boost your organic traffic with data-driven insights.
          </p>
          <p className="text-white text-sm mt-10">All rights reserved.</p>
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
