'use client'

import { Button } from "@/components/ui/button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { toast } from "sonner";
import { useApiMutaion } from "@/hooks/useApiMutation";

export default function NewBoardButton(){
    const router=useRouter();
    const {organization}=useOrganization();
    const {mutation,pending}=useApiMutaion(api.board.createBoard);
    
    const onClickHandler=()=>{
        if(!organization){
            return;
        }

       mutation({
            teamId:organization.id,
            title:"Untitled"
        }).then((id)=>{    
            toast.success("Board Created");
            router.push(`/app/board/${id}`);
        })
        .catch(()=>{
            toast.error("Failed to create board");
        }) 
    }
    
    return (
       <Button disabled={pending} onClick={onClickHandler} className="flex flex-col bg-white shadow-none h-[120px] w-[120px] hover:bg-white p-0 ">
        <div className="mb-2 w-full h-full bg-blue-600 flex justify-center items-center rounded-lg hover:bg-blue-700">
            <div >
                <FontAwesomeIcon icon={faPlus} size="2xl"/>
            </div>   
        </div>
        <div className="w-full flex ">
            <span className="text-black hover:text-blue-700">New Board</span>
        </div>
       </Button>
    )
}