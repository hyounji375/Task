import styled from "styled-components";
import { flexCenter } from "../../../style/common";

const TodoTitle = ({ state }) => {
  return <Title>오늘의 todos {state.length}개</Title>;
};
export default TodoTitle;

const Title = styled.div`
  ${flexCenter}
  margin: 20px;
  font-size: ${(props) => props.theme.fontSize.xxxLarge};
  color: ${(props) => props.theme.palette.fontColor};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
