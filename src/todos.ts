export type Todo = { id: number; title: string; done: boolean };

export class TodoList {
  private items: Todo[] = [];
  private nextId = 1;

  add(title: string): Todo {
    const trimmed = title.trim();
    if (!trimmed) throw new Error("title is required");
    const todo = { id: this.nextId++, title: trimmed, done: false };
    this.items.push(todo);
    return todo;
  }

  complete(id: number): Todo {
    const todo = this.items.find((item) => item.id === id);
    if (!todo) throw new Error(`no todo ${id}`);
    todo.done = true;
    return todo;
  }

  list(): Todo[] {
    return [...this.items];
  }
}
