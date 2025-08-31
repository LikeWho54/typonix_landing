import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import dashboardImage from "../assets/dash screenshot.png";

const featuredSteps = [
  {
    step: "1",
    title: "Create Your Account",
    description:
      "Sign up for free in less than a minute. No credit card required, no complex setup process.",
  },
  {
    step: "2",
    title: "Add Your Website",
    description:
      "Enter your website URL and competitors (or let us detect them automatically).",
  },
  {
    step: "3",
    title: "Get Your Free SEO Gap Analysis",
    description:
      "Instantly see competitor keywords, rankings, and content gaps.",
  },
  {
    step: "4",
    title: "Unlock Your First Content Plan + Blog Post",
    description:
      "Receive a ready-to-publish blog post and a full content roadmap tailored to your niche.",
  },
];

const StepItem = ({ step, title, description, isActive, isCompleted, progress }) => (
  <div className={`flex items-start gap-x-3 p-4 rounded-lg border transition-all duration-500 ${
    isActive ? 'bg-slate-800/70 border-blue-500/50' : 
    isCompleted ? 'bg-slate-800/60 border-green-500/50' : 
    'bg-slate-800/50 border-slate-700/50'
  }`}>
    <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-300 ${
      isCompleted ? 'bg-green-600' : isActive ? 'bg-blue-600' : 'bg-slate-600'
    }`}>
      <span className="text-white font-bold text-sm">
        {isCompleted ? '✓' : step}
      </span>
    </div>
    <div className="flex flex-col gap-y-1 flex-1">
      <h3 className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${
        isActive || isCompleted ? 'text-white' : 'text-slate-400'
      }`}>{title}</h3>
      <p className={`leading-[1.35] text-xs lg:text-sm transition-colors duration-300 ${
        isActive || isCompleted ? 'text-[#9b9b9b]' : 'text-slate-600'
      }`}>
        {description}
      </p>
      {isActive && (
        <div className="w-full bg-slate-700 rounded-full h-1 mt-2 overflow-hidden">
          <div 
            className="bg-blue-600 h-1 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  </div>
);

const FeaturedSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepDuration = 5000; // 5 seconds per step
    const progressInterval = 30; // Update progress every 30ms
    const progressIncrement = 100 / (stepDuration / progressInterval);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentStep(prevStep => {
            const nextStep = prevStep + 1;
            if (nextStep >= featuredSteps.length) {
              return 0; // Reset to first step
            }
            return nextStep;
          });
          return 0; // Reset progress
        }
        return prev + progressIncrement;
      });
    }, progressInterval);

    return () => clearInterval(progressTimer);
  }, [currentStep]);

  return (
    <div className="featured-section bg-gradient-to-r from-slate-900 to-slate-800 pt-12 pb-4 px-0 lg:px-14 lg:py-16 overflow-hidden">
      <div className="featured-headline text-center mb-16 px-10">
        <p className="text-blue-400 text-base font-semibold">Getting Started</p>
        <h3 className="text-3xl lg:text-[44px] font-bold leading-[1.15] text-white mt-2">
          Get started in 4 simple steps
        </h3>
        <a href="https://app.typonix.com/signup" className="mt-6 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-3 text-sm lg:text-base font-semibold text-white hover:shadow-lg hover:drop-shadow-lg transition-all duration-200 mx-auto w-fit">
          <span className="tracking-tight">Get Free SEO Gap Analysis</span>
          <BsArrowRight className="ml-2" />
        </a>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between gap-x-20">
        <div className="featured-right-part w-full lg:w-3/5 -mr-0 lg:-mr-48">
          <img
            className="rounded-xl mx-auto lg:mx-0 shadow-2xl border border-slate-700 w-full max-w-none lg:w-[160%] lg:max-w-[160%]"
            src={dashboardImage}
            alt="Typonix SEO Dashboard Features"
          />
        </div>
        <div className="featured-left-part w-full px-10 py-2 lg:p-0 lg:w-2/5 max-w-2xl mx-auto">
          <div className="featured-steps py-10 flex flex-col gap-y-6">
            {featuredSteps.map((stepItem, index) => (
              <StepItem
                key={index}
                step={stepItem.step}
                title={stepItem.title}
                description={stepItem.description}
                isActive={index === currentStep}
                isCompleted={index < currentStep}
                progress={index === currentStep ? progress : 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
