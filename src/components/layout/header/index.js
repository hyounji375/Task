import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderCSS>
        한발한발 차근차근
        <span>
          <Link to="/">로그인</Link> | <Link to="/sign">회원가입</Link>
        </span>
      </HeaderCSS>
    </>
  );
};
export default Header;

const HeaderCSS = styled.div`
  margin: 30px;
  font-size: 25px;
  font-weight: 900;
  color: ${(props) => props.theme.fontColor};

  & span {
    font-size: 15px;
    font-weight: 500;
    position: absolute;
    right: 90px;
  }
`;
