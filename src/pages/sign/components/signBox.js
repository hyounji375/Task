import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UseInput } from "../../../hooks/useInput";

const SignBox = () => {
  const navigator = useNavigate();
  const [email, onChangeEmail, setEmail] = UseInput("");
  const [name, onChangeName] = UseInput("");
  const [PW, onChangePW] = UseInput("");

  const [confirmPW, setConfirmPW] = useState("");
  const [checkPW, setCheckPW] = useState(false);

  const [onButton, setOnButton] = useState(true);
  const buttonHandler = useCallback(() => {
    if (email.includes("@") && name && PW && confirmPW.length > 6) {
      setOnButton(false);
    }
    return;
  }, [email, name, PW, confirmPW]);

  const onConfirmPW = useCallback(
    (e) => {
      setConfirmPW(e.target.value);
      setCheckPW(e.target.value !== PW);
      buttonHandler();
    },
    [setConfirmPW, setCheckPW, PW, buttonHandler]
  );

  const checkEmail = useCallback(() => {
    const emailvalue = email;
    if (!emailvalue.includes("@")) {
      if (!alert("이메일 형식이 올바르지 않습니다.")) {
        setEmail("");
      }
    } else {
      return console.log("이메일 통과");
    }
  }, [email, setEmail]);

  const PWlength = useCallback(() => {
    const PWvalue = PW;
    if (PWvalue.length < 8) {
      if (!alert("비밀번호를 여덟 자리 이상 입력해 주세요.")) {
        setConfirmPW("");
      }
      return;
    }
  }, [PW]);

  const onRegister = useCallback(() => {
    checkEmail();
    PWlength();
    if (checkPW) {
      if (!alert("비밀번호가 일치하지 않습니다.")) {
        setConfirmPW("");
      }
      return;
    }
    if (email.includes("@") && PW.length > 7) {
      alert("회원가입 완료");
      navigator("/");
    }
  }, [checkEmail, checkPW, email, PWlength, PW, navigator]);

  return (
    <Wrap>
      <div>
        <InputCSS
          type="text"
          placeholder="이메일을 입력해 주세요."
          required
          autoComplete="off"
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      {email && !email.includes("@") && (
        <CheckMessage>이메일 형식이 올바르지 않습니다.</CheckMessage>
      )}
      <div>
        <InputCSS
          type="text"
          placeholder="이름을 입력해 주세요."
          required
          autoComplete="off"
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div>
        <InputCSS
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          required
          autoComplete="off"
          value={PW}
          onChange={onChangePW}
        />
      </div>
      {PW && PW.length < 8 && (
        <CheckMessage>비밀번호를 여덟 자리 이상 입력해 주세요.</CheckMessage>
      )}
      <div>
        <InputCSS
          type="password"
          placeholder="비밀번호를 다시 한번 입력해 주세요."
          required
          autoComplete="off"
          value={confirmPW}
          onChange={onConfirmPW}
        />
      </div>
      {checkPW && onConfirmPW && (
        <CheckMessage>비밀번호가 일치하지 않습니다.</CheckMessage>
      )}
      <SignBt onClick={onRegister} disabled={onButton}>
        가입하기
      </SignBt>
      <Text>
        <Link to="/">메인으로 돌아가기</Link>
      </Text>
    </Wrap>
  );
};
export default SignBox;

const Wrap = styled.div`
  margin: 30px 39%;
`;

const InputCSS = styled.input`
  margin: 10px -30%;
  padding: 20px;
  width: 500px;
  height: 15px;
  background-color: beige;
  font-size: ${(props) => props.theme.fontSize.xLarge};
`;

const SignBt = styled.button`
  width: 500px;
  height: 35px;
  margin: 10px -30%;
  background: ${(props) => props.theme.palette.fontColor};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const Text = styled.div`
  margin: 15px 22%;
`;
const CheckMessage = styled.p`
  color: red;
  font-size: 15px;
`;
