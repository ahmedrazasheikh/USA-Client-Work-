import React, { useState } from 'react';

const Accordion = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleToggle4 = () => {
    setIsOpen4(!isOpen4);
  };

  const handleToggle5 = () => {
    setIsOpen5(!isOpen5);
  };

  return (

    <div>

    <h1   className='text-white  text-4xl  font-bold py-10 ' >Frequently Asked Questions</h1>

    <div className='py-10'  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
      <div className='rounded-2xl' style={{ border: '1px solid #e86e9f', width: '60%' }}>
        <div className='flex justify-between items-center p-6' onClick={handleToggle1}>
          <div className='ml-10'>
            <h3 style={{ color: 'white', fontSize: '1.5rem' }}>What is BizzAI?</h3>
          </div>
          <div className='mr-10'>
            {isOpen1 ? (
              <img
                src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/accordion-minus-icon.png"
                alt="Minus Icon"
              />
            ) : (
              <img
                src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/accordion-plus-icon.png"
                alt="Plus Icon"
              />
            )}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #e86e9f' , margin : "0px 10px" }}>
          {isOpen1 && (
            <div style={{ padding: '10px' }}>
              <p className='p-6 font-bold' style={{ color: 'white' }}>
                BizzAI is an AI-powered virtual employee that can assist your business in various tasks, such as answering
                questions, completing tasks, onboarding new hires, providing support and troubleshooting, and bringing new
                ideas and insights.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown 2 */}
      <div className='rounded-2xl' style={{ border: '1px solid #e86e9f', width: '60%', marginTop: '20px' }}>
        <div className='flex justify-between items-center p-6' onClick={handleToggle2}>
          <div className='ml-10'>
            <h3 style={{ color: 'white', fontSize: '1.5rem' }}>How Does BizzAI Work?</h3>
          </div>
          <div className='mr-10'>
            {isOpen2 ? (
             <img
             src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/accordion-minus-icon.png"
             alt="Minus Icon"
           />
         ) : (
           <img
             src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/accordion-plus-icon.png"
             alt="Plus Icon"
           />
            )}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #e86e9f' , margin : "0px 10px" }}>
          {isOpen2 && (
            <div style={{ padding: '10px' }}>
              <p className='p-6 font-bold' style={{ color: 'white' }}>
                BizzAI searches all of your accumulated company data, including articles, PowerPoints, and PDFs, and sources the top 10 most relevant documents to create an answer to your question in seconds.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown 3 */}
      <div className='rounded-2xl' style={{ border: '1px solid #e86e9f', width: '60%', marginTop: '20px' }}>
        <div className='flex justify-between items-center p-6' onClick={handleToggle3}>
          <div className='ml-10'>
            <h3 style={{ color: 'white', fontSize: '1.5rem' }}>Can I Upload Documents To BizzAI?</h3>
          </div>
          <div className='mr-10'>
            {isOpen3 ? (
              <img
             src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/accordion-minus-icon.png"
             alt="Minus Icon"
           />
         ) : (
           <img
             src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/accordion-plus-icon.png"
             alt="Plus Icon"
           />
            )}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #e86e9f' , margin : "0px 10px" }}>
          {isOpen3 && (
            <div style={{ padding: '10px' }}>
              <p className='p-6 font-bold' style={{ color: 'white' }}>
                Yes, you can upload various types of documents to BizzAI, such as Word, PowerPoint, and PDFs, and BizzAI will instantly learn all that information and use it to provide answers to your questions.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown 4 */}
      <div className='rounded-2xl' style={{ border: '1px solid #e86e9f', width: '60%', marginTop: '20px' }}>
        <div className='flex justify-between items-center p-6' onClick={handleToggle4}>
          <div className='ml-10'>
            <h3 style={{ color: 'white', fontSize: '1.5rem' }}>Can I Train BizzAI On My Specific Business Processes?</h3>
          </div>
          <div className='mr-10'>
            {isOpen4 ? (
              <img
             src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/accordion-minus-icon.png"
             alt="Minus Icon"
           />
         ) : (
           <img
             src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/accordion-plus-icon.png"
             alt="Plus Icon"
           />
            )}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #e86e9f' , margin : "0px 10px" }}>
          {isOpen4 && (
            <div style={{ padding: '10px' }}>
              <p className='p-6 font-bold' style={{ color: 'white' }}>
                Yes, you can train BizzAI on your specific business processes, such as support documentation, allowing it to answer questions and complete tasks based on your company's unique requirements.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown 5 */}
      <div className='rounded-2xl' style={{ border: '1px solid #e86e9f', width: '60%', marginTop: '20px' }}>
        <div className='flex justify-between items-center p-6' onClick={handleToggle5}>
          <div className='ml-10'>
            <h3 style={{ color: 'white', fontSize: '1.5rem' }}>Is BizzAI Secure?</h3>
          </div>
          <div className='mr-10'>
            {isOpen5 ? (
              <img
             src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/accordion-minus-icon.png"
             alt="Minus Icon"
           />
         ) : (
           <img
             src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/accordion-plus-icon.png"
             alt="Plus Icon"
           />
            )}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #e86e9f' , margin : "0px 10px" }}>
          {isOpen5 && (
            <div style={{ padding: '10px' }}>
              <p className='p-6 font-bold' style={{ color: 'white' }}>
                Yes, BizzAI is secure. It utilizes industry-standard encryption and security measures to protect your data and ensure the confidentiality and integrity of your information.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>

  );
};

export default Accordion;
