import { NextResponse } from "next/server"

export async function GET(): Promise<Response> {
  // Block crawlers if NO_INDEX is set
  const content = process.env.NO_INDEX ? "User-agent: *\nDisallow: /\n" : "User-agent: *\nAllow: /\n"

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
