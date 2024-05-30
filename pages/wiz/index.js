import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Container, Nav, LogoImage, NavMenu, StyledLink, 
  Banner, TestName, SelectToggle, 
  TestType, ToggleIcon, TestButton, 
  SearchTest, SearchImage, SearchInput, TestBox } 
  from "../../styles/main";



export default function WizMain() {


  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Container>
      {/* 메뉴 바 */}
      <Nav>
        <a href="#"><LogoImage src="/img/logo.png" alt="WIZ" /></a>
        <SearchTest>
          <SearchImage src="/img/search.svg" alt="" />
          <SearchInput className="search__input" placeholder="테스트 제목, 내용을 검색해보세요" />
        </SearchTest>
        <NavMenu>
          <StyledLink className="test" href="./test">테스트 하러 가기</StyledLink>
          <StyledLink className="mypage" href="./mypage">마이 페이지</StyledLink>
          <StyledLink className="login" href="./login">로그인</StyledLink>
        </NavMenu>
      </Nav>
      <Banner>
        <Slider {...settings}>
          <div>
            <img src="img/image01.png" alt="" />
          </div>
          <div>
            <img src="img/image02.png" alt="" />
          </div>
          <div>
            <img src="img/image03.png" alt="" />
          </div>
          <div>
            <img src="img/image04.png" alt="" />
          </div>
        </Slider>
      </Banner>
      <TestName id="test__name">전체</TestName>
        <SelectToggle>
          <TestType>
            <ToggleIcon src="img/fire.png" alt="fire" />
            <TestButton>인기 순</TestButton>
          </TestType>
          <TestType>
            <ToggleIcon src="img/test.png" alt="test" />
            <TestButton>종류</TestButton>
          </TestType>
          <TestType>
            <ToggleIcon src="img/star.png" alt="star" />
            <TestButton>난이도</TestButton>
          </TestType>
          <TestType>
            <ToggleIcon src="img/plant.png" alt="plant" />
            <TestButton>입문용</TestButton>
          </TestType>
        </SelectToggle>
      <TestBox>테스트 사이트 박스들</TestBox>
    </Container>
  );
}
