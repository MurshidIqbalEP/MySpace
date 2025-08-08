import React, { useState } from "react";

const faqData = [
  {
    question: "How do I track my shipment?",
    answer:
      "Everything you need to know about using Ship X, from shipment tracking to client management. Find quick answers to common queries below.",
  },
  {
    question: "Can I manage multiple shipments at once?",
    answer:
      "Yes, Ship X lets you manage multiple shipments through a unified dashboard with bulk actions and filters.",
  },
  {
    question: "Is there a mobile app for Ship X?",
    answer:
      "Absolutely. Ship X is available for both Android and iOS platforms with full shipment features.",
  },
  {
    question: "Can I integrate Ship X with my business system?",
    answer:
      "Ship X provides API access to integrate with ERP, inventory, or other systems seamlessly.",
  },
];

const ShipxFaq = () => {
  const [openIndexes, setOpenIndexes] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });
  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full h-[839px] bg-[#25252D] relative overflow-hidden flex flex-col justify-center items-center text-center gap-3">
      <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-repeat bg-center bg-[length:400px_900px] opacity-6 z-0"></div>
      <div className="absolute top-[300px] left-[-100px] w-[300px] h-[300px] bg-[#646FC6] rounded-full blur-[100px]  opacity-50 z-0"></div>
      <div className="absolute top-[300px] right-[-100px] w-[300px] h-[300px] bg-[#646FC6] rounded-full blur-[100px] opacity-50 z-10"></div>
      <img src="Vector 7.png" alt="" className='absolute top-[150px] right-[23%] w-[20%] h-[10%]' />


      <button className="text-white w-[61px] h-[38px] border-2 border-gray-200 rounded-full">
        FAQ
      </button>
      <h1 className="text-6xl font-bold text-white z-10">
        Frequently Asked Questions
      </h1>
      <p className="text-lg font-light text-white">
        Everything you need to know about using Ship X, from shipment tracking
        to client management. Find <br /> quick answers to common queries below
      </p>

      {faqData.map((item, index) => (
        <div
          key={index} 
          className="bg-[#FFFFFF]/10 w-[980px] min-h-[70px] text-white p-6 rounded-2xl shadow-sm transition-all z-20"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left "
          >
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <span className="text-white text-xl">
              {openIndexes[index] ? (
                <img src="minus.png" alt="" />
              ) : (
                <img src="plus.png" alt="" />
              )}
            </span>
          </button>
          {openIndexes[index] && (
            <p className="mt-2 text-left text-gray-300 transition-all duration-300">
              {item.answer}
            </p>
          )}
        </div>
      ))}

     <button className=' w-[180px] h-[56px] bg-[#646FC6] text-white rounded-[60px] flex items-center pl-4 font-medium relative'>Ask a question <div className='bg-white/10 h-[44px] w-[44px] backdrop-blur-xs rounded-full absolute right-2'> <img src="arrow.png" alt="" /></div></button>

    </div>
  );
};

export default ShipxFaq;
