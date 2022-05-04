import styled from "styled-components";
export const UspSect = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #f2f2f2;
`;
export const UspSection = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 50px 0px;
`;
export const UspWrapper = styled.div``;
// page title
export const UspTitle = styled.h1`
  color: blue;
  font-size: 37px;
  font-weight: 700;
  text-align: center;
`;
export const LineAfter = styled.div`
  &::before {
    content: "";
    width: 180px;
    height: 4px;
    display: block;
    margin: 0 auto;
    background-color: #9926f0;
  }
  &::after {
    content: "";
    width: 50px;
    height: 4px;
    padding-top: 0.1rem;
    margin: 0 auto;
    display: block;
    background-color: #9926f0;
  }
`;
