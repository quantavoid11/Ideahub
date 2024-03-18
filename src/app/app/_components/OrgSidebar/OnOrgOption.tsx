import { OrganizationSwitcher } from "@clerk/nextjs";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function OnOrgOption(){
    return (
        <div className="flex flex-col mx-2 mt-10 gap-y-4">
        <div className="flex text-black items-center  text-s  ">
            <button className=" space-x-3 focus:text-blue-600 hover:text-blue-600 focus:cursor-default">
                <FontAwesomeIcon icon={faClock} />
                <span className="text-center">Recent boards</span>
            </button>
        </div>
        <div className="flex text-black items-center  text-s ">
            <button className=" space-x-2.5 focus:text-blue-600 hover:text-blue-600 focus:cursor-default">
                <FontAwesomeIcon icon={faStar} />
                <span className="text-center">Starred boards</span>
            </button>
        </div>
        <div className="flex  -ml-1">
            <OrganizationSwitcher />
        </div>

    </div>

    )
}