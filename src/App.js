
import { TypeAnimation } from 'react-type-animation';
import './App.css';

function App() {
  return (
    <div>
     
     <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Students are converted here to Professional Programmers',
    1000,
    'Students are converted here to Professional Developers',
    1000,
    'Students are converted here to Professional Leaders',
    1000,
    'Students are converted here to Professional Developers',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>

    </div>
  );
}

export default App;
