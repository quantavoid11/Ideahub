import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import { faBell, faCircleQuestion, faPlug, faPlus, faQuestion, faQuestionCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SearchBar(){
    return (
        <div className="w-full flex gap-x-20">
            <div className="w-1/2">
               <div className="relative" >
                <FontAwesomeIcon icon={faSearch} className="absolute top-1 left-4 text-black text-center mt-1.5 " size={"lg"} />
                    <Input className="shadow-none border-gray-500 px-12 h-10" placeholder="Search boards"/>
               </div>
            </div>
            <div className="w-1/2 flex gap-x-8">
                <div className="flex gap-x-4 ">
                    <Button className="text-blue-600 bg-white shadow-none border border-blue-600 hover:bg-gray-100 h-10 w-30 px-4 space-x-2 ">
                        <FontAwesomeIcon icon={faPlus}/>
                        <p className="font-normal">Invite members</p>
                    </Button>
                    <Button className="text-white bg-blue-600 shadow-none hover:bg-blue-700 h-10 w-30 px-4 space-x-1 ">
                    <p className="font-normal">Upgrade</p>
                    </Button>
                    
                </div>
                <div className="flex gap-x-6">
                    <button className="hover:text-blue-600">
                        <FontAwesomeIcon icon={faQuestionCircle} size="xl"/>
                    </button>
                    <button className="hover:text-blue-600">
                    <FontAwesomeIcon icon={faBell} size="xl"/>
                    </button>
                <UserButton afterSignOutUrl="/" />
                </div>
            </div>
            
        </div>
    )
}