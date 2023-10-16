import {
  PAGE14,
  PAGE15,
  PAGE16,
  PAGE17,
  PAGE18,
  PAGE19,
  PAGE20,
  PAGE21,
  PAGE22,
  PAGE23,
  PAGE24,
  PAGE25,
  PAGE26,
  PAGE27,
  PAGE28,
  PAGE29,
  PAGE30,
  PAGE31,
  PAGE32,
  PAGE33,
} from './assets/public/images'
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const pages = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];

function App() {
  return (
    <div className="App">
      <div className='flex justify-center items-center h-screen bg-slate-600'>
        <Carousel
          thumbWidth={50} 
          dynamicHeight={700} 
          emulateTouch={true}
        >
          <img src={PAGE14}/>
          <img src={PAGE15}/>
          <img src={PAGE16}/>
          <img src={PAGE17}/>
          <img src={PAGE18}/>
          <img src={PAGE19}/>
          <img src={PAGE20}/>
          <img src={PAGE21}/>
          <img src={PAGE22}/>
          <img src={PAGE23}/>
          <img src={PAGE24}/>
          <img src={PAGE25}/>
          <img src={PAGE26}/>
          <img src={PAGE27}/>
          <img src={PAGE28}/>
          <img src={PAGE29}/>
          <img src={PAGE30}/>
          <img src={PAGE31}/>
          <img src={PAGE32}/>
          <img src={PAGE33}/>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
