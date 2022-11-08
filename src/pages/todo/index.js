import { useSelector } from "react-redux";
import HeaderLogout from "../../components/layout/header/index_logout";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import TodoTitle from "./components/todoTitle";

const TodoPage = () => {
  const state = useSelector((state) => state.todoReducer.allPost);
  return (
    <>
      <HeaderLogout />
      <TodoTitle state={state} />
      <TodoForm />
      {state.map((v) => (
        <TodoList key={v.id} state={v} />
      ))}
    </>
  );
};
export default TodoPage;
