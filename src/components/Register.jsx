import SignUpButton from "./Signup";

export function Register(){
    return(<>
    <div className="bg-green-600">
        <div className="flex justify-center flex-col md:pt-[20px] border-none outline-none pb-[60px] md:flex md:flex-row">
            <div className="md:w-1/2 flex justify-center md:justify-end md:pr-[50px] mt-[-10px]">
                <img className=" h-[300px] w-[300px] md:h-[402px] md:w-[395px]" src="https://passive.empify.com/hosted/images/61/ee9273e5dd49a6a1e77dab1366efcb/New-Gradient-03.png"/>
            </div>
            <div className="md:w-1/2 md:flex md:justify-center flex justify-center flex-col md:pr-[100px] md:pt-[30px]">
                <div className="flex flex-col justify-center">
                    <div className=" flex justify-center font-serif font-medium text-[30px] text-white">Hosted By</div>
                    <div className=" flex justify-center font-serif font-semibold md:pl-1 text-[30px] text-white">Ashley M. Fox</div>
                </div>
                <p className="flex justify-center font-serif text-white " >Former Wall Street Analyst & CEO of Empify</p>
                <div className="pt-[20px]">
                    <div className="bg-white p-3 m-[10px] rounded-lg ">
                        Dates
                    </div>
                    <div className="bg-white p-3 m-[10px] rounded-lg ">
                        Time
                    </div>
                    <div className="bg-white p-3 m-[10px] rounded-lg ">
                        Location
                    </div>
                </div>
                <div className="flex justify-center mt-[20px]">
                    <SignUpButton/>
                </div>
            </div>
        </div>
    </div>
    </>)
}