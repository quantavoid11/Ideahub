
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Navbar from "@/app/signup/_components/Navbar";
import {SignUp, SignUpButton} from "@clerk/nextjs";


export default function SignUpPge(){
    return (
        <>
            <Navbar/>

            <div className=" h-screen bg-[#fcf9ee] flex justify-center items-center ">
                <div className="flex justify-center items-center pt-[150px]">
                   {/*SignUp*/}
                    <SignUp />
                </div>


            </div>
        </>
    )
}