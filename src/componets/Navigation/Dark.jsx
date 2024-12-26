import React, { useEffect, useState } from 'react'
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";

const Dark = () => {
          const [open, setOpen] = useState(false)
          const toggoles = () => {
                    setOpen(!open)
          }
          const [theem, setTheem] = useState(localStorage.getItem('theem') ? localStorage.getItem('theem') : 'light');
          const element = document.documentElement;
          useEffect(() => {
                    if (theem === 'dark') {
                              element.classList.add('dark');
                              localStorage.setItem('theem', 'dark');
                    }
                    else {
                              element.classList.remove('dark');
                              localStorage.setItem('theem', 'light');
                    }
          })


          return (
                    <div onClick={() => { setTheem(theem === 'dark' ? 'light' : "dark") }} >

                              <div onClick={toggoles} className='text-xl text-gray-600 dark:text-gray-400'>
                                        {
                                                  open ? <LuSun /> : <IoMoon />}

                              </div>


                    </div >
          )
}

export default Dark
