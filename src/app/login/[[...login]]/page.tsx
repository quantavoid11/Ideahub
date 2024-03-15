import {SignIn, SignInButton, SignUp} from "@clerk/nextjs";
import Navbar from "@/app/login/_components/Navbar";


export default function Login(){
    return (
        <>
        <Navbar/>.
    <div className=" h-screen bg-[#fcf9ee]  ">
        <div className="flex justify-center items-center pt-[150px]">
            <SignIn/>
        </div>
    </div>
        </>
    )
}