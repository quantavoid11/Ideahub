import {SignIn, SignInButton, SignUp, UserProfile} from "@clerk/nextjs";
import Navbar from "@/app/login/_components/Navbar";


export default function Login(){
    return (
        <>
        <Navbar/>.
    <div className=" h-screen bg-[#fcf9ee]  ">
        <div className="flex justify-center items-center pt-[150px]">
            {/*SignIn*/}
            <SignIn/>
        </div>
    </div>
        </>
    )
}