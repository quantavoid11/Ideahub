import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const images = [
    "/placeholders/1.svg",
    "/placeholders/2.svg",
    "/placeholders/3.svg",
    "/placeholders/4.svg",
    "/placeholders/5.svg",
    "/placeholders/6.svg",
    "/placeholders/7.svg",
    "/placeholders/8.svg",
    "/placeholders/9.svg",
    "/placeholders/10.svg",
];

export const createBoard = mutation({
    args: {
        teamId: v.string(),
        title: v.string()
    },
    handler: async (ctx, args) => {
        const userIdendity = await ctx.auth.getUserIdentity();
        if (!userIdendity) {
            throw new Error("User Unauthorized");
        }

        const randomImage = images[Math.floor(Math.random() * images.length + 1)];
        const board = await ctx.db.insert("boards", {
            title: args.title,
            descriptionL: "",
            thumbnail: randomImage,
            owner: userIdendity.name!,
            ownerId: userIdendity.subject,
            teamId: args.teamId,
        });

        return board;
    },

})

export const getBoard = query({
    args: {
       boardId: v.id("boards"),
    },
    handler: async (ctx, args) => {
        const userIdendity = await ctx.auth.getUserIdentity();
        const board = await ctx.db.get(args.boardId)
            
        return board;
    },
})