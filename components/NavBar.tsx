import React, { useState } from 'react';
import ConnectBtn from './ConnectBtn';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavBar: React.FC = ({}) => {

  const token = localStorage.getItem('token')


  const router = useRouter();

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img src="/assets/imgs/logo.png" alt="logo" width='120px' />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className={`text-gray-500 text-lg transition hover:text-purple-600/75 ${router.asPath === '/'
                      ? "text-purple-800"
                      : "text-black-300"
                    }`} href="/"> Home </Link>
                </li>
                <li>
                  <a className={`text-gray-500 text-lg transition hover:text-purple-600/75 ${router.asPath === '/events'
                      ? "text-purple-800"
                      : "text-black-300"
                    }`} href="/events"> Events </a>
                </li> 
                {token && <li>
                  <a className={`text-gray-500 text-lg transition hover:text-purple-600/75 ${router.asPath === '/my-events'
                      ? "text-purple-800"
                      : "text-black-300"
                    }`} href="/my-events">My Activities</a>
                </li>}


              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <ConnectBtn />
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
