'use client';
import { useOrganization } from "@clerk/nextjs";
import DeashboardHeader from "./DashboardHeader";
import DeashboardTemplate from "./DashboardTemplate";


export default function Dashboard(){
    const {organization}=useOrganization();
    const teamId=organization?.id;
    return (
        <div className="mb-0">
            {teamId&&<DeashboardTemplate/>}
            <DeashboardHeader/>
        </div>
    )
}