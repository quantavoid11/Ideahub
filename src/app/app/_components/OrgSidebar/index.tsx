'use Client'

import { OrganizationProfile, OrganizationSwitcher, useOrganization, useOrganizationList } from "@clerk/nextjs";
import { faClock, faEarthAsia, faPenToSquare, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import OrgHeader from "./OrgHeader";
import OnOrgOption from "./OnOrgOption";
import Option from "./Option";



export default function OrgSideBar() {
    const {organization}=useOrganization();
    const teamId=organization?.id;
    return (
        <div className="hidden lg:flex flex-col gap-y-3 w-[206px]   ">
            <div className="mt-0">
                <OrgHeader/>
                {teamId&&<OnOrgOption/>}
                <Option/>

            </div>

        </div>
    )
}