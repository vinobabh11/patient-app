import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import DownArrow from "../assets/down-arrow.svg";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black flex items-center"
      >
        {title}
        <img style={{margin: '20px 5px'}} src={DownArrow} alt='down-arrow' width={'10px'}/>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <Link key={index} to={item?.to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {item?.opt}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
