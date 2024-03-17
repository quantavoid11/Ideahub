
import Opened from "./Dropdowns/Opened";
import Owned from "./Dropdowns/Owned";
import { IoGridOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";

export default function DeashboardHeader() {
    
    return (
        <div className="flex  mt-[50px] justify-between mr-10">
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
                        <BsList  size={"30"}/>
                    </button>
                </div>
            </div>


        </div>
    )
}