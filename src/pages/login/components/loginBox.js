import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginBox = () => {
  return (
    <Wrap>
      <div>
        <InputCSS type="text" placeholder="아이디" required />
      </div>
      <div>
        <InputCSS type="password" placeholder="비밀번호" required />
      </div>
      <LoginBt>로그인</LoginBt>
      <Text>
        <Link to="/sign">같이 시작해 볼까요?</Link>
      </Text>
    </Wrap>
  );
};
export default LoginBox;

const Wrap = styled.div`
  margin: 30px 39%;
`;

const InputCSS = styled.input`
  margin-bottom: 10px;
  padding: 20px;
  width: 300px;
  height: 45px;
  background-color: beige;
  font-size: ${(props) => props.theme.fontSize.xLarge};
`;

const LoginBt = styled.button`
  width: 300px;
  height: 45px;
  background: ${(props) => props.theme.palette.fontColor};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const Text = styled.div`
  margin: 15px 22%;
`;
