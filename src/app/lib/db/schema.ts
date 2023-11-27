import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const $questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  imageUrl: text("image_url"),
  question: text("question").notNull(),
});

export type QuestionType = typeof $questions.$inferInsert;
