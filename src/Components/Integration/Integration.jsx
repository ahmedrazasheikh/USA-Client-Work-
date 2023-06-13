import React from 'react';
import '../FourthSec/Forth.css';

const Integration = () => {
  return (
    <div className='bg-gray-900'>
  <div className="w-full bg-gray-900 mb-10 py-10">
    <div style={{ border: "1px solid #8D38FF", backgroundColor: "#1E1F3A" }} className="w-11/12 h-auto rounded-3xl mx-auto">
      <div className="p-16 mb-4">
        <h1 className="text-white text-5xl font-bold">Integrate With Your Favorite Tools</h1>
        <p className='text-white py-10'>Incorporate Cody into your favorite apps through our powerful API, allowing you to harness the full potential of your knowledge anywhere.</p>
      </div>

      <div className='flex justify-evenly p-10'>
        <div className='flex flex-col w-3/12 py-10 items-center'>
          <div className='flex justify-between w-full'>
            <div>
              <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_1-updated.png" alt="" />
              <h1 className="text-white">PPT</h1>
            </div>
            <div>
              <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_4-updated.png" alt="" />
              <h1 className="text-white">DOCX</h1>
            </div>
          </div>

          <div className='flex'>
            <div>
              <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_5-updated.png" alt="" />
              <h1 className="text-white">Website</h1>
            </div>
          </div>

          <div className='flex justify-between w-full'>
            <div>
              <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_2-updated.png" alt="" />
              <h1 className="text-white">Media</h1>
            </div>
            <div>
              <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_13-notion-updated.png" alt="" />
              <h1 className="text-white">Notion</h1>
            </div>
          </div>
        </div>

        <div className='py-10 scale-animation'>
          <img src="https://meetcody.ai/wp-content/uploads/2023/04/home-section_5-icon_11-updated.png" alt="" />
        </div>

        <div className='flex flex-col w-3/12 py-10 items-center'>
          <div className='flex justify-between w-full'>
            <div>
              <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_8-updated.png" alt="" />
              <h1 className="text-white">Slack</h1>
            </div>
            <div>
              <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_10-active.png" alt="" />
              <h1 className="text-white">API</h1>
            </div>
          </div>

          <div className='flex'>
            <div>
              <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_9-active.png" alt="" />
              <h1 className="text-white">Embed</h1>
            </div>
          </div>

          <div className='flex justify-between w-full'>
            <div>
              <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_6-updated.png" alt="" />
              <h1 className="text-white">Discord</h1>
            </div>
            <div>
              <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_7-updated.png" alt="" />
              <h1 className="text-white">Chat</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Integration;
