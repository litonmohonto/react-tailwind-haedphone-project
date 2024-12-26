import React from 'react'
import { IoMdClose } from "react-icons/io";
import Button from '../Shared/button';

const Popup = ({ orderPopup, handleOrderPopup }) => {

          return (
                    <div>
                              {
                                        orderPopup && (
                                                  <div className='w-screen h-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm z-40'>
                                                            <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 p-4 -translate-y-1/2 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md'>
                                                                      <div className='flex items-center justify-between mb-4'>
                                                                                <h1>Order Now</h1>
                                                                                <div>
                                                                                          <IoMdClose
                                                                                                    onClick={handleOrderPopup} className='text-2xl cursor-pointer' />
                                                                                </div>
                                                                      </div>
                                                                      <div>
                                                                                <input type="text" className='input-from' placeholder='Name' />
                                                                                <input type="email" className='input-from' placeholder='Email' />
                                                                                <input type="text" placeholder='address' className='input-from' />
                                                                                <div className='flex justify-center'>
                                                                                          <Button
                                                                                                    text={'Order Now'}
                                                                                                    bgColor={"bg-primary"}
                                                                                                    textColor={'text-white'}
                                                                                          />
                                                                                </div>
                                                                      </div>

                                                            </div>

                                                  </div>
                                        )
                              }
                    </div>
          )
}

export default Popup
