import styled from "styled-components";

const TodoForm = () => {
  return (
    <Wrap>
      <InputCSS type="text" placeholder="할 일을 적어주세요." />
      <BtWrap>
        <Bt>등록하기</Bt>
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
