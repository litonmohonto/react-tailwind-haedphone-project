import React from 'react'
import img1 from '../../assets/product/p-1.jpg'
import img2 from '../../assets/product/p-2.jpg'
import img3 from '../../assets/product/p-3.jpg'
import img4 from '../../assets/product/p-4.jpg'
import img5 from '../../assets/product/p-5.jpg'
import img6 from '../../assets/product/p-7.jpg'
import img7 from '../../assets/product/p-9.jpg'
import Button from '../Shared/button'

const Productsdata = [
          {
                    id: 1,
                    img: img1,
                    title: 'Boat Headphones',
                    price: '120',
                    aosDelay: '0'
          },
          {
                    id: 2,
                    img: img2,
                    title: 'Rocky Mounitain',
                    price: '80',
                    aosDelay: '100'
          },
          {
                    id: 3,
                    img: img3,
                    title: 'Goggles',
                    price: '100',
                    aosDelay: '200'
          },
          {
                    id: 4,
                    img: img4,
                    title: 'Printed',
                    price: '150',
                    aosDelay: '300'
          },
          {
                    id: 5,
                    img: img5,
                    title: 'Headphones',
                    price: '180',
                    aosDelay: '400'
          }
          ,
          {
                    id: 6,
                    img: img6,
                    title: 'Headphones',
                    price: '150',
                    aosDelay: '500'
          },
          {
                    id: 7,
                    img: img7,
                    title: 'Headphones',
                    price: '120',
                    aosDelay: '600'
          },
          {
                    id: 8,
                    img: img1,
                    title: 'Boat Headphones',
                    price: '120',
                    aosDelay: '700'
          }
]

const Products = () => {
          return (
                    <div className='container'>
                              <div className='text-center space-y-4 py-10'>
                                        <h1 className='text-5xl font-bold dark:text-white'>Our Products</h1>
                                        <p className='text-sm text-gray-300 '>Explore Our Products</p>
                              </div>
                              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>

                                        {
                                                  Productsdata.map((products) => {
                                                            return (
                                                                      <div key={products.id} className='group'>
                                                                                <div className='relative'>
                                                                                          <img src={products.img} alt="photo" className='w-[260px] h-[200px] object-center rounded-md' />
                                                                                          <div className='hidden group-hover:flex duration-300 absolute top-1/2 -translate-y-1/2 text-center  left-1/2 -translate-x-1/2 w-full   group-hover:backdrop-blur-sm  h-full  justify-center items-center'>
                                                                                                    <Button
                                                                                                              text="Add To Card"
                                                                                                              bgColor='bg-primary'
                                                                                                              textColor="text-white"
                                                                                                    />
                                                                                          </div>
                                                                                </div>
                                                                                <div className='leading-7'>
                                                                                          <h2 className='font-semibold'> {products.title}</h2>
                                                                                          <h2 className='font-bold'> ${products.price}</h2>
                                                                                </div>

                                                                      </div>
                                                            )
                                                  })
                                        }

                              </div>

                    </div>
          )
}

export default Products
