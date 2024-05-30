import React from "react";
import { TestBox, TestTitle, TestButtonBox, 
  TestButton, ProgressBox, Progress, Question } from "../../styles/test"
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
          <Progress value= "10" min="0" max="10"></Progress>
        </ProgressBox>
        <Question>축하합니다 당신은 고양이파입니다!</Question>
        <p>고양이를 사랑하며, 집사가 될 수 있는 자격이 충분합니다!!</p>
        <img src="/img/" alt="" />
        <TestButtonBox>
          <TestButton>다시하기</TestButton>
          <TestButton>돌아가기</TestButton>
        </TestButtonBox>
      </TestBox>
    </Container>

  )
}