export const runtime = "nodejs"

import { NextResponse } from "next/server"

export async function POST(request: Request) {
  return NextResponse.json({
    ok: true,
    user: {
      id: "demo-user",
      email: "demo@example.com",
      role: "patient",
      displayName: "Demo User"
    }
  })
}
