import styled from "styled-components";

const Search = () => {
  return <SearchDiv placeholder="Google 검색 또는 URL 입력"></SearchDiv>;
};
export default Search;

const SearchDiv = styled.input`
  box-sizing: border-box;
  padding: 10px;
  margin-top: 50px;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 561px;
  height: 44px;
  border-color: #bbb;
  border-radius: 16px;
  font-size: 18px;
`;
