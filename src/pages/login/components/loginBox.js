import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UseInput } from "../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { LOGIN_REQUEST } from "../../../reducer/user";

const LoginBox = () => {
  const [email, onChangeEmail] = UseInput("");
  const [PW, onChangePW] = UseInput("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.userReducer);

  const Login = useCallback(() => {
    dispatch({
      type: LOGIN_REQUEST,
      data: {
        email: email,
        PW: PW,
      },
    });
    console.log("로그인 성공");
    navigate("/todo");
  }, [email, PW, dispatch, navigate]);

  useEffect(() => {
    if (!info) {
      return;
    }
    navigate("/todo");
  });

  return (
    <Wrap>
      <div>
        <InputCSS
          type="text"
          placeholder="이메일"
          required
          autoComplete="off"
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div>
        <InputCSS
          type="password"
          placeholder="비밀번호"
          required
          autoComplete="off"
          value={PW}
          onChange={onChangePW}
        />
      </div>
      <LoginBt onClick={Login}>로그인</LoginBt>
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
