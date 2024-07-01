import React from 'react';
import {InputField} from "../../components/InputField/InputField";
import {Link} from "react-router-dom";

export default function SignIn() {
  return (
    <div>
      <section>
        <h1>Login</h1>
      </section>
      <form>
        <div>
          <InputField type="text" placeholder="이름"/>
          <InputField type="text" placeholder="비밀번호"/>
        </div>
        <button>로그인</button>
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