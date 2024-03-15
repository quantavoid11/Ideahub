import {SignIn, SignInButton, SignUp} from "@clerk/nextjs";
import Navbar from "@/app/signup/_components/Navbar";


export default function Login(){
    return (
        <>
        <Navbar/>
    <div className=" h-screen bg-[#fcf9ee]  ">
        <div className="flex justify-center items-center pt-[150px]">
            <SignIn/>
        </div>
    </div>
        </>
    )
}