import CollapsibleCard1 from "./CollapsibleCard1";

export function Card(){
    return<>
    <div className="px-[3px] w-[100%] ">
        <div className="mt-[35px] w-[100%]">
            <div className="flex justify-center">
                <img className="w-[90px] h-[90px] " src="https://static.vecteezy.com/system/resources/previews/009/759/682/non_2x/eps10-green-graduation-hat-solid-icon-isolated-on-white-background-graduation-cap-filled-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg"></img>
            </div>
            <div className="flex text-center justify-center p-[5px] text-[30px] sm:text-[45px] font-bold text-gray-800 w-[100%]">
            What You Will Learn During This Free Class: 
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-[25px] md:pb-[200px] md:px-[30px] flex-col w-[100%]" >
                
                <CollapsibleCard1/>
                <CollapsibleCard1/>
                <CollapsibleCard1/>
                <CollapsibleCard1/>
                <CollapsibleCard1/>
                <CollapsibleCard1/>
            </div>
        </div>
    </div>
    </>
}