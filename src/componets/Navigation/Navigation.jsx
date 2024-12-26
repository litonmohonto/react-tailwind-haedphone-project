import React, { useState } from 'react'
import navlinks from '../../Data'
import Dark from './Dark'
import { FaBarsStaggered } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { SlBasket } from "react-icons/sl";

const Navigation = ({ handleOrderPopup }) => {

          return (
                    <nav className='bg-white py-2 dark:bg-gray-900 duration-300 dark:text-white px-4 sticky top-0 z-50 '>
                              <div className='container'>
                                        <div className='flex justify-between items-center'>
                                                  <div className='flex gap-4 items-center'>
                                                            <div>
                                                                      <a href="#" className='text-2xl sm:text-3xl font-bold tracking-widest text-primary uppercase'>EShop</a>
                                                            </div>
                                                            <div className='hidden lg:block' >
                                                                      <ul className='flex gap-4 items-center'>
                                                                                {
                                                                                          navlinks.map((data) => {
                                                                                                    return (
                                                                                                              <li key={data.id}>
                                                                                                                        <a href={data.link} className='inline-block p-4 font-semibold text-gray-500 dark:hover:text-white hover:text-black duration-300 '>{data.name}</a>

                                                                                                              </li>

                                                                                                    )

                                                                                          })}

                                                                      </ul>
                                                            </div>
                                                  </div>

                                                  <div className='flex items-center justify-between gap-4  '>
                                                            <div className='relative group sm:block hidden'>
                                                                      <input type="text" className='search-bar' placeholder='search' />
                                                                      <CiSearch className='absolute top-1/2 -translate-y-1/2 right-3 divide-blue-300 text-xl text-gray-600 group-hover:text-primary dark:text-gray-400' />
                                                            </div>
                                                            <div className='relative p-3' onClick={handleOrderPopup}>

                                                                      <SlBasket />
                                                                      <div className='absolute top-0 right-0  text-xs w-4 h-4 rounded-full text-white bg-red-700 flex justify-center items-center'>4</div>
                                                            </div>
                                                            <div>
                                                                      <Dark />
                                                            </div>
                                                  </div>
                                        </div>

                              </div>

                    </nav >
          )
}

export default Navigation
