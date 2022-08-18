import styled from "styled-components";
import dots from "../../src/dots.png";
import account from "../../src/account.png";
const Header = () => {
  return (
    <>
      <HeaderWrap>
        <Left>
          <Infomation>Google 정보</Infomation>
          <Store>스토어</Store>
        </Left>
        <Right>
          <Gmail>Gmail</Gmail>
          <Image>이미지</Image>
          <Dots src={dots} />
          <Account src={account}></Account>
        </Right>
      </HeaderWrap>
    </>
  );
};
export default Header;

const HeaderWrap = styled.div`
  font-size: 14px;
`;
const Left = styled.div`
  display: flex;
  justify-content: left;
  position: absolute;
`;

const Right = styled.div`
  display: flex;
  justify-content: right;
`;

const Infomation = styled.div`
  margin: 12px;
`;
const Store = styled.div`
  margin: 12px;
`;

const Gmail = styled.div`
  margin: 12px;
`;

const Image = styled.div`
  margin: 12px;
`;
const Dots = styled.img``;
const Account = styled.img``;
