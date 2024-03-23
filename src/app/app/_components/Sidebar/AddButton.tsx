'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreateOrganization, useOrganizationList } from "@clerk/nextjs";

export default function AddButton() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [inputError, setInputError] = useState(false);
    const { createOrganization } = useOrganizationList();
    const [organizationName, setOrganizationName] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setOrganizationName(e.target.value)
        if (e.target.value.trim() === "") {
            setInputError(true);
        } else {
            setInputError(false);
        }
    };

    const handleCreateTeam = () => {
        if (value.trim() === "") {
            setInputError(true);
            return; 
        }
        
        if (createOrganization) {
            createOrganization({name:organizationName});
        }
       
        setOrganizationName("");
        setOpen(false);
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <div className="bg-white/25 mx-2 h-[35px] w-[35px] rounded-sm  mt-1 flex justify-center opacity-70 items-center hover:opacity-100">
                            <TooltipTrigger asChild>
                                <button className="text-white" onClick={() => setOpen(true)}>
                                    <FontAwesomeIcon icon={faPlus} size={"lg"} />
                                </button>
                            </TooltipTrigger>
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <form>
                        <div className="h-full w-3/4 m-10">
                            <h1 className="text-black font-semibold text-2xl">Create a new team</h1>
                            <div className="flex flex-col mt-6">
                                <p className="text-lg">Name your team before choosing a new plan subscription.</p>
                                <Input
                                    className={`shadow-none w-full mt-4 h-12 border-black text-lg ${inputError ? "border-red-500" : ""
                                        }`}
                                    placeholder="Enter team name"
                                    value={value}
                                    onChange={handleChange}
                                />
                                {inputError && (
                                    <p className="text-red-500 text-sm mt-1">Please enter a team name</p>
                                )}
                                <div className="flex gap-x-8 mt-6">
                                    <Button
                                        className="bg-blue-600 shadow-none w-[140px] h-12 hover:bg-blue-700"
                                        onClick={handleCreateTeam}
                                    >
                                        <span className="text-[16px]">Create team</span>
                                    </Button>
                                    <Button
                                        className="bg-gray-100 opacity-80 shadow-none w-[100px] h-12 text-black text-[16px] hover:bg-gray-100 hover:opacity-100"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </div>
                        </form>
                       
                    </DialogContent>
                </Dialog>
                <TooltipContent>
                    <p>Add teams</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
