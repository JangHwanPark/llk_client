import React from 'react';
import {InputField} from "../components/InputField";
import {Link} from "react-router-dom";
import {Button} from "../components/Button";
import AuthHeader from "../components/AuthHeader";
import {loginAPI} from "../api/user-service";

interface SignInProps {
  email: string;
  password: string;
}

export default function SignIn() {
  const [values, setValues] = React.useState<SignInProps>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginAPI(values);
      console.log('Success')
    } catch (error) {
      throw new Error('Login error');
    }
  }

  return (
    <div>
      <AuthHeader
        title="Find Your Perfect Place"
        subtitle="Begin exploring properties with just one click"
        path="/signup"
        pathTitle="Register"
      />
      <form onSubmit={handleSubmit}>
        <div>
          <InputField
            type="text"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <InputField
            type="text"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <input type="checkbox"/>
          <label htmlFor="">Remember me</label>
        </div>
        <Button type="submit" text="로그인"/>
        <div className="division"></div>
        <div>
          <button>구글 로그인</button>
        </div>
      </form>
      <div>
        <p>계정이 없으신가요? <Link to="/signup">회원가입</Link></p>
        <p>비밀번호를 잊으셨나요 ?</p>
      </div>
    </div>
  );
}