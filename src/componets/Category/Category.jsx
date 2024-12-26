import React from 'react'
import head from '../../assets/category/earphone.png'
import smartwatch2 from '../../assets/category/watch.png'
import macbook from '../../assets/category/macbook.png'
import gaming from '../../assets/category/gaming.png'
import speaker from '../../assets/category/speaker.png'
import vr from '../../assets/category/vr.png'
import Button from '../Shared/button'

const Category = () => {
          return (
                    <div className='container py-12'>
                              <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8'>

                                        <div className='py-10 pl-5 bg-gradient-to-br  from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end '>
                                                  <div>
                                                            <div className='mb-4'>
                                                                      <p className='mb-[2px] text-gray-400'>EnJoy</p>
                                                                      <p className='text-2xl font-semibold mb-[2px]'>Whit</p>
                                                                      <p className='text-4xl font-bold xl:text-5xl opacity-20 mb-2 uppercase'>ErPhone</p>
                                                                      <Button
                                                                                text='Shop Now'
                                                                                bgColor='bg-primary'
                                                                                textColor="text-white"
                                                                      />
                                                            </div>
                                                            <div>
                                                                      <img src={head} alt="photo" className='w-[320px] absolute bottom-0' />
                                                            </div>
                                                  </div>
                                        </div>
                                        <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end '>
                                                  <div>
                                                            <div className='mb-4'>
                                                                      <p className='mb-[2px] text-gray-400'>EnJoy</p>
                                                                      <p className='text-2xl font-semibold mb-[2px]'>Whit</p>
                                                                      <p className='text-4xl font-bold xl:text-5xl opacity-20 mb-2 uppercase'>Geaget</p>
                                                                      <Button
                                                                                text='Shop Now'
                                                                                bgColor='bg-primary'
                                                                                textColor="text-white"
                                                                      />
                                                            </div>
                                                            <div>
                                                                      <img src={smartwatch2} alt="photo" className='w-[220px] absolute bottom-0 top-1/2 -translate-y-1/2 right-0' />
                                                            </div>
                                                  </div>
                                        </div>
                                        <div className='py-10 pl-5 bg-gradient-to-br sm:col-span-2 from-primary to-primary/70 text-white rounded-3xl relative h-[320px] flex items-end '>
                                                  <div>
                                                            <div className='mb-4'>
                                                                      <p className='mb-[2px] text-gray-400'>EnJoy</p>
                                                                      <p className='text-2xl font-semibold mb-[2px]'>Whit</p>
                                                                      <p className='text-4xl font-bold xl:text-5xl opacity-20 mb-2 uppercase'>Laptop</p>
                                                                      <Button
                                                                                text='Shop Now'
                                                                                bgColor='bg-primary'
                                                                                textColor="text-white"
                                                                      />
                                                            </div>
                                                            <div>
                                                                      <img src={macbook} alt="photo" className='w-[320px] absolute top-1/2 -translate-y-1/2 -right-0' />
                                                            </div>
                                                  </div>
                                        </div>
                                        <div className='py-10 pl-5 bg-gradient-to-br sm:col-span-2 from-brandwhite to-brandwhite/70 text-black rounded-3xl relative h-[320px] flex items-end '>
                                                  <div>
                                                            <div className='mb-4'>
                                                                      <p className='mb-[2px] text-gray-400'>EnJoy</p>
                                                                      <p className='text-2xl font-semibold mb-[2px]'>Whit</p>
                                                                      <p className='text-4xl font-bold xl:text-5xl opacity-20 mb-2 uppercase'>Console</p>
                                                                      <Button
                                                                                text='Shop Now'
                                                                                bgColor='bg-primary'
                                                                                textColor="text-white"
                                                                      />
                                                            </div>
                                                            <div>
                                                                      <img src={gaming} alt="photo" className='w-[320px] absolute top-1/2 -translate-y-1/2 -right-0' />
                                                            </div>
                                                  </div>
                                        </div>
                                        <div className='py-10 pl-5 bg-gradient-to-br  from-brandBlue/90 to-brandBlue/70  text-white rounded-3xl relative h-[320px] flex items-end '>
                                                  <div>
                                                            <div className='mb-4'>
                                                                      <p className='mb-[2px] text-gray-400'>EnJoy</p>
                                                                      <p className='text-2xl font-semibold mb-[2px]'>Whit</p>
                                                                      <p className='text-4xl font-bold xl:text-5xl opacity-20 mb-2 uppercase'>Oculur</p>
                                                                      <Button
                                                                                text='Shop Now'
                                                                                bgColor='bg-primary'
                                                                                textColor="text-white"
                                                                      />
                                                            </div>
                                                            <div>
                                                                      <img src={vr} alt="photo" className='w-[280px] absolute top-1/2 -translate-y-1/2 right-0' />
                                                            </div>
                                                  </div>
                                        </div>
                                        <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end '>
                                                  <div>
                                                            <div className='mb-4'>
                                                                      <p className='mb-[2px] text-gray-400'>EnJoy</p>
                                                                      <p className='text-2xl font-semibold mb-[2px]'>Whit</p>
                                                                      <p className='text-4xl font-bold xl:text-5xl opacity-20 mb-2 uppercase'>speaker</p>
                                                                      <Button
                                                                                text='Shop Now'
                                                                                bgColor='bg-primary'
                                                                                textColor="text-white"
                                                                      />
                                                            </div>
                                                            <div>
                                                                      <img src={speaker} alt="photo" className='w-[220px] absolute top-1/2 -translate-y-1/2 right-0' />
                                                            </div>
                                                  </div>
                                        </div>

                              </div>

                    </div>
          )
}

export default Category
