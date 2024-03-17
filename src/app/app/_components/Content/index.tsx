import { UserButton } from "@clerk/nextjs";

export default function Content(){
    return (
        <div className="w-full bg-slate-700 flex flex-col ">
            <div className="mt-4">
                <div className="flex flex-col items-end mr-4">
                <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
             
        </div>
    )
}