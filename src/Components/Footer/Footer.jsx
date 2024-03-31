import React, { useContext } from 'react'
import { Typography } from "@material-tailwind/react";
import logo from '../Assets/logo.png'
import { MenuContext } from '../../Contexto/MenuContext';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  const{menu,setMenu} = useContext(MenuContext);
  return (
    <footer className="w-full bg-transparent p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-transparent text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="w-24" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#main"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              onClick={()=> {setMenu("inicio")}}
            ><Link className='link' to='/'>
              About Us
              </Link></Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy;2024 La Cuelleria
      </Typography>
    </footer>
  );
}

export default Footer