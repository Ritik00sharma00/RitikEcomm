import React from 'react';
import { FaGem } from 'react-icons/fa';

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <FaGem className="text-[#141414] text-2xl sm:text-3xl" />
      <span className="text-[#6E01B1] text-xl sm:text-2xl font-bold font-playfair">
        Ritik
      </span>
      <span className="text-[#141414] text-xl sm:text-2xl font-bold font-roboto ml-1">
        Ecomm
      </span>
    </div>
  );
}

export default Logo;
