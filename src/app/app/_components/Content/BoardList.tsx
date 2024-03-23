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

export default function BoardList({teamId,query}:BoardListProps){
    const boards=useQuery(api.boards.getBoards,{
        teamId:teamId,
        ...query
    });
    
    return (
        <div className="flex gap-x-2 mt-4 flex-wrap gap-y-1">
            {boards?.map((board)=>(
                <BoardCard key={board._id}id={board._id} title={board.title}owner={board.owner}ownerId={board.ownerId}createdAt={board._creationTime}updatedAt={board._creationTime}teamId={board.teamId}thumbnail={board.thumbnail} starred={false}/>
            ))}
        </div>
    )

}