import {UserButton, UserProfile} from "@clerk/nextjs";
import Sidebar from "@/app/app/_components/Sidebar";


export default function dashboardPage(){
    return (
        <div className="h-screen flex  justify-between">
            <Sidebar/>
            <UserButton/>
        </div>
    )
}