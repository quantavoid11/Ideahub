import Info from "./Info";
import Toolbar from "./Toolbar";
// import User from "./Users";

interface CanvasProps{
  
        boardId:string
   
}

export default function Canvas({boardId}:CanvasProps){
    return (
        <main className="w-full h-full realtive bg-neutral-200  touch-none">
            
            <Info/>
           {/* <User/> */}
            <Toolbar/>
            

            
        </main>
    )
}