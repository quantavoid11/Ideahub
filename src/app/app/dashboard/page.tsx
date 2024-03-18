'use client'

import {UserButton, UserProfile} from "@clerk/nextjs";
import Sidebar from "@/app/app/_components/Sidebar";
import OrgSideBar from "../_components/OrgSidebar";
import Content from "../_components/Content";


export default function dashboardPage(){
    return (
        <div className="h-screen flex ">
            <div className="flex overflow-hidden">
                <Sidebar/>
            </div>
            <div className="flex w-full">
               <div className="mt-6 ml-4">
               <OrgSideBar/>
               </div>
               <div className="w-full overflow-y-auto ml-4 mt-6">
               <Content />
               </div>
               
                
                
                
            </div>
            
            
            
        </div>
    )
}