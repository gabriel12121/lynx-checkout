"use client"
import db from "../../db/drizzle";
import { users } from "../../db/schema";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { asc } from "drizzle-orm";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const usersRouter = router({
  get: publicProcedure.query(async () => {
    return await db.select().from(users).orderBy(asc(users.id));
  }),
  create: publicProcedure.input(z.object({
    clerkId: z.string(),
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    photo: z.string()
  })).mutation(async (opts) => {
    const { input } = opts;
    console.log(input);

    const salt = genSaltSync(10);
    const hash = hashSync(input.password, salt);

    await db.insert(users).values({
      clerkId: input.clerkId,
      username: input.username,
      email: input.email,
      firstName: input.firstName,
      lastName: input.lastName,
      password: hash,
      photo: input.photo
    });
  })
});
