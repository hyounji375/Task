import HeaderLogout from "../../components/layout/header/index_logout";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import TodoTitle from "./components/todoTitle";

const TodoPage = () => {
  return (
    <>
      <HeaderLogout />
      <TodoTitle />
      <TodoForm />
      <TodoList />
    </>
  );
};
export default TodoPage;
