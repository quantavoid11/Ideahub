import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";


export default function Navbar(){
    return (
        <div className="bg-white  w-full fixed h-[74px] ">
            <div className="px-6 mx-[60px]">
                <div >
                    <nav className="flex  justify-between py-4 px-3 gap-x-2">

                        <div className="">
                            <Link href="/">
                                <div className="flex  gap-x-2 items-center ">
                                    <Image
                                        src="/logo.svg"
                                        alt="Ideahub Logo"
                                        height={40}
                                        width={40}
                                    />
                                    <h1 className="text-2xl font-bold tet-center">ideaHub</h1>
                                </div>
                            </Link>
                        </div>

                        <div className="flex  gap-x-2">

                            <div className="flex gap-x-2">
                                <Button asChild
                                        className="bg-white h-10 text-black border-black border text-[18px] font-normal hover:bg-black hover:text-white px-3">
                                    <Link href="/signup">Sign up </Link>
                                </Button>

                            </div>


                        </div>
                    </nav>
                </div>
            </div>


        </div>
    )
}