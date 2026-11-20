import { TodoList } from "./todos";

const todos = new TodoList();

export function handle(request: Request): Response | Promise<Response> {
  const url = new URL(request.url);
  if (url.pathname === "/health") return new Response("ok");
  if (url.pathname === "/todos" && request.method === "GET") return Response.json(todos.list());
  if (url.pathname === "/todos" && request.method === "POST") {
    return request.json().then((body: { title?: string }) => {
      try {
        return Response.json(todos.add(body.title ?? ""), { status: 201 });
      } catch (error) {
        return Response.json({ error: (error as Error).message }, { status: 400 });
      }
    });
  }
  return new Response("not found", { status: 404 });
}

if (import.meta.main) {
  const server = Bun.serve({ port: Number(process.env.PORT ?? 3000), fetch: handle });
  console.log(`listening on ${server.url}`);
}
