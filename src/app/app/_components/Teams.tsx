
import TeamButton from "@/app/app/_components/TeamButton";
import {clerkClient, OrganizationList, useOrganization } from "@clerk/nextjs";
import { useOrganizationList } from "@clerk/nextjs";
import {useState} from "react";


export default  async function Teams() {
    
    // const { userMemberships } = useOrganizationList({
    //     userMemberships: {
    //         infinite: true,
    //       },
    //   });
      
    // console.log(userMemberships)
    const organizations = await clerkClient.organizations.
getOrganizationList();



    return (
        <ul className="flex flex-col gap-y-0.5 "> 
            <li>
                {organizations?.map(team => (<TeamButton imageUrl={team.imageUrl} name={team.name} key={team.id} id={team.id}/>))}
            </li>     
        </ul>
    )
}