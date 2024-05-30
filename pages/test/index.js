import React from "react";
import { TestBox, TestTitle, TestButtonBox, 
  TestButton, ProgressBox, Progress, Question, ProgressContainer } 
from "../../styles/test"
import { Container, LogoImage, Nav, NavMenu, StyledLink } 
from "../../styles/main";


export default function Test() {


  return (

    <Container>
      <Nav>
      <a href="./wiz"><LogoImage src="/img/logo.png" alt="WIZ" /></a>
        <NavMenu>
          <StyledLink className="test" href="./wiz">매인으로</StyledLink>
          <StyledLink className="login">로그아웃</StyledLink>
        </NavMenu>
      </Nav>
      <TestBox>
        <TestTitle>
          <p>ID: 아이디명</p>
          <p>1/10</p>
        </TestTitle>
          <ProgressBox>
            <Progress value= "1" min="0" max="10"></Progress>
          </ProgressBox>
          <Question>너는 개가 좋아? 고양이가 좋아?</Question>
        <TestButtonBox>
          <TestButton>개</TestButton>
          <TestButton>고양이</TestButton>
        </TestButtonBox>
      </TestBox>
    </Container>

  )
}
