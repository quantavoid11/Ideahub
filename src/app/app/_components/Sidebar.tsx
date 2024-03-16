'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import AddButton from "@/app/app/_components/AddButton";

export default function Sidebar(){
    return (
        <div className="w-[60px] bg-[#050038]">

            <AddButton/>
        </div>
    )
}