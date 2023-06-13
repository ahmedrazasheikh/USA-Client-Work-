import React from 'react';
import '../FourthSec/Forth.css';

const Howworks = () => {
  return (
    <div className="bg-gray-900 pb-10">
      <h1 className="text-6xl font-bold py-10 text-white">How It Works</h1>

      <div className="flex justify-center mb-20 flexdireccol">
        <div className="rightmargin">
          <div>
            <img src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Warstwa-10.png.webp" alt="" className="w-full" />
            <div className="flex items-start flex-col">
              <div className="flex items-center">
                <img className="icon mb-4 w-16 h-16" src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_4-icon_1.svg" alt="" />
                <h1 className="ml-6 text-2xl text-white">Teach It What It Needs To Know</h1>
              </div>
              <div>
                <p className="max-w-[600px] text-left text-white pl-2">Upload files or import content using URLs to provide your chatbot with the essential knowledge to serve its purpose effectively.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/home-section_4-img_2_with_border.png.webp" alt="" className="w-full" />
            <div className="flex items-start flex-col">
              <div className="flex items-center">
                <img className="icon mb-4 w-16 h-16" src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_4-icon_2.svg" alt="" />
                <h1 className="ml-6 text-2xl text-white">Customize Cody For Different Uses</h1>
              </div>
              <div>
                <p className="max-w-[600px] text-left text-white pl-2">Set up specialized chatbots for various tasks by tailoring their roles, strictness, and other settings for an enhanced user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center flexdireccol">
        <div className="rightmargin">
          <div>
            <img src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/home-section_4-img_3_with_border.png.webp" alt="" className="w-full" />
            <div className="flex items-start flex-col">
              <div className="flex items-center">
                <img className="icon mb-4 w-16 h-16" src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_4-icon_3.svg" alt="" />
                <h1 className="ml-6 text-2xl text-white">Share Cody with Your Employees or Customers</h1>
              </div>
              <div>
                <p className="max-w-[600px] text-left text-white pl-2">Seamlessly integrate your chatbot with a shareable link, inline embed, or popup embed, ensuring easy access for your employees or customers.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/home-section_4-img_4_with_border.png.webp" alt="" className="w-full" />
            <div className="flex items-start flex-col">
              <div className="flex items-center">
                <img className="icon mb-4 ml-4 w-14 h-14" src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_4-icon_4.svg" alt="" />
                <h1 className="ml-4 text-2xl text-white">Ask Cody</h1>
              </div>
              <div>
                <p className="max-w-[600px] text-left text-white pl-2">Interact with your chatbot by simply asking questions on the chat screen to instantly receive accurate and relevant answers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howworks;
