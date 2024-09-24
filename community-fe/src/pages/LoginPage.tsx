import React from 'react';
import './LoginPage.scss';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <h1>로그인</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" name="username" placeholder="아이디를 입력하세요" />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
