import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Navbar from "@/app/(Home)/_components/Navbar";
export default function Home() {
  return (
      <>
        <Navbar/>

          <div className=" h-full bg-[#fcf9ee] ">

              <div className="flex  justify-center items-center flex-col pt-[154px] gap-y-2">
                  <h1 className="text-6xl text-center"> Enter with an idea.</h1>
                  <h1 className="text-6xl text-center">Exit with the next big break.</h1>
                  <p className="text-xl mt-5">Build, iterate, and design faster with Ideahub — convert ideas to
                      reality.</p>
                  <div className="w-3/12 mt-4 ">
                      <div className="-mx-[20px]">
                          <Input type="email" placeholder="Enter your work email"
                                 className="bg-white text-lg my-2 h-[50px] border rounded-lg border-gray-400 outline-none active:border-blue-400  hover:border-blue-700 "/>
                          <Link href="/signup">
                              <Button className="text-center mt-2 bg-blue-700 w-full h-12 text-[18px] font-normal hover:bg-blue-800" >Sign up free</Button>
                          </Link>

                      </div>

                      <p className="text-center text-[14px] text-gray-500 mt-4">Keep work and life separate by using your work email</p>
                  </div>


              </div>

              <div className="py-[110px] flex  items-center justify-center flex-col">
                  <h1 className="text-3xl text-center">Dont start from scratch —</h1>
                   <h1 className="text-3xl text-center">   dive right into Ideahub.</h1>

              </div>

          </div>
      </>


  )
      ;
}
