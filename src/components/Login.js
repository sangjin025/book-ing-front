import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        { id, password }, // body에 들어갈 데이터
        { withCredentials: true } // 쿠키 포함 설정
      );

      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.token); // 서버에서 전달받은 토큰 저장
        setMessage("로그인에 성공했습니다!");
      }
    } catch (error) {
      // 에러 처리
      if (error.response) {
        // 서버가 응답했으나 오류 상태 코드인 경우
        setMessage(error.response.data.message);
      } else {
        // 요청이 전송되지 않거나 기타 오류
        console.error("Error:", error);
        setMessage("로그인에 실패했어요.");
      }
    }
  };

  // onSubmit 쓰면 이점이 있다~ 엔터키 안먹힘 등등~
  return (
    <LayOut>
      <PageInfo>로그인</PageInfo>
      <StyledForm onSubmit={handleLogin}>
        <div>
          <InputInfo> 아이디 </InputInfo>
          <StyledInput
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <InputInfo> 비밀번호 </InputInfo>
          <StyledInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
      <SignUpDiv>
        <div>아이디가 없으신가요?</div>
        <SignUpButton>회원가입 하러가기</SignUpButton>
      </SignUpDiv>

      <p>{message}</p>
    </LayOut>
  );
};

const LayOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #81c784;
  height: 100vh;
  gap: 30px;
`;
const PageInfo = styled.div`
  font-size: 24px;
`;
const InputInfo = styled.div`
  font-size: 12px;
  padding: 10px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: #795548;
`;
const StyledInput = styled.input`
  border: 0;
  border-radius: 20px;
  box-shadow: 0px 2px 5px;
  width: 260px;
  height: 50px;
  text-indent: 15px; // 텍스트 오른쪽으로 밀기
`;
const StyledButton = styled.button`
  border: 0;
  width: 260px;
  height: 60px;
  border-radius: 100px;
  background-color: #795548;
`;

const SignUpDiv = styled.div`
  display: flex;
  font-size: 12px;
  color: #795548;
  gap: 5px;
`;

const SignUpButton = styled.button`
  background-color: #81c784;
  border: 0px;
  color: #795548;
  font-size: 12px;
  text-decoration: underline;
`;

export default Login;
