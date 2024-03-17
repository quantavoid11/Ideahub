'use client '

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";

interface TeamButtonProps {
    id:string,
    name:string,
    imageUrl:string 
}
export default function TeamButton(props:TeamButtonProps){
    const { organization } = useOrganization();
  const { setActive } = useOrganizationList();
  
  const onButtonClick = () => {
    if (!setActive) return;
    setActive({ organization: props?.id });    
  };
    return (
        <TooltipProvider>
            <Tooltip>
                <div  className=" mx-3 h-[35px]  mt-2 flex justify-center items-center opacity-80  hover:opacity-100 ">
                    <TooltipTrigger asChild>
                        <button className="text-white " onClick={onButtonClick} >
                           <Image src={props.imageUrl} alt="team-logo " height={40} width={40} className="rounded-sm"/>
                        </button>
                    </TooltipTrigger>
                </div>
                <TooltipContent>
                    <p>{props.name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}