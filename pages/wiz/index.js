import React from "react";


import { Container, Inner, LogoImage, NavMenu, StyledLink, 
  Banner, BannerImg, TestName, SelectBox, SelectToggle, 
  TestType, TestButton, TestTypeHover, 
  SearchTest, SearchImage, SearchInput, TestBox } 
  from "../../styles/emotion";



export default function WizMain() {

  

  return (
    <Container>
      {/* 메뉴 바 */}
      <Inner>
        <a href="#"><LogoImage src="/img/logo.png" alt="WIZ" /></a>
        <SearchTest>
          <SearchImage src="/img/search.svg" alt="" />
          <SearchInput className="search__input" placeholder="테스트 제목, 내용을 검색해보세요" />
        </SearchTest>
        <NavMenu>
          <StyledLink href="./mypage.html" className="test">마이 페이지</StyledLink>
          <StyledLink href="./login.html" className="login">로그인</StyledLink>
        </NavMenu>
      </Inner>
      <Banner>
        <BannerImg src="img/image1.jpg" alt="" />
      </Banner>
      <TestName id="test__name">전체</TestName>
      <SelectBox>
        <SelectToggle>
          <TestType>
            <TestButton>인기 순</TestButton>
          </TestType>
          <TestType>
            <TestButton>종류</TestButton>
          </TestType>
          <TestType>
            <TestButton>난이도</TestButton>
          </TestType>
          <TestType>
            <TestButton>주제</TestButton>
          </TestType>
        </SelectToggle>
      </SelectBox>
      <TestBox>테스트 사이트 박스들</TestBox>
    </Container>
  );
}
