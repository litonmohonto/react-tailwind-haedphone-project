import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from '@ant-design/react-slick';
import headphone from '../../assets/hero/headphone.png'
import macbook from '../../assets/hero/macbook.png'
import vr from '../../assets/hero/vr.png'
import Button from '../Shared/button';

const procute = [
          {
                    id: 1,
                    subtitle: 'Bast Solo',
                    title: 'Headphones',
                    title1: 'Wireless ',
                    img: headphone,
                    description: 'Our high-end headphones are designed to provide the best sound quality and comfort for your listening experience.'
          },
          {
                    id: 1,
                    subtitle: 'Bast Solo',
                    title: '  maCbOOK',
                    title1: 'Wireless ',
                    img: macbook,
                    description: 'Our high-end headphones are designed to provide the best sound quality and comfort for your listening experience.'
          },
          {
                    id: 1,
                    subtitle: 'Bast Solo',
                    title: 'Headphones',
                    title1: 'Wireless ',
                    img: vr,
                    description: 'Our high-end headphones are designed to provide the best sound quality and comfort for your listening experience.'
          },
]
const Home = ({ handleOrderPopup }) => {
          var settings = {
                    dost: false,
                    arrows: false,
                    Infinity: true,
                    speed: 800,
                    slidesToShow: 1,
                    autoplay: true,
                    autoplayspeed: 5000,
                    cssEase: 'ease-in-out',
                    pauseOnHover: false,
                    pauseOnFocus: true,



          };
          return (
                    <div className=' container '>
                              <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] w-full  haro-bg-color flex justify-center items-center ]'>
                                        <div className='container pb-8 sm:pb-0'>
                                                  <Slider {...settings}>
                                                            {
                                                                      procute.map((data) => {
                                                                                return (
                                                                                          <div key={data.id} >
                                                                                                    <div className='grid grid-cols-1 sm:grid-cols-2 px-4'>
                                                                                                              <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0  text-center sm:text-left order-2 sm:order-1 z-10'>
                                                                                                                        <h1 className='text-2xl sm:text-4xl  md:text-6xl font-bold'>{data.subtitle}</h1>
                                                                                                                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title1}</h1>
                                                                                                                        <h1 className='text-5xl uppercase text-white dark:text-white/55  sm:text-[60px] md:text-[100px] xl:text-[150px] font-bold'>{data.title}</h1>
                                                                                                                        <div onClick={handleOrderPopup}>
                                                                                                                                  <Button text="Shop By Category"
                                                                                                                                            bgColor='bg-primary'
                                                                                                                                            textColor='text-white'

                                                                                                                                  />
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                              <div className='order-1 sm:order-2 z-20 relative'>
                                                                                                                        <img src={data.img} alt="photo" className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 relative z-40 lg:scale-150 object-center object-contain mx-auto ' />
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>
                                                                                )
                                                                      })
                                                            }

                                                  </Slider>
                                        </div>
                              </div>

                    </div>
          )
}

export default Home
