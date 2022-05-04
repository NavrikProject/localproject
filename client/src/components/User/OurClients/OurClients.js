import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

import {
  OurClientsSect,
  OurClientsSection,
  OurClientsTitle,
  OurClientsWrapper,
  LineAfter,
  MeetingBoxWrapper,
  MeetingTitle,
  MeetingDescription,
  MeetingJoinNow,
  MeetingForm,
} from "./OurClientsElements";
import { Link } from "react-router-dom";

const OurClients = () => {
  const user = useSelector((state) => state.user.currentUser);
  const joinNowMeeting = async (event) => {
    event.preventDefault();
    const res = await axios.post("/zoom/join-meeting");
    console.log(res);
  };
  return (
    <OurClientsSect>
      <OurClientsSection>
        <OurClientsWrapper>
          <OurClientsTitle></OurClientsTitle>
          <LineAfter />
          <MeetingBoxWrapper>
            <MeetingTitle>
              Do you have any doubts in the Course for this week ?
            </MeetingTitle>
            <MeetingDescription>
              If yes click on the join button to attend the live session
              conducted on every saturday 7PM IST +05:30.
            </MeetingDescription>
            <MeetingForm onSubmit={joinNowMeeting}>
              {user ? (
                <Link to={`/login`}>
                  <MeetingJoinNow type="submit" value="Login" />
                </Link>
              ) : (
                <MeetingJoinNow type="submit" value="join now" />
              )}
            </MeetingForm>
          </MeetingBoxWrapper>
        </OurClientsWrapper>
      </OurClientsSection>
    </OurClientsSect>
  );
};

export default OurClients;
