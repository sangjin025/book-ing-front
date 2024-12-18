import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BookingLogo from "../assets/images/BookingLogo.png";

export default function Header() {
  return (
    <Container>
      <Logo>
        <Link to="/main">
          <LogoImg src={BookingLogo} alt="Book-ing" />
        </Link>
      </Logo>
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Logo = styled.button`
  border: 0px;
  background-color: #ffffff;

  :hover {
<<<<<<< HEAD
    /* background-color: green; */
=======
    background-color: green;
    border-radius: 5px;
>>>>>>> 9bccb1bf7d685edd7df00b99ca6cdc42faf39812
  }
`;

const LogoImg = styled.img`
  width: 50px;
  position: relative;
  top: 30px;
`;
