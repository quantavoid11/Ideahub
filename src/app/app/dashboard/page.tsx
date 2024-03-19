'use client'

import Sidebar from "@/app/app/_components/Sidebar";
import OrgSideBar from "../_components/OrgSidebar";
import Content from "../_components/Content";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import Loading from "@/components/Auth/Loading";

export default function DashboardPage() {
    const { isLoading } = useConvexAuth();

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="h-screen flex ">
                    <div className="flex overflow-hidden">
                        <Sidebar />
                    </div>
                    <div className="flex w-full">
                        <div className="mt-6 ml-4">
                            <OrgSideBar />
                        </div>
                        <div className="w-full overflow-y-auto ml-4 mt-6">
                            <Content />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
