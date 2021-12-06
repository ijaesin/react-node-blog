import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';
import { Helmet } from 'react-helmet-async';

function RegisterPage() {
  return (
    <AuthTemplate>
      <Helmet>
        <title>회원가입 - i.Blog</title>
      </Helmet>
      <RegisterForm />
    </AuthTemplate>
  );
}

export default RegisterPage;
