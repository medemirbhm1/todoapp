import { cookies } from "next/headers";
import { verifyToken } from "./auth/token";
import prisma from "@/prisma";
import { Task } from "@prisma/client";

export const getUser = async (): Promise<User | null> => {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      throw new Error("Unauthorized");
    }
    const result = await verifyToken(token);
    if (!result || !result.payload || !result.payload.id) {
      throw new Error("Unauthorized");
    }
    const userData = await prisma.user.findUnique({
      where: {
        id: result.payload.id as string,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    return userData as User;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getTasks = async (): Promise<Task[]> => {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      throw new Error("Unauthorized");
    }
    const result = await verifyToken(token);
    if (!result || !result.payload || !result.payload.id) {
      throw new Error("Unauthorized");
    }
    const tasks = await prisma.task.findMany({
      where: {
        userId: result.payload.id as string,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return tasks;
  } catch (err) {
    console.error(err);
    return [];
  }
};
