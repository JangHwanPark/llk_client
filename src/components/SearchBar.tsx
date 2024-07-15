import React from 'react';
import {InputField} from "./InputField";
import {Button} from "./Button";

const SearchBar = () => {
  return (
    <div className='searchbar-container'>
      <div className='button-wrapper'>
        <button>Buy</button>
        <button>Sell</button>
        <button>Rent</button>
      </div>
      <form className='search-form'>
        <InputField placeholder='검색' type='text'/>
        <Button text='Submit' type='submit'/>
      </form>
    </div>
  );
};

export default SearchBar;
