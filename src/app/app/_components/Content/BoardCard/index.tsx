'use client';

import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import Footer from "./Footer";
import { formatDistanceToNow } from "date-fns";
interface BoardCardProps{
    id:string,
    title:string,
    owner:string,
    ownerId:string,
    createdAt:number,
    updatedAt:number,
    teamId:string,
    thumbnail:string,
    starred:boolean
}

export default function BoardCard({id,title,owner,ownerId,createdAt,updatedAt,teamId,thumbnail,starred}:BoardCardProps) {
    const {userId}=useAuth();
    console.log( ownerId);
    const modifier=(userId==ownerId?"Me":owner)
    const modified = formatDistanceToNow(createdAt, {
        addSuffix: true,
      });

    return (
    <div className="flex  flex-col bg-[#fcf9ee]  h-[300px] w-[240px] rounded-lg border border-gray-200 items-center justify-center p-10">
           <div className="flex relative flex-1 h-full w-full m-2 mb-0">
           <Image src={thumbnail} alt={title} fill className="object-fit" />
           </div>
            <Footer title={title} modifier={modifier} modified={modified} starred={starred}/>
    </div>
    )
}