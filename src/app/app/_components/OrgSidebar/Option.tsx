'use client'
import { useOrganization } from "@clerk/nextjs";
import { faEarthAsia, faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Option(){
    const {organization}=useOrganization();
    const teamId=organization?.id;
    return (
                       
        <div className="flex flex-col mx-2 mt-16 gap-y-8">
        <div className="flex flex-col gap-y-4 border-b-2 border-slate-400 pb-8">
            <div className="flex flex-col gap-y-4">
                <div className="flex text-black items-center  text-s  ">
                    <button className=" space-x-2 focus:text-blue-600 hover:text-blue-600 focus:cursor-default">
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <span className="text-center">Boards in this team</span>
                    </button>
                </div>
                <div className="flex text-black items-center  text-s  ">
                    <button className=" space-x-3 focus:text-blue-600 hover:text-blue-600 focus:cursor-default">
                        <FontAwesomeIcon icon={faEarthAsia} />
                        <span className="text-center">IdeaVerse</span>
                    </button>
                </div>
            </div>
            {teamId&&
            <div className="flex justify-between items-center">
                <span className="text-s font-bold">Projects</span>
                <button className="bg-white rounded-md border border-gray-400 px-1.5 hover:border-black">
                    <FontAwesomeIcon icon={faPlus} />
                </button>

            </div>}
        </div>


    </div>
    )
}