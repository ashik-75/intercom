export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}

export async function POST(req: Request) {
  return new Response("POSt request");
}
