import React, {FormEvent, useState} from 'react';
import {InputField} from "../components/InputField";
import {Button} from "../components/Button";
import AuthHeader from "../components/AuthHeader";
import {registerAPI} from "../api/user-service";

export default function SignUp() {
  // 입력상태 관리
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    phone: ''
  });

  // 입력값 변경
  const handleChange = (e: {
    target: {name: string, value: string}
  }) => {
    // key(name)-value(value) 추출
    const {name, value} = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }

  // 폼 제출 관리
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      await registerAPI(userInfo)
      console.log('Success')
    } catch (error) {
      console.error('Register error', error)
    } finally {
      console.log('submit');
    }
  }

  return (
    <div>
      <AuthHeader
        title="Create an account"
        subtitle="Already have an account?"
        path="/signin"
        pathTitle="Login"
      />
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <InputField
          type="text"
          placeholder="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <InputField
          type="text"
          placeholder="phone number"
          name="phone"
          value={userInfo.phone}
          onChange={handleChange}
        />
        <Button type="submit" text="Sign in"/>
      </form>
    </div>
  );
}