import styled from "styled-components";
import { flexCenter } from "../../../style/common";

const SignTitle = () => {
  return <TitleCSS>TODO LIST 시작하기</TitleCSS>;
};
export default SignTitle;

const TitleCSS = styled.div`
  ${flexCenter}
  font-size: ${(props) => props.theme.fontSize.xxxLarge};
  color: ${(props) => props.theme.palette.fontColor};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
