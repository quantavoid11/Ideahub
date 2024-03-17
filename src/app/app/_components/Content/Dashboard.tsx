import DeashboardHeader from "./DashboardHeader";
import DeashboardTemplate from "./DashboardTemplate";


export default function Dashboard(){
    return (
        <div className="mb-0">
            <DeashboardTemplate/>
            <DeashboardHeader/>
        </div>
    )
}