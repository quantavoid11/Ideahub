'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useOrganization, UserButton } from "@clerk/nextjs";
import { faBell, faCircleQuestion, faPlug, faPlus, faQuestion, faQuestionCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks"
import qs from "query-string";

export default function SearchBar() {
    const router = useRouter();
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value, 500);
    const { organization } = useOrganization();
    const teamId = organization?.id;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: "/app/dashboard",
            query: {
                search: debouncedValue,
            }
        }, { skipEmptyString: true, skipNull: true });

        router.push(url);
    }, [debouncedValue, router])

    return (
        <div className="w-full flex gap-x-20">
            <div className="w-1/2">
                <div className="relative" >
                    <FontAwesomeIcon icon={faSearch} className="absolute top-1 left-4 text-black text-center mt-1.5 " size={"lg"} />
                    <Input className="shadow-none border-gray-500 px-12 h-10 focus:border-black" placeholder="Search boards" value={value} onChange={handleChange} />
                </div>
            </div>
            <div className="w-1/2 flex flex-row-reverse gap-x-8 pr-8">
                <div className="flex flex-end gap-x-6">
                    <button className="hover:text-blue-600">
                        <FontAwesomeIcon icon={faQuestionCircle} size="xl" />
                    </button>
                    <button className="hover:text-blue-600">
                        <FontAwesomeIcon icon={faBell} size="xl" />
                    </button>
                    <UserButton afterSignOutUrl="/" />
                </div>
                {teamId &&
                    <div className="flex  gap-x-4 ">
                        <Button className="text-blue-600 bg-white shadow-none border border-blue-600 hover:bg-gray-100 h-10 w-30 px-4 space-x-2 ">
                            <FontAwesomeIcon icon={faPlus} />
                            <p className="font-normal">Invite members</p>
                        </Button>

                        <Button className="text-white bg-blue-600 shadow-none hover:bg-blue-700 h-10 w-30 px-4 space-x-1 ">
                            <p className="font-normal">Upgrade</p>
                        </Button>

                    </div>
                }
            </div>

        </div>
    )
}