import React, { useState } from "react";

const DropdownMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-flex bg-white border-none rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
                    className="inline-flex items-center justify-center h-full px-2 text-gray-600  hover:text-gray-700 rounded-r-md hover:bg-gray-50 "
                >
                   English
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    
                </a>
      {isHovered && (
        <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
          <div className="p-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              German
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              French
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              Farsi
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
