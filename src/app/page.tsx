import { getAllTodos } from "../../api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import "./page.css";
 

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        {/* <h1 className="text-center text-3xl font-bold">Hiess-Todocko</h1> */}
        <AddTask/>
      </div>
    <TodoList tasks={tasks} />
    </main>
  );
}
