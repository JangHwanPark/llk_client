import {ChangeEvent, FormEvent, useState} from 'react';
import {InputField} from "../components/InputField";
import {Link} from "react-router-dom";
import {Button} from "../components/Button";
import AuthHeader from "../components/AuthHeader";
import SignInGoogle from '../components/SignInGoogle';
import DivisionLine from '../components/DivisionLine';
import {useAuthorization} from "../hooks/useAuthorization";
import {useMutation} from "@tanstack/react-query";

export interface SignInProps {
  email: string;
  password: string;
}

export default function SignIn() {
  const [values, setValues] = useState<SignInProps>({
    email: '',
    password: ''
  });

  // 토큰이 존재할경이 리다이렉트 처리
  const {accessToken, login} = useAuthorization();
  if (accessToken) window.location.href = '/'

  const mutation = useMutation({
    mutationFn: () => login(values)
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      mutation.mutate();
    } catch (error) {
      throw new Error('Login error');
    }
  }

  return (
    <div className='form-container'>
      <div className='form-inner'>
        <AuthHeader
          title="Find Your Perfect Place"
          subtitle="Begin exploring properties with just one click"
          path="/signup"
          pathTitle="Register"
        />
        <main className="content-main">
          <form onSubmit={handleSubmit} className='form-auth'>
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
            <div className='remember-login'>
              <input id="remember-me" type="checkbox"/>
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="confirm-btn">
              <Button type="submit" text="Login" />
              <DivisionLine/>
              <SignInGoogle/>
            </div>
          </form>
          <div className='auth-link'>
            <p>Don’t have an account? <Link to="/signup">SignUp</Link></p>
            <p>Forget Password ?</p>
          </div>
        </main>
      </div>
    </div>
  );
}
