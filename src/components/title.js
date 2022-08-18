import styled from "styled-components";

const Title = () => {
  return (
    <TitleWrap>
      <Blue>G</Blue>
      <Red>o</Red>
      <Yellow>o</Yellow>
      <Blue>g</Blue>
      <Green>l</Green>
      <Red>e</Red>
    </TitleWrap>
  );
};
export default Title;

const TitleWrap = styled.div`
  font-size: 80px;
  text-align: center;
  margin-top: 100px;
  font-weight: bold;
`;

const Blue = styled.span`
  color: blue;
`;

const Red = styled.span`
  color: red;
`;

const Yellow = styled.span`
  color: yellow;
`;

const Green = styled.span`
  color: green;
`;
