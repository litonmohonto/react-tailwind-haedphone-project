import React from 'react'
import img from '../../assets/brand/br-1.png'
import img2 from '../../assets/brand/br-2.png'
import img3 from '../../assets/brand/br-3.png'
import img4 from '../../assets/brand/br-4.png'
import img5 from '../../assets/brand/br-5.png'

const Partners = () => {
          return (
                    <div className=' container rounded-2xl py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10'>
                              <div className='container'>
                                        <div className='grid grid-cols-5 gap-3 place-items-center opacity-50 '>
                                                  <img src={img} alt="photo" className='w-[80px]' />
                                                  <img src={img2} alt="photo" className='w-[80px]' />
                                                  <img src={img3} alt="photo" className='w-[80px]' />
                                                  <img src={img4} alt="photo" className='w-[80px]' />
                                                  <img src={img5} alt="photo" className='w-[80px]' />

                                        </div>

                              </div>

                    </div>
          )
}

export default Partners
