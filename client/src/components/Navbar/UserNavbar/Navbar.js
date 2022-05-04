import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  LogoContainer,
  LogoImage,
  MenuBarContainer,
  MenuContainer,
  MenuItem,
  Nav,
  NavItem,
  SearchBoxContainer,
  SearchItemText,
  SearchForm,
  SearchBoxInput,
  FaSearchIcon,
} from "./NavbarElements";
import logo from "../../../images/practi-logo.png";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Submenu from "./Submenu";

const MenuItems = styled.div`
  width: 80px;
  height: 100px;
  background: red;
`;
const Navbar = ({ toggleMenuItems }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [open, setOpen] = useState(false);
  const [menuItem, setMenuItem] = useState(false);
  const menuItemToggler = (event) => {
    event.preventDefault();
    setOpen(!open);
    setMenuItem(true);
  };
  return (
    <Nav>
      <LogoContainer>
        {user?.type ? (
          <Link
            style={{ textDecoration: "none", color: "#062C30" }}
            to={`/${user?.type}`}
          >
            <LogoImage src={logo} alt="brand " />
          </Link>
        ) : (
          <Link style={{ textDecoration: "none", color: "#062C30" }} to={`/`}>
            <LogoImage src={logo} alt="brand " />
          </Link>
        )}
      </LogoContainer>

      <MenuContainer>
        <MenuItem>
          {/* redirect to home page */}
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#062C30" }}
              to={`/trainer-usp`}
            >
              Training USP
            </Link>
          </NavItem>
          <NavItem onClick={menuItemToggler}>
            <Submenu />
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#062C30" }}
              to={`/about`}
            >
              About us
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#062C30" }}
              to="/courses"
            >
              Courses
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#062C30" }}
              to="/trainers"
            >
              Instructor
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#062C30" }}
              to="/job-seeker"
            >
              Jobs
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#062C30" }}
              to={`/recruiter`}
            >
              Recruiter
            </Link>
          </NavItem>
        </MenuItem>
      </MenuContainer>
      <SearchBoxContainer>
        <SearchForm>
          <SearchBoxInput placeholder="Search....."></SearchBoxInput>
          <FaSearchIcon />
        </SearchForm>
        {/* <Link
          style={{ textDecoration: "none", color: "#062C30" }}
          to={`/register`}
        >
          <SearchItemText>Register</SearchItemText>
        </Link> */}
      </SearchBoxContainer>
      <MenuBarContainer onClick={toggleMenuItems}>
        <FaBars />
      </MenuBarContainer>
    </Nav>
  );
};
export default Navbar;
