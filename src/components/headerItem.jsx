import React from 'react'
import { Navbar } from 'flowbite-react';

const HeaderItem = ({ title }) => {
  return (
    <Navbar.Link href="#" className='font-ua_regular text-[16px]'>{title}</Navbar.Link>
  )
}

export default HeaderItem