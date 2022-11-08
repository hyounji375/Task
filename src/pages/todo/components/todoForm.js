import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { UseInput } from "../../../hooks/useInput";
import { ADDPOST_SUCCESS } from "../../../reducer/todo";

const TodoForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todoReducer.allPost);

  const [todo, onChangeTodo, setTodo] = UseInput("");

  const onAddTodo = useCallback(() => {
    dispatch({
      type: ADDPOST_SUCCESS,
      data: {
        id:
          (state.length === 0 && 1) ||
          (state.length > 0 && state[state.length - 1].id + 1),
        content: todo,
      },
    });
    setTodo("");
    console.log(state);
  }, [dispatch, state, setTodo, todo]);

  return (
    <Wrap>
      <InputCSS
        type="text"
        placeholder="할 일을 적어주세요."
        value={todo}
        onChange={onChangeTodo}
      />
      <BtWrap>
        <Bt onClick={onAddTodo}>등록하기</Bt>
        <Bt>초기화</Bt>
      </BtWrap>
    </Wrap>
  );
};
export default TodoForm;

const Wrap = styled.div`
  margin: 30px 25%;
  display: flex;
`;

const InputCSS = styled.input`
  margin: 10px 15px;
  padding: 20px;
  width: 500px;
  height: 45px;
  background-color: beige;
  font-size: ${(props) => props.theme.fontSize.xLarge};
`;

const BtWrap = styled.div`
  display: flex;
`;
const Bt = styled.button`
  margin: 15px 5px;
  padding: 10px;
  width: 90px;
  height: 34px;
  background: ${(props) => props.theme.palette.fontColor};
  border-radius: 15%;
  font-size: 15px;
`;
