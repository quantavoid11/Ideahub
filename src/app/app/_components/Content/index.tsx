import { UserButton } from "@clerk/nextjs";
import SearchBar from "./SearchBar";

export default function Content(){
    return (
        <div className="w-full bg-white flex flex-col ">
            <div className="mt-0">
                <SearchBar/>
                
            </div>
             
        </div>
    )
}