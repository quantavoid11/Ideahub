import {v} from "convex/values";
import {defineSchema, defineTable} from "convex/server";

export default defineSchema({
    boards: defineTable({
        title: v.string(),
        descriptionL: v.string(),
        thumbnail: v.string(),
        owner: v.string(),
        ownerId: v.string(),
        teamId: v.string(),   
    }).index("by_team",["teamId"])
        .searchIndex("search_title",{
            searchField: "title",
            filterFields: ["teamId"]
        })
});