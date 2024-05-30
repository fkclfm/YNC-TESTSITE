import React from 'react';
import { Container, HeaderBackground, Wrapper, 
  Email, Label, Input, Password, 
  ForgotPassword, LoginButton, CheckButton } 
  from '../../styles/register';

export default function RegisterPage() {
  return (
    <Container>
      <HeaderBackground />
      <Wrapper>
        <Email>
          <Label>이메일</Label>
          <Input type="text" placeholder="이메일을 입력해주세요" />
        </Email>
        <Password>
          <Label>비밀번호</Label>
          <Input type="password" placeholder="영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호" maxLength="12" />
        </Password>
        <Password>
          <Label>비밀번호 확인</Label>
          <Input type="password" placeholder="비밀번호를 다시 입력해주세요" maxLength="12" />
        </Password>
        <div className="nickname">
          <Label>닉네임</Label>
          <Input type="text" placeholder="닉네임을 입력해주세요" />
          <CheckButton>중복 확인</CheckButton>
        </div>
        <ForgotPassword href="#">비밀번호 찾기</ForgotPassword>
        <LoginButton>회원가입</LoginButton>
      </Wrapper>
    </Container>
  );
};

