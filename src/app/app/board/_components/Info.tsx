import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
<CiMenuBurger />

export default function Info() {
    return (
        <div className="h-12 absolute left-2 top-4 bg-white flex items-center shadow-md rounded-md ">
            <div className="flex  items-center justify-center m-1">
                <Link href={"/app/dashboard"}>
                    <div className=" hover:bg-indigo-200 p-1  rounded-md flex items-center justify-center">
                        <h1 className="text-black  font-semibold text-2xl text-center">ideahub</h1>
                    </div>
                </Link>
                <div className="border h-7 m-auto ml-3 border-gray-200">
                </div>
                <div className=" hover:bg-indigo-200 p-2 mx-3   rounded-md flex items-center justify-center">
                    <button className="text-black  font-normal text-lg text-center">Untitled</button>

                </div>
                <div className="border-r-2 h-7 m-auto border-gray-200">
                </div>
            </div>
            <div className="flex  items-center justify-center m-2">
                <div className=" hover:bg-indigo-200 p-2  rounded-md flex items-center justify-center font-bold">
                <CiMenuBurger size="25" />
                </div>
            </div>
        </div>
    )
}