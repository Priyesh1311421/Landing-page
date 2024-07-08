import React, { useState } from 'react';
import MyForm from './Form';
import './styles.css'
function SignUpButton() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
    setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    };
    
    return <div className=''>
        <button 
            className="bg-yellow-200 text-gray-600 px-[35px] py-[15px] m-2 rounded-tl-[30px] rounded-br-[30px] text-[20px] font-semibold"
            onClick={openModal}>
            Sign Up Now!
        </button>
        {isModalOpen && (
            <div className="z-20 fixed inset-0 flex justify-center bg-black bg-opacity-50 overflow-scroll no-scrollbar p-8 ">
              <div className="absolute bg-white rounded-lg mx-1 my-0 py-10">
                <button
                  className="absolute top-[-12px] right-[-8px] w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <div>
                    <MyForm/>
                    
                </div>
                
              </div>
            </div>
        )}
    </div>
        
}

export default SignUpButton;
