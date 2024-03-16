import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {CreateOrganization} from "@clerk/nextjs";


export default function AddButton(){
    return (
        <TooltipProvider>
        <Tooltip>

                <Dialog>
                    <DialogTrigger asChild>
                        <div
                            className="bg-blue-700 mx-3 h-[35px] rounded-sm  mt-2 flex justify-center items-center hover:bg-blue-600">
                            <TooltipTrigger asChild>
                            <button className="text-white ">
                                <FontAwesomeIcon icon={faPlus} size={"lg"}/>
                            </button>
                            </TooltipTrigger>
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <CreateOrganization/>
                    </DialogContent>
                </Dialog>

            <TooltipContent>
                <p>Add teams</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>



    )
}