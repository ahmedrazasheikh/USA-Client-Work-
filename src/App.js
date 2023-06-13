import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainHeading from './Components/MainHeading/MainHeading';
import VideoComponent from './Components/Iframe/IFrame';
import Fourthsec from './Components/FourthSec/Fourthsec';
import BizziDo from './Components/CodyDo/BizziDo';
import Howworks from './Components/HowWorks/Howworks';
import Integration from './Components/Integration/Integration';
import Trust from './Components/Truseted/Trust';
import Accordion from './Components/Dropdown/Dropdown';
// import Dropdown from './Components/Dropdown/Dropdown';
function App() {
  return (
    <div className="App">
      <div className='bg-gray-900'    >


        <Navbar />
        <MainHeading />
        <div className='mt-20'>

          <VideoComponent />
        </div>
      </div>
      <Fourthsec />
      <BizziDo />
      <Howworks />

      <div className='bg-gray-900'   >


      <Integration/>
      <Trust/>
      <Accordion/>
{/* <Dropdown/> */}
      </div>
    </div>
  );
}

export default App;
