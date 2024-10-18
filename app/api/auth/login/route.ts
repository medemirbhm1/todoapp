import { createToken } from "@/lib/auth/token";
import { comparePassword } from "@/lib/auth/password";
import { serialize } from "cookie";
import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.email || !body?.password) {
      throw new Error("missing email or password");
    }
    const { email, password } = body;
    const u = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!u) {
      throw new Error("Invalid email or password");
    }
    const passwordMatch = await comparePassword(password, u.password);
    if (!passwordMatch) {
      throw new Error("Invalid email or password");
    }
    const token = createToken({
      email: u.email,
      id: u.id,
    });
    const cookie = serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 72, // 3 days
      path: "/",
    });

    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Set-Cookie": cookie,
        "Content-Type": "application/json",
      },
    });
  } catch (err: unknown) {
    return new NextResponse(
      JSON.stringify({ message: (err as { message: string }).message }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
