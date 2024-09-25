import { useState } from 'react';
import ak from '../../assets/Header/ak.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white flex flex-row justify-between items-center lg:p-6 pt-6 pr-4 pl-4 gap-8 bg-black">
      <img className="w-[100px] h-[50px]" src={ak} />

      {/* Hamburger Menu Button for small screens */}
      <div className="block sm:hidden">
        <button onClick={toggleMenu} className="text-white w-[10px]">
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu for large screens */}
      <nav className="hidden sm:flex flex-row gap-8 text-sm">
        <h6>HOME</h6>
        <Link to="/about">
          {' '}
          <h6>ABOUT</h6>
        </Link>
        <h6>WORKS</h6>
        <h6>CONTACT</h6>
      </nav>

      {/* Dropdown Menu for small screens */}
      {isMenuOpen && (
        <div className="absolute top-[64px] right-0  bg-black bg-opacity-50 w-full sm:hidden">
          <nav className="flex flex-col items-center gap-4 p-4 text-sm">
            <h6>HOME</h6>
            <Link to="/about">
              {' '}
              <h6>ABOUT</h6>
            </Link>
            <h6>WORKS</h6>
            <h6>CONTACT</h6>
          </nav>
        </div>
      )}
    </header>
  );
}
