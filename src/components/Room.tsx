"use client"

import { ReactNode } from "react";
import { RoomProvider } from "../../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";

interface RoomProps{
    children:ReactNode,
    boardId:string,
    fallback:NonNullable<ReactNode>
}
export default function Room({children,boardId,fallback}:RoomProps){
    return (
        <RoomProvider id={boardId} initialPresence={{}}>
          <ClientSideSuspense fallback={fallback}>
            {()=>children}
          </ClientSideSuspense>
        </RoomProvider>
      );

}