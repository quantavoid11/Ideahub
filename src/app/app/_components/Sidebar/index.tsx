

import AddButton from "@/app/app/_components/Sidebar/AddButton";
import {Teams} from "@/app/app/_components/Sidebar/Teams";

export default function Sidebar(){
    return (
        <div className=" w-[60px] bg-[#050038] flex flex-col gap-y-3 left-0 h-full ">
            <div >
                <Teams/>
            </div>
            
            <AddButton/>
        </div>
    )
}