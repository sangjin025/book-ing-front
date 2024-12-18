import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function HeaderFooter() {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Content>
        <Outlet />
      </Content>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;
const Content = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-top: 100px;
  padding-bottom: 50px;
`;
const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;
