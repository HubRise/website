// Liveness probe for Kubernetes.
export async function GET(): Promise<Response> {
  console.log("Liveness probe")

  return new Response("OK", {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
