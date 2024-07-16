import React, {useState} from 'react';
import {InputField} from "./InputField";
import {Button} from "./Button";

const buttonData = [
  {label: 'Buy'},
  {label: 'Sell'},
  {label: 'Rent'},
]

const SearchBar = () => {
  const [clickButton, setClickButton] = useState('');

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { innerText } = e.target;
    setClickButton(innerText);
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
      <form className='search-form'>
        <InputField placeholder='검색' type='text'/>
        <Button text='Submit' type='submit'/>
      </form>
    </div>
  );
};

export default SearchBar;
