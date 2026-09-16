import { NextResponse } from "next/server";
import { db } from "@/src/prisma/db";

export async function GET() {
  const messages = await db.orm.public.LastMessage.all();

  const lastMessage = messages[0] ?? null;

  return NextResponse.json(lastMessage);
}