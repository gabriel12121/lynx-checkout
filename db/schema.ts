import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    email: text("email").notNull().unique(),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
    clerkId: text("clerkId").notNull(),
    firtsName: text("firtsName").notNull(),
    lastName: text("lastName").notNull(),
    photo: text("photo").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("update_at").notNull().defaultNow()
});