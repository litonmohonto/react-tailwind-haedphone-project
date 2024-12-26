import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
const ser = [
          {
                    id: 1,
                    icons: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
                    title: 'free shopping',
                    description: ' free shopping on all orders',
          },
          {
                    id: 1,
                    icons: <FaCheck className='text-4xl md:text-5xl text-primary' />,
                    title: 'free shopping',
                    description: 'free shopping on all orders',
          },
          {
                    id: 1,
                    icons: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
                    title: 'free shopping',
                    description: 'free shopping on all orders',
          },
          {
                    id: 1,
                    icons: <FaSave className='text-4xl md:text-5xl text-primary' />,
                    title: 'free shopping',
                    description: 'free shopping on all orders',
          }
]

const Services = () => {
          return (
                    <div className='container my-14 md:my-20'>
                              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                                        {
                                                  ser.map((data) => {
                                                            return (
                                                                      <div key={data.id} >
                                                                                <div className='flex flex-col items-center  sm:flex-row  gap-4 '>
                                                                                          <div className='inline-block'>
                                                                                                    {data.icons}
                                                                                          </div>
                                                                                          <div >
                                                                                                    <h1 className='text-2xl md:text-3xl font-bold dark:text-white'>{data.title}</h1>
                                                                                                    <p className='dark:text-gray-400 capitalize pt-1'>{data.description}</p>
                                                                                          </div>
                                                                                </div>


                                                                      </div>
                                                            )

                                                  })
                                        }

                              </div>

                    </div>
          )
}

export default Services
