import React from 'react';
import {InputField} from "../components/InputField";
import {Link} from "react-router-dom";
import {Button} from "../components/Button";

export default function SignIn() {
  return (
    <div>
      <header>
        <h1>Find Your Perfect Place</h1>
        <p>
          Already have an account?
          <Link to='/signup'>Login</Link>
        </p>
      </header>
      <form>
        <div>
          <InputField type="text" placeholder="email"/>
          <InputField type="text" placeholder="password"/>
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