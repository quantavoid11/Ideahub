import { v } from "convex/values";
import { query } from "./_generated/server";

export const getBoards = query({
    args: {
        teamId: v.string(),
        search: v.optional(v.string()),
        starred: v.optional(v.string())
    },
    handler: async (ctx, args) => {
        const userIdendity = await ctx.auth.getUserIdentity();
        
        if (!userIdendity) {
            throw new Error("User Unauthorized");
        }

        const boards = await ctx.db
            .query("boards")
            .withIndex("by_team", (q) => q.eq("teamId", args.teamId))
            .order("desc")
            .collect();
        return boards;
    },
})