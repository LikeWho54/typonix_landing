import React from "react";
import { BsArrowRight } from "react-icons/bs";
import checkMark from "../../src/assets/Check Mark.svg";

function PricingSection() {
  const freePlan = {
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
  };


  const paidPlans = [
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
        "Best value for committed businesses.",
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
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description:
        "Tailored AI-powered solutions with custom integrations designed specifically for your business needs.",
      features: [
        "Custom AI training",
        "Dedicated API integrations",
        "White-label solutions available",
        "Advanced analytics & reporting",
        "24/7 dedicated support manager",
        "Custom workflow automation",
        "AI voice matching",
      ],
      backgroundColor: "#FFFFFF",
      buttonColor: "bg-slate-900",
      buttonTextColor: "text-white",
      tagColor: "bg-slate-100",
      tagTextColor: "text-slate-700",
      isEnterprise: true,
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
        
        {/* Free Plan - Horizontal Section */}
        <div className="px-10 lg:px-14 xl:px-2 py-4 lg:py-6">
          <div className="card pricing-card-box border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200" style={{ backgroundColor: freePlan.backgroundColor }}>
            <div className="p-5 lg:p-6">
              <div className="grid lg:grid-cols-3 gap-6 items-center">
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center gap-2">
                    <p className={`rounded-full px-2.5 py-[1px] w-fit text-sm ${freePlan.tagColor} ${freePlan.tagTextColor}`}>
                      {freePlan.name}
                    </p>
                  </div>
                  <h3 className="text-sm font-medium text-slate-500/70">
                    <span className="text-2xl font-bold text-slate-800">
                      {freePlan.price}
                    </span>
                    <span className="text-slate-600">{freePlan.period}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {freePlan.description}
                  </p>
                </div>
                <div className="pricing-features grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {freePlan.features.map((feature, index) => (
                    <div key={index} className="flex gap-x-2">
                      <img src={checkMark} alt="" className="flex-shrink-0" />
                      <p className="text-slate-700 text-xs">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center lg:justify-end">
                  <a
                    href="https://app.typonix.com/signup"
                    className={`flex text-sm lg:text-base items-center justify-center rounded-full h-10 w-full lg:w-56 font-bold border border-slate-500 hover:shadow-lg hover:drop-shadow-lg transition duration-200 ${freePlan.buttonColor} ${freePlan.buttonTextColor}`}
                  >
                    <span className="tracking-tight">
                      Start Now
                    </span>
                    <BsArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="integration-section flex items-center justify-center gap-4 py-8">
          <p className="text-slate-700 text-sm">Integrates with</p>
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
              <path fill="#333" d="M24 4.050000000000001A19.95 19.95 0 1 0 24 43.95A19.95 19.95 0 1 0 24 4.050000000000001Z"></path>
              <path fill="#fff" d="M8.001,24c0,6.336,3.68,11.806,9.018,14.4L9.385,17.488C8.498,19.479,8.001,21.676,8.001,24z M34.804,23.194c0-1.977-1.063-3.35-1.67-4.412c-0.813-1.329-1.576-2.437-1.576-3.752c0-1.465,1.471-2.84,3.041-2.84 c0.071,0,0.135,0.006,0.206,0.008C31.961,9.584,28.168,8,24.001,8c-5.389,0-10.153,2.666-13.052,6.749 c0.228,0.074,0.307,0.039,0.611,0.039c1.669,0,4.264-0.2,4.264-0.2c0.86-0.057,0.965,1.212,0.099,1.316c0,0-0.864,0.105-1.828,0.152 l5.931,17.778l3.5-10.501l-2.603-7.248c-0.861-0.046-1.679-0.152-1.679-0.152c-0.862-0.056-0.762-1.375,0.098-1.316 c0,0,2.648,0.2,4.217,0.2c1.675,0,4.264-0.2,4.264-0.2c0.861-0.057,0.965,1.212,0.104,1.316c0,0-0.87,0.105-1.832,0.152l5.891,17.61 l1.599-5.326C34.399,26.289,34.804,24.569,34.804,23.194z M24.281,25.396l-4.8,13.952c1.436,0.426,2.95,0.652,4.52,0.652 c1.861,0,3.649-0.324,5.316-0.907c-0.04-0.071-0.085-0.143-0.118-0.22L24.281,25.396z M38.043,16.318 c0.071,0.51,0.108,1.059,0.108,1.645c0,1.628-0.306,3.451-1.219,5.737l-4.885,14.135C36.805,35.063,40,29.902,40,24 C40,21.219,39.289,18.604,38.043,16.318z"></path>
              <path fill="#01579b" d="M4,24c0,11.024,8.97,20,19.999,20C35.03,44,44,35.024,44,24S35.03,4,24,4S4,12.976,4,24z M5.995,24 c0-9.924,8.074-17.999,18.004-17.999S42.005,14.076,42.005,24S33.929,42.001,24,42.001C14.072,42.001,5.995,33.924,5.995,24z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
              <path fill="#7cb342" d="M37.216,11.78c-0.023-0.211-0.211-0.305-0.351-0.305s-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343    c-0.234-0.234-0.68-0.164-0.867-0.117c-0.023,0-0.469,0.141-1.195,0.375c-0.726-2.086-1.968-3.984-4.194-3.984h-0.211    C24.187,4.375,23.391,4,22.735,4c-5.155,0-7.639,6.444-8.412,9.725c-2.015,0.633-3.445,1.054-3.609,1.125    c-1.125,0.351-1.148,0.375-1.289,1.429c-0.117,0.797-3.046,23.456-3.046,23.456L29.179,44l12.373-2.671    C41.575,41.282,37.24,11.991,37.216,11.78z M27.937,9.483c-0.562,0.164-1.242,0.375-1.921,0.609V9.671    c0-1.265-0.164-2.296-0.469-3.117C26.718,6.695,27.445,7.984,27.937,9.483L27.937,9.483z M24.117,6.812    c0.305,0.797,0.516,1.922,0.516,3.468v0.234c-1.265,0.398-2.601,0.797-3.984,1.242C21.422,8.804,22.899,7.351,24.117,6.812    L24.117,6.812z M22.617,5.359c0.234,0,0.469,0.094,0.656,0.234c-1.664,0.773-3.421,2.718-4.148,6.655    c-1.101,0.351-2.156,0.656-3.163,0.984C16.806,10.233,18.915,5.359,22.617,5.359z"></path>
              <path fill="#558b2f" d="M36.865,11.428c-0.141,0-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343    C31.17,8.757,31.053,8.71,30.96,8.71L29.249,44l12.373-2.671c0,0-4.335-29.338-4.359-29.549    C37.169,11.569,37.005,11.475,36.865,11.428z"></path>
              <path fill="#fff" d="M24.792,18.593l-1.475,4.449c0,0-1.337-0.715-2.927-0.715c-2.374,0-2.489,1.498-2.489,1.867    c0,2.028,5.301,2.812,5.301,7.583c0,3.757-2.374,6.177-5.578,6.177c-3.872,0-5.808-2.397-5.808-2.397l1.037-3.411    c0,0,2.028,1.752,3.734,1.752c1.129,0,1.59-0.876,1.59-1.521c0-2.651-4.333-2.766-4.333-7.145c0-3.665,2.628-7.214,7.952-7.214    C23.777,17.994,24.792,18.593,24.792,18.593z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
              <path fill="#333" d="M 22.050781 9.9492188 C 21.525781 9.9242187 21.099609 10 21.099609 10 L 25.099609 16 L 21.099609 21.900391 C 21.099609 21.900391 22.899219 22.200391 23.699219 21.400391 C 24.199219 20.900391 24.499219 20.4 26.199219 18 C 26.499219 17.5 26.800781 18 26.800781 18 C 28.300781 20 28.700391 20.800391 29.400391 21.400391 C 30.300391 22.100391 32 21.900391 32 21.900391 L 28 16 L 31.900391 10 C 31.900391 10 30.200391 9.7 29.400391 10.5 C 28.800391 11.1 28.200781 11.9 26.800781 14 C 26.800781 14 26.499219 14.5 26.199219 14 C 24.799219 12 24.199609 11.1 23.599609 10.5 C 23.199609 10.1 22.575781 9.9742188 22.050781 9.9492188 z M 0.41992188 9.9902344 C 0.27851562 9.9835938 0.1375 9.9875 0 10 L 3.1992188 22 C 3.1992187 22 4.1992187 22.000781 4.6992188 21.800781 C 5.3992187 21.500781 5.6996094 21.199609 6.0996094 19.599609 C 6.4996094 18.199609 7.4996094 13.899609 7.5996094 13.599609 C 7.7996094 12.899609 8.1007813 12.899609 8.3007812 13.599609 C 8.4007812 13.899609 9.4007812 18.099609 9.8007812 19.599609 C 10.200781 21.199609 10.499219 21.500781 11.199219 21.800781 C 11.799219 22.100781 12.800781 22 12.800781 22 L 16 10 C 14.9 9.9 13.6 10.499219 13.5 11.699219 L 11.800781 18.099609 L 10.400391 12.900391 C 10.100391 11.400391 9.3996094 10.599609 8.0996094 10.599609 C 6.7996094 10.599609 6.2007813 11.300391 5.8007812 12.900391 L 4.4003906 18.099609 L 2.6992188 11.699219 C 2.4367187 10.561719 1.4097656 10.036719 0.41992188 9.9902344 z M 19.599609 10 C 19.599609 10 18.800781 9.9992188 18.300781 10.199219 C 17.700781 10.499219 17.5 11.099609 17.5 12.599609 C 17.5 12.599609 17.800781 12.299609 18.300781 12.099609 C 19.700781 11.599609 19.599609 10.6 19.599609 10 z M 19.5 12 L 19.5 12.076172 C 19.524326 12.032657 19.530125 12 19.5 12 z M 19.5 12.076172 C 19.443576 12.177106 19.249766 12.36025 18.900391 12.5 C 18.600391 12.7 18.3 12.800391 18 12.900391 C 17.3 13.200391 17.400391 13.599609 17.400391 14.599609 L 17.400391 22 C 17.400391 22 18.199219 22.100781 18.699219 21.800781 C 19.399219 21.500781 19.5 21.099609 19.5 19.599609 L 19.5 12.076172 z"></path>
            </svg>
          </div>
        </div>

        {/* Main Pricing Plans - 3 Column Grid */}
        <div className="pricing-card grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 lg:py-12 lg:pb-20 lg:pt-8 relative">
          {paidPlans.map((option, index) => (
            <div key={index} className="relative">
              <div
                className="card pricing-card-box border border-slate-200 rounded-xl flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-200"
                style={{ backgroundColor: option.backgroundColor }}
              >
              <div className="border-b border-slate-500/50">
                <div className="p-5 flex flex-col gap-y-2">
                  <div className="flex items-center gap-2">
                    <p className={`rounded-full px-2.5 py-[1px] w-fit text-sm ${option.tagColor} ${option.tagTextColor}`}>
                      {option.name}
                    </p>
                    {option.isPopular && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Most Popular
                      </span>
                    )}
                    {option.isEnterprise && (
                      <span className="bg-yellow-400 text-slate-900 text-xs px-2 py-1 rounded-full font-semibold">
                        Custom Solution
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 text-sm font-medium text-slate-500/70">
                    <span className="text-3xl font-bold text-slate-800">
                      {option.price}
                    </span>
                    <span className="text-slate-600">{option.period}</span>
                    {option.name === "Yearly" && (
                      <span className="block text-blue-600 font-bold text-base mt-1">
                        + Free blog setup
                      </span>
                    )}
                  </h3>
                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                    {option.description}
                  </p>
                  <a
                    href="https://app.typonix.com/signup"
                    className={`my-2 flex text-base lg:text-lg items-center justify-center rounded-full h-12 w-full font-bold border border-slate-500 hover:shadow-lg hover:drop-shadow-lg transition duration-200 ${option.buttonColor} ${option.buttonTextColor}`}
                  >
                    <span className="tracking-tight">
                      {option.isEnterprise ? "Contact Sales" : "Get A Free SEO Gap Analysis"}
                    </span>
                    <BsArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="pricing-features my-2.5 flex flex-col gap-y-5 p-5 flex-grow">
                {option.features.map((feature, index) => (
                  <div key={index} className="flex gap-x-3">
                    <img src={checkMark} alt="" />
                    <p className={`text-sm ${feature === "Free blog setup" ? "text-blue-600 font-bold" : "text-slate-700"}`}>{feature}</p>
                  </div>
                ))}
              </div>
              </div>
              {/* Vertical dividers */}
              {index < paidPlans.length - 1 && (
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
