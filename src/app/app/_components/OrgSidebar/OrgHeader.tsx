import Image from "next/image"

export default function OrgHeader(){
    return (
        <div className="flex  mx-6 gap-x-2  items-center ">
                    <Image src={"/logo.svg"} alt="ideahub" height={50} width={50} />
                    <p className="text-center text-black font-bold text-3xl">ideaHub</p>
                    <div className="flex justify-center items-center bg-gray-300 px-2.5 py-1.5 rounded-[25px]">
                        <button className="text-black text-center text-xl">free</button>
                    </div>
                </div>
    )
}