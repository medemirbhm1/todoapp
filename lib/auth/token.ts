import jwt from "jsonwebtoken";
import * as jose from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

interface TokenPayload {
  email: string;
  id: string;
}

export function createToken(payload: TokenPayload): string {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "72h",
  });
}

export async function verifyToken(token: string) {
  try {
    return jose.jwtVerify(token, secret);
  } catch (err) {
    return null;
  }
}
