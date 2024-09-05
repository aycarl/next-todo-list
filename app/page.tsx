import { createTodos, getTodos } from "@/app/utils/data";
// import "bulma/css/bulma.css";

export default function Home() {

  return (
    <div>
      <h1 className="title is-1">NEXT JS Todo List App</h1>
      <p className="subtitle is-3">This is a simple todo list app built with Next.js</p>
      <Search />
      <br />
      <TodoForm />
      <br />
      <TodoList />
    </div>
  );
}

const Search = () => {
  return (
    <div>
      <input className="input" type="text" placeholder="Search todos..." />
    </div>
  );
}

const TodoList = async () => {
  const todos = await getTodos();
  return (
    <div>
      <ul>
        {todos && todos.map((todo: {id: string, title: string}) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

const TodoForm = () => {
  return (
    <form action={createTodos}>
      <div>
        <input className="input" type="text" placeholder="Todo title" />
      </div>
      <div>
        <textarea className="textarea" placeholder="Todo description"></textarea>
      </div>
      <button className="button is-primary">Add Todo</button>
    </form>
  );
}
