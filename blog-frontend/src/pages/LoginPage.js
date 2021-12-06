import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import { Helmet } from 'react-helmet-async';

function LoginPage() {
  return (
    <AuthTemplate>
      <Helmet>
        <title>로그인 - i.Blog</title>
      </Helmet>
      <LoginForm />
    </AuthTemplate>
  );
}

export default LoginPage;
