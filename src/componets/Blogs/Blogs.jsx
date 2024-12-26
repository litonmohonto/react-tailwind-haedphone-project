import React from 'react'
import img1 from '../../assets/blogs/blog-1.jpg'
import img2 from '../../assets/blogs/blog-2.jpg'
import img3 from '../../assets/blogs/blog-3.jpg'

const Blogsdata = [
          {
                    id: 1,
                    img: img1,
                    date: '2022-01-15',
                    title: 'How to choose perfact gadget',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    author: 'John Doe',
          },
          {
                    id: 2,
                    img: img2,
                    date: '2022-02-10',
                    title: '5 tips to make your home look modern',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    author: 'Jane Doe',
          },
          {
                    id: 3,
                    img: img3,
                    date: '2022-03-05',
                    title: '10 reasons why you should buy a smartwatch',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    author: 'Mike Doe',
          }
]

const Blogs = () => {
          return (
                    <div className='container py-12'>
                              <div className='text-center space-y-4 py-10'>
                                        <h1 className='text-5xl font-bold dark:text-white'>Recnt News</h1>
                                        <p className='text-sm text-gray-300 '>Latest News & Articles</p>
                              </div>
                              <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                                        {
                                                  Blogsdata.map((data) => {
                                                            return (
                                                                      <div key={data.id}>
                                                                                <div className='overflow-hidden '>
                                                                                          <img src={data.img} alt="photo" className='w-[450px] h-[300px] rounded-3xl hover:scale-150  duration-500 ' />
                                                                                </div>
                                                                                <div className=' mt-4'>
                                                                                          <div className='text-sm text-gray-600 '>{data.date}</div>
                                                                                          <h2 className='text-xl font-bold mb-4'>{data.title}</h2>
                                                                                          <p className='text-gray-400'>{data.content}</p>
                                                                                </div>

                                                                      </div>
                                                            )
                                                  })
                                        }
                              </div>


                    </div>
          )
}

export default Blogs
