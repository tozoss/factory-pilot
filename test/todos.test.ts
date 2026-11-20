import { describe, expect, test } from "bun:test";
import { TodoList } from "../src/todos";
import { handle } from "../src/server";

describe("TodoList", () => {
  test("adds and completes a todo", () => {
    const list = new TodoList();
    const todo = list.add("  write tests ");
    expect(todo).toEqual({ id: 1, title: "write tests", done: false });
    expect(list.complete(1).done).toBe(true);
  });

  test("refuses an empty title", () => {
    expect(() => new TodoList().add("   ")).toThrow("title is required");
  });
});

describe("server", () => {
  test("health answers ok", async () => {
    const response = await handle(new Request("http://localhost/health"));
    expect(await response.text()).toBe("ok");
  });
});
