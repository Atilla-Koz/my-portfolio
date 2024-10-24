import React, { useState } from 'react';
import Home from './Components/Layout/Home';
import About from './Components/Layout/About';
import './App.css';

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // About slider açıp kapatma fonksiyonu
  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <section className="relative h-screen">
      <Home onAboutClick={toggleAbout} />

      {/* About Slider */}
      <div
        className={`fixed bottom-0 left-0 w-full transform ${
          isAboutOpen ? 'translate-y-0' : 'translate-y-full'
        } transition-transform duration-500 ease-in-out z-50 bg-black lg:h-[45%] h-[65%]`}
      >
        <button
          className="text-white absolute top-4 right-4"
          onClick={toggleAbout}
        >
          Close
        </button>
        <About />
      </div>
    </section>
  );
}

export default App;
