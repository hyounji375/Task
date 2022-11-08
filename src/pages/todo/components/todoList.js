import styled from "styled-components";

const TodoList = ({ state }) => {
  return (
    <Wrap>
      <div>
        {state.id}. {state.content} <Bt>완료</Bt>
        <Bt>수정</Bt>
      </div>
    </Wrap>
  );
};
export default TodoList;

const Wrap = styled.div`
  margin: 30px 25%;
  font-size: ${(props) => props.theme.fontSize.xxLarge};
  line-height: 35px;
`;

const Bt = styled.button`
  background: ${(props) => props.theme.palette.fontColor};
  font-size: ${(props) => props.theme.fontSize.medium};
  margin: 15px;
  width: 60px;
  height: 30px;
  line-height: 30px;
  border-radius: 6%;
`;
