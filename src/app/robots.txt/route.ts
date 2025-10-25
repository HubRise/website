import { NextResponse } from "next/server"

// Prevents Next from pre-rendering this route at build time, as it relies on a runtime ENV variable
export const dynamic = "force-dynamic"

export async function GET(): Promise<Response> {
  // Block crawlers if NO_INDEX is set
  const content = process.env.NO_INDEX ? "User-agent: *\nDisallow: /\n" : "User-agent: *\nAllow: /\n"

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
