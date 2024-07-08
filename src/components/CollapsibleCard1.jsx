import React, { useState } from 'react';

const CollapsibleCard1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" mx-auto bg-white rounded-lg shadow-md p-6 border-x-2 border-amber-400 w-[100%] mt-[30px] ">
      <div className="flex justify-between items-center">
        <div className="flex flex-col pt-[20px] w-[100%]">
          <div className="text-green-500 mr-4">
            <img className='h-[50px] w-[50px] '  src='https://passive.empify.com/hosted/images/08/9fb072161a4868a90e2f0ac136e2ad/icons8-cash-flow-512-1-.png'/>
          </div>
          <div className='flex flex-row justify-between'>
            <div className="flex text-[25px] font-serif m-2 text-gray-700">How To Create<br/> Consistent Cash Flow:</div>
            <div className='flex'>
              <button onClick={toggleCollapse} className="text-2xl ml-2 focus:outline-none font-semibold hover:text-green-600">
              {isOpen ? '-' : '+'}
              </button>
            </div>
          </div>
        </div>
        
      </div>
      {isOpen && (
        <div className="mt-4 text-gray-600">
          <p>Learn how to start investing in dividend stocks</p>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCard1;
