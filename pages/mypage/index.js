import React from "react";
import { Container, LogoImage, Nav, NavMenu, StyledLink } 
  from "../../styles/main";
import { MyPageBox, ProfileBox, Profile, Userinfo, InfoBox, InfoFlexBox,
  EditProfile, EditProfileIcon, EditProfileText } 
  from "../../styles/mypage"

export default function myPage() {



   return (
    <Container>
      <Nav>
      <a href="./wiz"><LogoImage src="/img/logo.png" alt="WIZ" /></a>
        <NavMenu>
          <StyledLink className="test" href="./wiz">테스트 하러 가기</StyledLink>
          <StyledLink className="login">로그아웃</StyledLink>
        </NavMenu>
      </Nav>
      <MyPageBox>
        <ProfileBox>
          <Profile></Profile>
          <h1>닉네임</h1>
          <p>자기소개를 작성해주세요.</p>
          <EditProfile>
            <EditProfileIcon src="img/edit.png" alt="" />
            <EditProfileText>내 프로필 수정</EditProfileText>
          </EditProfile>
        </ProfileBox>
        <Userinfo>
          <h2>내 정보</h2>
          <InfoBox>
            <InfoFlexBox>
              <span>아이디</span>
              <span>ync</span>
            </InfoFlexBox>
            <InfoFlexBox>
              <span>성별</span>
              <span>남성</span>
            </InfoFlexBox> 
            <InfoFlexBox>
              <span>테스트 성향</span>
              <span>공포</span>
            </InfoFlexBox> 
            <InfoFlexBox>
              <span>이메일</span>
              <span>ync@ync.ac.kr</span>
            </InfoFlexBox>   
          </InfoBox>
        </Userinfo>
      </MyPageBox>
    </Container>
   )
}