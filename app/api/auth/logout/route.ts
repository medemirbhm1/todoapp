import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cookie = serialize("token", "", {
      httpOnly: true,
      maxAge: -1, // Setting maxAge to -1 to delete the cookie
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
