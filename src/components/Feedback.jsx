import SignUpButton from "./Signup";

export function Feedback(){
    return<>
    <div className="bg-[#EFF3FB] pt-[100px] md:pb-[150px] pb-[50px] px-[3px]">
        <div className="flex justify-center text-center font-bold text-[30px] sm:text-[50px] p-7">
            What Are Attendees Saying ?
        </div>
        <div className="flex flex-col justify-center lg:grid lg:grid-cols-3 lg:gap-1 lg:rounded-lg mt-[20px] mb-[40px] border-x-2 border-amber-400 border-y-0 outline-none">
            <div className="">
             <img src="https://passive.empify.com/hosted/images/37/f4ccc978764643b9fa7b7129505d27/IMG_6743.png"/> 
            </div>
            <div className="">
             <img src="https://passive.empify.com/hosted/images/37/f4ccc978764643b9fa7b7129505d27/IMG_6743.png"/> 
            </div>
            <div className="">
             <img src="https://passive.empify.com/hosted/images/37/f4ccc978764643b9fa7b7129505d27/IMG_6743.png"/> 
            </div>
            <div className="">
             <img src="https://passive.empify.com/hosted/images/37/f4ccc978764643b9fa7b7129505d27/IMG_6743.png"/> 
            </div>
            <div className="">
             <img src="https://passive.empify.com/hosted/images/37/f4ccc978764643b9fa7b7129505d27/IMG_6743.png"/> 
            </div>
            <div className="">
             <img src="https://passive.empify.com/hosted/images/37/f4ccc978764643b9fa7b7129505d27/IMG_6743.png"/> 
            </div>
        </div>
        <div className="bg-customColor flex flex-col justify-center pb-[20px]">
            <div className=" px-[15px] flex text-center justify-center text-[30px] sm:text-[50px] font-bold text-gray-800">
                Learn How To Create a Passive Income As An Investor In 5 Simple Steps
            </div>
        </div>
        <div className="flex justify-center">
            <SignUpButton/>
        </div>
    </div>
    </>
}