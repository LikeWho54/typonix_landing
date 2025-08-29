import React, { useState, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function TestimonialSection() {
  const testimonials = [
    {
      content:
        "Typonix helped us increase our organic traffic by 300% in just 6 months. The keyword gap analysis is incredibly powerful.",
      author: "Sarah Mitchell",
      position: "SEO Director @ TechCorp",
    },
    {
      content:
        "The competitor analysis feature saved us countless hours of manual research. We discovered opportunities we never knew existed.",
      author: "David Chen",
      position: "Marketing Manager @ StartupX",
    },
    {
      content:
        "Finally, an SEO tool that actually delivers results. Our rankings improved dramatically within the first month of using Typonix.",
      author: "Maria Rodriguez",
      position: "Digital Marketing Lead @ eCommerce Plus",
    },
    {
      content:
        "The real-time ranking tracking and automated reports have made our SEO workflow so much more efficient. Highly recommend!",
      author: "James Wilson",
      position: "Head of Growth @ SaaS Solutions",
    },
    {
      content:
        "Typonix's AI-powered keyword suggestions helped us identify high-value opportunities our competitors were missing. Game changer!",
      author: "Lisa Thompson",
      position: "SEO Specialist @ Agency Pro",
    },
  ];

  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    containerRef.current.scrollLeft = index * 500; // adjust this value as needed
    setScrollLeft(containerRef.current.scrollLeft);
    setActiveDot(index);
  };

  const handleScroll = () => {
    setScrollLeft(containerRef.current.scrollLeft);
    const dotIndex = Math.round(containerRef.current.scrollLeft / 500);
    setActiveDot(dotIndex);
  };

  return (
    <div className="testimonial max-w-6xl mx-auto py-10">
      <div className="testimonial-headline flex flex-col gap-y-2">
        <p className="text-amber-400 rounded-full px-2.5 py-1 text-center">
          Testimonials
        </p>
        <h3 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xs mx-auto md:max-w-full md:mx-0 text-center font-bold leading-[1.15] text-black">
          What our clients say about us
        </h3>
        <div
          className="testimonial-card py-10 px-10 scrollbar-hide scrollbar-hide mt-2 flex overflow-auto font-medium"
          ref={containerRef}
          onScroll={handleScroll}
          style={{
            scrollBehavior: "smooth",
            scrollLeft: scrollLeft,
            transition: "scrollLeft 0.5s ease",
          }}
        >
          <div className="flex items-start gap-x-7 justify-between">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card-box rounded-xl flex flex-col w-[300px] justify-between bg-white"
              >
                <div className="testimonial-card-item flex flex-col p-6 gap-y-5">
                  <p className="text-base lg:text-xl font-medium">
                    {testimonial.content}
                  </p>

                  <div>
                    <p className="text-sm font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-[#7c7c7c] text-xs">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dots-container flex justify-center mt-4">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
            (_, index) => (
              <div
                key={index}
                className={`dot ${index === activeDot ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
