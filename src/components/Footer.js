import React from "react";
import styled from "styled-components";
import PencilImg from "../assets/images/PencilImg.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <LayOut>
      <Link to="/comment">
        <StyledBtn>Mycomment</StyledBtn>
      </Link>
      <PostBtn>
        <PostBtnImg src={PencilImg} alt="PencilImg" />
      </PostBtn>
      <StyledBtn>Wishlist</StyledBtn>
    </LayOut>
  );
}

const LayOut = styled.div`
  width: 100%;
  height: 50px;
  min-height: 100%;
  background-color: #81c784;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const StyledBtn = styled.button`
  border: 0px;
  color: white;
  border-color: white;
  background-color: transparent;
  width: 85px;
  height: 25px;

  &:hover {
    background-color: #795548;
    border-radius: 10px;
  }
  &:active {
    background-color: #795548;
    border-radius: 10px;
  }
  width: 85px;
  height: 25px;
`;

const PostBtn = styled.button`
  background-color: transparent;
  border: 0px;
  border-radius: 100px;

  &:hover {
    background-color: white;
  }
`;
const PostBtnImg = styled.img``;

const WishListBtn = styled.button``;
