import React, { useState } from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  position: relative;
`;

const SubmenuList = styled.ul`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;
const SubmenuListItem = styled.li`
  list-style-type: none;
  padding: 10px 20px;
  font-size: 17px;
  &:hover {
    background-color: #f2f2f2;
  }
`;
const Submenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <ContainerDiv>
      <p onClick={(e) => setIsActive(!isActive)}>
        Training Solution
        {isActive ? (
          <i className="fa-solid fa-angle-up"></i>
        ) : (
          <i className="fa-solid fa-angle-down"></i>
        )}
      </p>
      {isActive && (
        <SubmenuList>
          <SubmenuListItem>Individual Training</SubmenuListItem>
          <SubmenuListItem>Corporate Training</SubmenuListItem>
        </SubmenuList>
      )}
    </ContainerDiv>
  );
};

export default Submenu;
