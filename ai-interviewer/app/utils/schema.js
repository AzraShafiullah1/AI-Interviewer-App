import { create } from "domain";
import { varchar } from "drizzle-orm/mysql-core";
import { pgTable } from "drizzle-orm/pg-core";
import { text } from "stream/consumers";

export const aiInterviewer=pgTable("aiInterviewer",{
    id:serial("id").primarykey().notNull,
    jsonAiResp:text("jsonAiResp").notNull(),
    jobPosition:varchar("jobPosition").notNull(),
    jobDesc:varchar("jobDesc").notNull(),
    jobExperiece:varchar("jobExperience").notNull(),
    createdBy:varchar("createdBy").notNull(),
    createdAt:varchar("createdAt"),
    aiId:varchar("aiId").notNull(),
});