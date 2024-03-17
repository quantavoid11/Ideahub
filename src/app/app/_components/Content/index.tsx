import { UserButton } from "@clerk/nextjs";
import SearchBar from "./SearchBar";
import Dashboard from "./Dashboard";

export default function Content(){
    return (
        <div className="w-full bg-white flex flex-col ">
            <div className="mt-0">
                <SearchBar/>
                <Dashboard/>
            </div>
             
        </div>
    )
}