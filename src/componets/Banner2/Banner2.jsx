import React from 'react'
import img from '../../assets/category/smartwatch2-removebg-preview.png'
import Button from '../Shared/button'
const bannerdata = [
          {
                    id: 1,
                    discount: '30%',
                    title: 'Happy Hours',
                    date: '10 dec 2024',
                    Image: img,
                    title2: 'air jack',
                    title3: 'winter sale',
                    description: 'A 30% discount on all fine smile products',
          }

]

const Banner2 = () => {
          return (
                    <div className='min-h-[550px] flex justify-center items-center py-12 px-4'>
                              <div className='bg-primary rounded-3xl container'>
                                        {
                                                  bannerdata.map((banner) => {
                                                            return (
                                                                      <div key={banner.id}>
                                                                                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white text-center md:text-left'>
                                                                                          <div className='p-6 sm:p-8'>
                                                                                                    <p className='text-sm'>{banner.discount}</p>
                                                                                                    <p className='uppercase text-4xl lg:text-7xl font-bold'>{banner.title}</p>
                                                                                                    <p className='text-sm'>{banner.date}</p>
                                                                                          </div>
                                                                                          <div className='h-full flex items-center'>
                                                                                                    <img src={banner.Image} alt="photo" className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-center' />
                                                                                          </div>
                                                                                          <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                                                                                                    <h1 className='font-bold text-xl'>{banner.title2}</h1>
                                                                                                    <h1 className='text-3xl sm:text-5xl font-bold '>{banner.title3}</h1>
                                                                                                    <p className='text-sm tracking-wide leading-5'>{banner.description}</p>
                                                                                                    <div>
                                                                                                              <Button
                                                                                                                        text='Shop Now'
                                                                                                                        bgColor='bg-white'
                                                                                                                        textColor='text-black'
                                                                                                              />
                                                                                                    </div>
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

export default Banner2
