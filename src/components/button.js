import styled from "styled-components";

const Button = () => {
  return (
    <>
      <ButtonWrap>
        <GoogleSearch>Google 검색</GoogleSearch>
        <Lucky>I'm Feeling Lucky</Lucky>
      </ButtonWrap>
      <Text>마추픽추에서 에펠탑까지, 스트리트 뷰로 여행하세요</Text>
    </>
  );
};

export default Button;

const ButtonWrap = styled.div`
  margin: 30px;
  text-align: center;
`;
const GoogleSearch = styled.button`
  height: 36px;
  margin-right: 15px;
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  font-size: 14px;
`;
const Lucky = styled.button`
  height: 36px;
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  font-size: 14px;
`;

const Text = styled.div`
  text-align: center;
`;
