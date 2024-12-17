import React from "react";
import styled from "styled-components";
import PencilImg from "../assets/images/PencilImg.png";

export default function Footer() {
  return (
    <LayOut>
      <StyledBtn>Mypage</StyledBtn>
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
  width: 70px;
  height: 25px;
`;

const PostBtn = styled.button`
  background-color: transparent;
  border: 0px;
`;
const PostBtnImg = styled.img``;

const WishListBtn = styled.button``;
