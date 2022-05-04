import styled from "styled-components";
export const OurClientsSect = styled.section`
  height: auto;
  width: 100%;
`;
export const OurClientsSection = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 50px 0px;
`;
export const OurClientsWrapper = styled.div`
  margin: 0 auto;
`;
// page title
export const OurClientsTitle = styled.h1`
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

export const MeetingBoxWrapper = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 50px;
  text-align: center;
`;

export const MeetingTitle = styled.h1`
  padding-bottom: 20px;
  font-size: 36px;
`;
export const MeetingDescription = styled.p`
  padding-bottom: 20px;
`;
export const MeetingJoinNow = styled.input`
  cursor: pointer;
  padding: 10px 20px;
  outline: none;
  border-radius: 5px;
`;
export const MeetingForm = styled.form``;
