import { Button } from "@/components/ui/button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NewBoardButton(){
    return (
       <Button className="flex flex-col bg-white shadow-none h-[120px] w-[120px] hover:bg-white p-0 ">
        <div className="mb-2 w-full h-full bg-blue-600 flex justify-center items-center rounded-lg hover:bg-blue-700">
            <div >
                <FontAwesomeIcon icon={faPlus} size="2xl"/>
            </div>   
        </div>
        <div className="w-full flex ">
            <span className="text-black hover:text-blue-700">New Board</span>
        </div>
       </Button>
    )
}