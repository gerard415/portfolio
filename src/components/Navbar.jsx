import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed z-10 w-full h-[80px] flex justify-between items-center bg-[#0a192f] px-4 text-gray-300' >
            <div>
                <img src={Logo} alt="logo" style={{width: '100px'}} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li >
                    <Link to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>


            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
            </div>

        {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>


        </div>
    )
}

export default Navbar