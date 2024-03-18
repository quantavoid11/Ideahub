import Image from "next/image"

export default function OrgHeader(){
    return (
        <div className="flex  mx-2 gap-x-2  items-center ">
                    <Image src={"/logo.svg"} alt="ideahub" height={40} width={40} />
                    <p className="text-center text-black font-bold text-2xl">ideaHub</p>
                    <div className="flex justify-center items-center bg-gray-300 px-2.5 py-1.5 rounded-[20px]">
                        <button className="text-black text-center text-md">free</button>
                    </div>
                </div>
    )
}