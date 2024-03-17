import NewBoardButton from "./Templates/NewBoardButton";


export default function DeashboardTemplate(){
    return (
        <div className="flex flex-col mt-10 mr-12">
            <div className=" hidden lg:flex ">
            <h1 className=" text-black text-3xl font-semibold">Create a board</h1>
            </div>
            <div className="mt-10 flex justify-between">
                <span className="text-gray-600 font-medium">Recommended templates</span>
                <button className="text-blue-500 hover:bg-blue-200 p-1 hover:rounded-md">Show All</button>
            </div>
            <div className="flex mt-2">
                <NewBoardButton/>
            </div>
            
        </div>
    )
}