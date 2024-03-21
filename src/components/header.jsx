import React from 'react'
import Button from './button'
import HeaderItem from './headerItem'
import logo from '../assets/img/logo.png'
import { Navbar } from 'flowbite-react';


const Header = () => {
  return (
    <Navbar fluid rounded className='shadow-sm p-[20px]'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className="h-8" alt="Marketing Support Logo" />
      </Navbar.Brand>
      <div className="flex md:hidden md:order-last">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <HeaderItem title="Link 1" />
        <HeaderItem title="Link 2" />
        <HeaderItem title="Link 3" />
        <HeaderItem title="Link 4" />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header