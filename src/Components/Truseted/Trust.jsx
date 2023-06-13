import React from 'react'
import '../FourthSec/Forth.css';
const Trust = () => {
  return (
    <div className="bg-gray-900 py-20">
    <h1 className="text-5xl font-bold text-white mb-4">Trusted By Over 50,000 Businesses</h1>
    <div className="py-10">
      <p style={{ color: 'rgb(180, 188, 208)' }} className="text-md w-2/3 mx-auto">Trust in Cody AI’s unparalleled data protection while utilizing our platform for seamless document storage and collaboration. Experience the perfect balance between uncompromised security and exceptional user experience.</p>
    </div>

    <div className="flex w-full justify-center flex-wrap ">
      <div style={{ backgroundColor: 'rgb(30, 31, 57)', border: '1px solid #8D38FF' }} className="w-96 mb-4 rounded-3xl shadow-lg p-6 mr-6">
        <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_1.svg" alt="Icon" className="w-12 h-12 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4 text-white">Advanced Data Defense</h1>
        <p className="text-md text-white">Trust in Cody AI’s unparalleled data protection while utilizing our platform for seamless document storage and collaboration. Experience the perfect balance between uncompromised security and exceptional user experience.</p>
      </div>
      <div style={{ backgroundColor: 'rgb(30, 31, 57)', border: '1px solid #8D38FF' }} className="w-96    mb-4 rounded-3xl shadow-lg p-6 mr-6">
        <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_2.svg" alt="Icon" className="w-12 h-12 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4 text-white">Customizable Access Controls</h1>
        <p className="text-md text-white">Maintain absolute control over your data with Cody AI’s permission enforcement. Our platform grants access on a per-chatbot basis, ensuring that users can only access the information they’re authorized to view, with real-time permission updates.</p>
      </div>
      <div style={{ backgroundColor: 'rgb(30, 31, 57)', border: '1px solid #8D38FF' }} className="w-96   mb-4  rounded-3xl shadow-lg p-6">
        <img src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_3.svg" alt="Icon" className="w-12 h-12 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4 text-white">Unwavering Commitment to Security</h1>
        <p className="text-md text-white">Rest easy knowing that your data is in capable hands. We adhere to stringent third-party security standards and continuously work on enhancing our measures to provide exceptional protection tailored to your needs.</p>
      </div>
    </div>
  </div>
  )
}

export default Trust