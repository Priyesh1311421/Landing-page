import SignUpButton from "./Signup";

export function Navbar(){
    return(
        <>
        <div className="md:flex p-4 md:justify-between bg-white flex justify-center">
            <div className="px-1">
                <img className="h-14 w-36 p-2" src="https://passive.empify.com/hosted/images/ba/fe595cbad447eb89d2ceae020ee8b3/Empify-Logo---Full-Color---Black.png"/>
            </div>
            <div className="hidden md:block">
                <SignUpButton/>
            </div>
        </div>
        </>
    )
}