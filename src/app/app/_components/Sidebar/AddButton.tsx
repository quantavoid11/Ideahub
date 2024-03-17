'use client'

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {CreateOrganization} from "@clerk/nextjs";
import { useState } from "react";


export default function AddButton(){
    const [open,setOpen]=useState(false);

    return (
        <TooltipProvider>
        <Tooltip>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <div
                            className="bg-white/25 mx-4 h-[40px] w-[40px] rounded-sm  mt-2 flex justify-center opacity-70 items-center hover:opacity-100">
                            <TooltipTrigger asChild>
                            <button className="text-white " onClick={()=>setOpen(true)}>
                                <FontAwesomeIcon icon={faPlus} size={"lg"}/>
                            </button>
                            </TooltipTrigger>
                        </div>
                    </DialogTrigger>
                    <DialogContent >
                       
                        <CreateOrganization skipInvitationScreen={true} afterCreateOrganizationUrl="/app/dashboard"
                        />
                    </DialogContent>
                </Dialog>

            <TooltipContent>
                <p>Add teams</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>



    )
}