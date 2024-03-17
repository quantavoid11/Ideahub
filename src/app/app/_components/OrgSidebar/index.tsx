'use Client'

import { OrganizationProfile, OrganizationSwitcher, useOrganization } from "@clerk/nextjs";
import { faClock, faEarthAsia, faPenToSquare, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


export default function OrgSideBar() {
    const { organization } = useOrganization();
    console.log(organization);

    return (
        <div className="hidden lg:flex flex-col gap-y-3 w-[360px]   ">
            <div className="mt-0">
                <div className="flex  mx-6 gap-x-2  items-center ">
                    <Image src={"/logo.svg"} alt="ideahub" height={50} width={50} />
                    <p className="text-center text-black font-bold text-3xl">ideaHub</p>
                    <div className="flex justify-center items-center bg-gray-300 px-2.5 py-1.5 rounded-[25px]">
                        <button className="text-black text-center text-xl">free</button>
                    </div>
                </div>
                <div className="flex flex-col mx-6 mt-10 gap-y-4">
                    <div className="flex text-black items-center  text-lg  ">
                        <button className=" space-x-3 focus:text-blue-600 hover:text-blue-600 focus:cursor-default">
                            <FontAwesomeIcon icon={faClock} />
                            <span className="text-center">Recent boards</span>
                        </button>
                    </div>
                    <div className="flex text-black items-center  text-lg  ">
                        <button className=" space-x-2.5 focus:text-blue-600 hover:text-blue-600 focus:cursor-default">
                            <FontAwesomeIcon icon={faStar} />
                            <span className="text-center">Starred boards</span>
                        </button>
                    </div>
                    <div className="flex  ">
                        <OrganizationSwitcher />
                    </div>

                </div>
                <div className="flex flex-col mx-6 mt-4 gap-y-8">
                    <div className="flex flex-col gap-y-4 border-b-2 border-slate-400 pb-8">
                        <div className="flex flex-col gap-y-4">
                            <div className="flex text-black items-center  text-lg  ">
                                <button className=" space-x-3 focus:text-blue-600 hover:text-blue-600 focus:cursor-default">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    <span className="text-center">Boards in this team</span>
                                </button>
                            </div>
                            <div className="flex text-black items-center  text-lg  ">
                                <button className=" space-x-3 focus:text-blue-600 hover:text-blue-600 focus:cursor-default">
                                    <FontAwesomeIcon icon={faEarthAsia} />
                                    <span className="text-center">IdeaVerse</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold">Projects</span>
                            <button className="bg-white rounded-md border border-gray-400 px-1.5 hover:border-black">
                                <FontAwesomeIcon icon={faPlus} />
                            </button>

                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}