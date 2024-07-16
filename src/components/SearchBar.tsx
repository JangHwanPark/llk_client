import React, {FormEvent, useState} from 'react';
import {InputField} from "./InputField";
import {Button} from "./Button";

const buttonData = [
  {label: 'Buy'},
  {label: 'Rent'},
  // {label: 'Sell'},
]

const SearchBar = () => {
  const [clickButton, setClickButton] = useState('');

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { textContent } = e.currentTarget;
    setClickButton(textContent);
    alert("준비중 입니다.")
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("준비중 입니다." + clickButton)
  }

  return (
    <div className='searchbar-container'>
      <div className='button-wrapper'>
        {buttonData.map(item => (
          <button key={item.label} onClick={handleClick}>
            {item.label}
          </button>
        ))}
      </div>
      <form className='search-form' onSubmit={handleSubmit}>
        <InputField placeholder='검색' type='text'/>
        <Button text='Submit' type='submit'/>
      </form>
    </div>
  );
};

export default SearchBar;
