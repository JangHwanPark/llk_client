import React from 'react';
import {Link} from "react-router-dom";
import {InputField} from "../components/InputField";
import {Button} from "../components/Button";

export default function SignUp() {
  return (
    <div>
      <header>
        <h1>Create an account</h1>
        <p>
          Already have an account?
          <Link to='/signin'>Login</Link>
        </p>
      </header>
      <form>
        <InputField
          type="text"
          placeholder="email"
        />
        <InputField
          type="text"
          placeholder="password"
        />
        <InputField
          type="text"
          placeholder="phone number"
        />
        <Button type="submit" text="Sign in"/>
      </form>
    </div>
  );
}