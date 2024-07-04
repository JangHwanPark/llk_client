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
            <div className='input-container'>
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
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <Button type="submit" text="Login" />
            <div className="division"></div>
            <div className='button-social'>
              <button>Google Login</button>
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