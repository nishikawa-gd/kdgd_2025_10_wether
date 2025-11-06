import React, { useState } from "react";

const ClickableSVG = () => {
  const [activePath, setActivePath] = useState(null);

  const handlePathClick = (index) => {
    setActivePath(index);
  };

  return (
    <div className="relative flex justify-center items-center p-6 bg-gray-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3882 3296"
        className="w-[600px] h-auto"
      >
        {/* パス1 */}
        <path
          d="M18.6,187.7l3.8-2.9l0.4,0.6c1.2,1.8,2.4,3.7,3.5,5.5..."
          fill={activePath === 1 ? "#4ADE80" : "#FABE05"}
          stroke="#222"
          strokeWidth="0.5"
          className="cursor-pointer transition-all duration-300 hover:opacity-80"
          onClick={() => handlePathClick(1)}
        />

        {/* パス2 */}
        <path
          d="M22.8,191.5l3.6-3.1l0.4,0.6c1.1,1.7,2.3,3.5,3.4,5.2..."
          fill={activePath === 2 ? "#4ADE80" : "#EECC39"}
          stroke="#222"
          strokeWidth="0.5"
          className="cursor-pointer transition-all duration-300 hover:opacity-80"
          onClick={() => handlePathClick(2)}
        />

        {/* パス3 */}
        <path
          d="M26.8,195.3l3.5-3.2l0.4,0.5c1.1,1.7,2.2,3.4,3.2,5.1..."
          fill={activePath === 3 ? "#4ADE80" : "#9CCC4E"}
          stroke="#222"
          strokeWidth="0.5"
          className="cursor-pointer transition-all duration-300 hover:opacity-80"
          onClick={() => handlePathClick(3)}
        />
      </svg>

      {activePath && (
        <div className="absolute bottom-8 bg-white shadow-lg rounded-xl px-4 py-2 text-sm">
          ✅ 選択中のパス番号：{activePath}
        </div>
      )}
    </div>
  );
};

export default ClickableSVG;
