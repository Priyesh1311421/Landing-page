import React from 'react'
import SignUpButton from './Signup'

export function Home() {
    return <>
    <div>
        <div className="bg-gradient-to-r from-blue-500 green-500 to-green-900 text-center pt-4 md:pt-16 pb-[40px] p-[3px] ">
            <div className='md:px-[100px] mx-0 px-0'>
                <h1 className="text-3xl p-[25px] text-center md:text-5xl lg:text-6xl font-bold text-white md:mb-4">
                    How To Create a Passive Income As An Investor In 5 Simple Steps
                </h1>
                <div className='flex flex-col-reverse pt-3 md:flex md:flex-col md:pb-6 lg:justify-center'>
                    <p className="text-2xl text-center md:text-4xl lg:text-5xl text-white md:pt-0 font-sans p-[20px]">
                        Learn How To Build Wealth, In 2024, And Start Investing In
                        Income-Producing Stocks & Real Estate As a Beginner
                    </p>
                    <div className="relative">
                        <video
                            className={`mx-auto rounded-lg shadow-lg transition-opacity duration-500 `}
                            width="900"
                            height="650"
                            controls
                            >
                            <source src="C:\Users\priye\OneDrive\WebDev Practice\first-website\src\assets\20240131_125943.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            <div>
                <SignUpButton/> 
            </div>
            </div>
        </div>
    </div>
    </>
}