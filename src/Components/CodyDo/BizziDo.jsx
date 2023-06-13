import React from 'react';
import '../FourthSec/Forth.css';

const BizziDo = () => {
  return (
    <div>
      <div className="w-full bg-gray-900 py-10">
        <div
          style={{ border: "1px solid #8D38FF", backgroundColor: "#1E1F3A" }}
          className="w-11/12 h-auto rounded-3xl mx-auto"
        >
          <div className="p-16 mb-4">
            <h1 className="text-white text-5xl font-bold">What can BizzAI?</h1>
          </div>

          <div className="flex-container mx-12 py-10 border-b border-[#454860]">
            <div    className="flex-item   w-full border-right md:w-1/3 itmresponsive">
              <div className="w-full h-72 flex flex-col items-center border-gray-300 mx-auto px-4" style={{ borderColor: "#454860" }}>
                <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_1.svg" alt="" className="my-4 w-16 h-16" />
                <h2 className="text-2xl font-bold text-white">Instant Answers To Your Business Questions</h2>
                <p className="text-base text-white" style={{ color: "#454860" }}>No need to track down manuals or sift through endless documents. Cody analyzes all accumulated documents and acts as an expert on all your company processes to provide the answer you need in seconds.</p>
              </div>
            </div>
            <div   className="flex-item w-full border-right md:w-1/3 itmresponsive">
              <div className="w-full h-72 flex flex-col items-center border-gray-300 mx-auto px-4" style={{ borderColor: "#454860" }}>
                <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_2.svg" alt="" className="my-4 w-16 h-16" />
                <h2 className="text-2xl font-bold text-white">Upload Any Data & Build Your Knowledge Base</h2>
                <p className="text-base text-white" style={{ color: "#454860" }}>Securely upload anything from PowerPoints to PDFs or crawl an entire website to instantly integrate information and customize Cody for your company. Cody will search your database and use it to craft intelligent responses.</p>
              </div>
            </div>
            <div    className="flex-item w-full md:w-1/3 itmresponsive">
              <div className="w-full h-72 flex flex-col items-center">
                <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_3.svg" alt="" className="my-4 w-16 h-16" />
                <h2 className="text-2xl font-bold text-white">Provide Sources For Every Answer</h2>
                <p className="text-base text-white" style={{ color: "#454860" }}>For added peace of mind, you can check Cody’s work. Whether it’s from one source or multiple sources, Cody provides the sources used to come up with every answer.</p>
              </div>
            </div>
          </div>

          <div className="flex-container mx-12 py-10">
            <div    className="flex-item w-full border-right py-6 md:w-1/3 itmresponsive">
              <div className="w-full h-72 flex flex-col items-center border-gray-300 mx-auto px-4" style={{ borderColor: "#454860" }}>
                <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_4.svg" alt="" className="my-4 w-16 h-16" />
                <h2 className="text-2xl font-bold text-white">Boost Employee Efficiency</h2>
                <p className="text-base text-white" style={{ color: "#454860" }}>With instant answers, ideas, and ready-made work, your team can work smarter, not harder. Use Cody to complete tasks faster, like writing professional emails, translating documents, or creating marketing materials.</p>
              </div>
            </div>
            <div   className="flex-item w-full border-right py-6 md:w-1/3 itmresponsive">
              <div className="w-full h-72 flex flex-col items-center border-gray-300 mx-auto px-4" style={{ borderColor: "#454860" }}>
                <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_5.svg" alt="" className="my-4 w-16 h-16" />
                <h2 className="text-2xl font-bold text-white">Provide Support & Troubleshoot Issues</h2>
                <p className="text-base text-white" style={{ color: "#454860" }}>Not making full use of your digital tools? Can’t get the sound to work on Zoom? Cody uses support documentation to help your team quickly troubleshoot any issues and discover hidden features.</p>
              </div>
            </div>
            <div   className="flex-item w-full py-6 md:w-1/3 itmresponsive">
              <div className="w-full h-72 flex flex-col items-center">
                <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_5.svg" alt="" className="my-4 w-16 h-16" />
                <h2 className="text-2xl font-bold text-white">Brainstorm Ideas & Give Suggestions</h2>
                <p className="text-base text-white" style={{ color: "#454860" }}>If you’re not sure where to start, you can use Cody to bring new perspectives and insights to the table. Because Cody remembers conversations and contextual history, it can give ideas and advice.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BizziDo;
