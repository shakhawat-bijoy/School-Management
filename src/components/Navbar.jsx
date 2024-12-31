import React from 'react';
import Container from './layer/Container';
import Image from './layer/Image';
import ListItem from './layer/ListItem';
import logo from '../assets/logo.png';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="absolute w-full z-50">
      <Container className="py-8 flex items-center justify-between">
        {/* Logo Section */}
        <div className="Logo">
          <Image src={logo} alt="Logo Image" to="/" />
        </div>

        {/* Navigation Menu */}
        <div className='flex'>
          <ul className='flex ml-[250px] font-Inter text-base font-medium text-[#233255CC] gap-[50px]'>

            <ListItem text={'Programs'}/>
            <ListItem text={'Extra-Curricular'}/>
                      
          </ul>

          <ul className='flex ml-[129px] font-Inter text-base font-medium text-[#FDFDF5] gap-[50px]'>
            <ListItem text={'Our Staff'}/>
            <ListItem text={'Gallery'}/>
          </ul>
              </div>


              <div className='ml-[69px]'>

                <Link to={'/registration'}>
                  <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 font-medium rounded-[34px] text-sm px-[30px] py-5 text-center me-2 mb-2 flex gap-[10px] items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="19" viewBox="0 0 27 19" fill="none">
                      <path d="M7.3173 9.77532C9.06408 9.77532 10.4801 8.35927 10.4801 6.6125C10.4801 4.86572 9.06408 3.44968 7.3173 3.44968C5.57052 3.44968 4.15448 4.86572 4.15448 6.6125C4.15448 8.35927 5.57052 9.77532 7.3173 9.77532Z" stroke="#FDFDF5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M23.0769 4.50738V13.7144M13.9705 15.4458V16.5292C13.9709 16.6677 13.9438 16.805 13.8909 16.9331C13.8381 17.0612 13.7604 17.1776 13.6624 17.2756C13.5644 17.3735 13.4481 17.4512 13.32 17.5041C13.1919 17.5569 13.0546 17.584 12.916 17.5837H2.05449C1.91592 17.584 1.77864 17.5569 1.65056 17.5041C1.52247 17.4512 1.40609 17.3735 1.3081 17.2756C1.21012 17.1776 1.13246 17.0612 1.07958 16.9331C1.02671 16.805 0.999665 16.6677 1 16.5292V15.4458C2.38398 10.9458 13.1622 11.717 13.9705 15.4458ZM14.3064 7.49776V10.7234V7.49776ZM17.2301 4.50738V13.7144V4.50738ZM20.1538 1.41635V16.8055V1.41635ZM26 7.49776V10.7234V7.49776Z" stroke="#FDFDF5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                    Login/Register
                  </button>
                </Link>

              </div>
      </Container>
    </div>
  );
};

export default Navbar;
