import styled from "styled-components";

const HeaderLogout = () => {
  return (
    <>
      <HeaderCSS>
        한발한발 차근차근
        <span>로그아웃</span>
      </HeaderCSS>
    </>
  );
};
export default HeaderLogout;

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
