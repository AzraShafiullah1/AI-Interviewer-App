import { create } from "domain";
import { varchar } from "drizzle-orm/mysql-core";
import { pgTable } from "drizzle-orm/pg-core";
import { text } from "stream/consumers";

export const AIInterviewer=pgTable('aiInterviewer',{
    id:serial('id').primarykey(),
    jsonAIResp:text('jsonAIResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperiece:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    aiId:varchar('aiId').notNull()
})