import styled from "styled-components";
import { flexCenter } from "../../../style/common";

const LoginTitle = () => {
  return <TitleCSS>TODO LIST</TitleCSS>;
};
export default LoginTitle;

const TitleCSS = styled.div`
  ${flexCenter}
  font-size: ${(props) => props.theme.fontSize.xxxLarge};
  color: ${(props) => props.theme.palette.fontColor};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
