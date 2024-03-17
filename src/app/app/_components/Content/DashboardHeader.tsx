'use client ';

import Opened from "./Dropdowns/Opened";
import Owned from "./Dropdowns/Owned";
import { IoGridOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import BoardLsit from "./BoardList";
import { useOrganization } from "@clerk/nextjs";

export default function DeashboardHeader() {
    const {organization}=useOrganization();
    const teamId:string=organization?.id!;

    return (
        <div className="flex flex-col mt-[50px]">
            <div className="flex   justify-between mr-10">
                <div className="lg:flex ">
                    <h1 className=" text-black text-3xl font-semibold">Boards in this team</h1>
                </div>
                <div className="flex gap-x-2">
                    <div className="flex ">
                        <Owned />
                        <Opened />
                    </div>
                    <div className="flex gap-x-2 text-gray-500">
                        <button className=" focus:text-black hover:text-black focus:cursor-default">
                            <IoGridOutline size={"25"} />

                        </button>
                        <button className="  focus:text-black hover:text-black focus:cursor-default">
                            <BsList size={"30"} />
                        </button>
                    </div>
                </div>
            </div>
            {teamId&&( <BoardLsit teamId={organization?.id!} query={{}}/> )}
        </div>

    )
}