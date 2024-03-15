'use client'

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";

interface ConvexClientProviderProps {
    children:React.ReactNode;
}

const convex_url=process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex=new ConvexReactClient(convex_url);

export const ConvexClerkProvider=({children,}:ConvexClientProviderProps)=>{
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>

    )
}
