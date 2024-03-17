import { useQuery } from "convex/react"
import { api } from "../../../../../convex/_generated/api";
import BoardCard from "./BoardCard";

interface BoardListProps{
    teamId:string,
    query:{
        search?:string,
        starred?:string
    }
    
}

export default function BoardLsit({teamId,query}:BoardListProps){
    const boards=useQuery(api.boards.getBoards,{
        teamId:teamId,
        ...query
    });

    console.log(boards);
    return (
        <div className="flex gap-x-2 mt-4">
            <BoardCard/>
            <BoardCard/>
            <BoardCard/>
            <BoardCard/>
            <BoardCard/>
        </div>
    )

}