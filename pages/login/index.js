import React from 'react';
import { Container, Wrapper, Header, Email, Label, 
  Input, Password, ForgotPassword, 
  LoginButton, RememberMe, RememberMeCheckbox, 
  RememberMeLabel } from '../../styles/login';

function LoginPage() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Email>
          <Label>이메일</Label>
          <Input type="text" placeholder="위즈ID (아이디 또는 이메일)" />
        </Email>
        <Password>
          <Label>비밀번호</Label>
          <Input type="password" placeholder="비밀번호를 입력해주세요" />
        </Password>
        <ForgotPassword href="#">비밀번호 찾기</ForgotPassword>
        <RememberMe>
          <RememberMeCheckbox type="checkbox" id="remember__checkbox" />
          <RememberMeLabel htmlFor="remember__checkbox">로그인 유지</RememberMeLabel>
        </RememberMe>
        <LoginButton>위즈ID 로그인</LoginButton>
      </Wrapper>
    </Container>
  );
}

export default LoginPage;
