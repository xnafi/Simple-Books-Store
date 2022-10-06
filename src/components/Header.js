import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='bg-gray-100'>
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between text-center'>
          <Link
            to='/'
            aria-label='proReader'
            title='proReader'
            className='inline-flex items-center'
          >
            <img src="data:image/png;base64,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"></img>
            <span className='ml-2 text-lg md:text-2xl font-bold tracking-wide text-gray-800 header'>
              <span className='text-red-600'> BOOK </span>SHELF
            </span>
          </Link>
          <ul className='items-center hidden space-x-8 lg:flex'>
            <li>
              <NavLink
                to='/home'
                aria-label='Home'
                title='Home'
                className={({ isActive }) =>
                  isActive ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/books'
                aria-label='Books'
                title='Books'
                className={({ isActive }) =>
                  isActive ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                aria-label='About us'
                title='About us'
                className={({ isActive }) =>
                  isActive ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                }

              >
                About us
              </NavLink>
            </li>
          </ul>
          <div className='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <a
                        to='/'
                        aria-label='proReader'
                        title='proReader'
                        className='inline-flex items-center'
                      >
                        <svg
                          className='w-8 text-deep-purple-accent-400'
                          viewBox='0 0 24 24'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeMiterlimit='10'
                          stroke='currentColor'
                          fill='none'
                        >
                          <rect x='3' y='1' width='7' height='12' />
                          <rect x='3' y='17' width='7' height='6' />
                          <rect x='14' y='1' width='7' height='6' />
                          <rect x='14' y='11' width='7' height='12' />
                        </svg>
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          proReader
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <a
                          to='/'
                          aria-label='Home'
                          title='Home'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          to='/books'
                          aria-label='Books'
                          title='Books'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Books
                        </a>
                      </li>
                      <li>
                        <a
                          to='/about'
                          aria-label='About Us'
                          title='About Us'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          About Us
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
