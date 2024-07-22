// import { useEffect, useState } from 'react';
// import { MdMenu,MdOutlineOpenInNew} from 'react-icons/md';
import NavBar from './NavBar';
import Logo from '../Logo'
import SearchInput from './SearchInput';
import LoginButton from './LoginButton';
import ShoppingCartButton from './ShoppingCartButton';

const Header = () => {
  

  return (
    <header className='flex flex-col gap-4 py-5'>
      <div className='flex items-center justify-between gap-5'>
        <Logo src='src/assets/logo-header.svg'/>
        <div className='flex items-center justify-center gap-5'>
        <SearchInput/>
        <LoginButton style='font-semibold text-black bg-primary rounded-md px-10 py-2 '/>
        </div>
        <ShoppingCartButton notificationCount={Math.floor(Math.random() * 4)}/>
      </div>
      <NavBar/>
    </header>
  )
}

export default Header