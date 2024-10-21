"use server";

import prisma from "@/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "./auth/token";
import { TaskForm } from "@/app/dashboard/newtask/page";
import { revalidatePath } from "next/cache";
import { editUserForm } from "@/app/dashboard/user/page";
import routes from "./routes";

export const createTask = async (values: TaskForm): Promise<boolean> => {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      throw new Error("Unauthorized");
    }
    const result = await verifyToken(token);
    if (!result || !result.payload || !result.payload.id) {
      throw new Error("Unauthorized");
    }
    const taskName = values.task;
    if (!taskName) {
      throw new Error("Task name is required");
    }
    await prisma.task.create({
      data: {
        title: taskName,
        user: {
          connect: {
            id: result.payload.id as string,
          },
        },
      },
    });
    await revalidatePath(routes.DASHBOARD);

    return true;
  } catch (err: unknown) {
    console.error(err);
    return false;
  }
};

export const toggleTask = async (taskId: string): Promise<boolean> => {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      throw new Error("Unauthorized");
    }
    const result = await verifyToken(token);
    if (!result || !result.payload || !result.payload.id) {
      throw new Error("Unauthorized");
    }
    if (!taskId) {
      throw new Error("Task name is required");
    }
    await prisma.$queryRaw`
      UPDATE "Task"
      SET "isDone" = NOT "isDone"
      WHERE "id" = ${taskId}
      `;
    await revalidatePath(routes.DASHBOARD);
    return true;
  } catch (err: unknown) {
    console.error(err);
    return false;
  }
};

export const deleteTask = async (taskId: string): Promise<boolean> => {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      throw new Error("Unauthorized");
    }
    const result = await verifyToken(token);
    if (!result || !result.payload || !result.payload.id) {
      throw new Error("Unauthorized");
    }
    if (!taskId) {
      throw new Error("Task name is required");
    }
    await prisma.task.delete({
      where: {
        id: taskId,
      },
    });
    await revalidatePath(routes.DASHBOARD);
    return true;
  } catch (err: unknown) {
    console.error(err);
    return false;
  }
};

export const editTask = async (
  taskId: string,
  title: string
): Promise<boolean> => {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      throw new Error("Unauthorized");
    }
    const result = await verifyToken(token);
    if (!result || !result.payload || !result.payload.id) {
      throw new Error("Unauthorized");
    }
    if (!taskId) {
      throw new Error("Task name is required");
    }
    await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        title,
      },
    });
    await revalidatePath(routes.DASHBOARD);
    return true;
  } catch (err: unknown) {
    console.error(err);
    return false;
  }
};

export const editUser = async (userData: editUserForm): Promise<void> => {
  const token = cookies().get("token")?.value;
  if (!token) {
    throw new Error("Unauthorized");
  }
  const result = await verifyToken(token);
  if (!result || !result.payload || !result.payload.id) {
    throw new Error("Unauthorized");
  }
  await prisma.user.update({
    data: {
      name: userData.name,
      email: userData.email,
    },
    where: {
      id: result.payload.id as string,
    },
  });
  await revalidatePath(routes.DASHBOARD);
};
