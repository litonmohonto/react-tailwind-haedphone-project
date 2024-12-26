import React from 'react'
import Navigation from './componets/Navigation/Navigation'
import Home from './componets/Home/Home'
import Category from './componets/Category/Category'
import Services from './componets/Services/Services'
import Banner from './componets/Banner/Banner'
import Products from './componets/Products/Products'
import Banner2 from './componets/Banner2/Banner2'
import Blogs from './componets/Blogs/Blogs'
import Partners from './componets/Partners/Partners'
import Footer from './componets/Footer/Footer'
import Popup from './componets/Popup/Popup'


const App = () => {
          const [orderPopup, setOrderPopup] = React.useState(false)
          const handleOrderPopup = () => {
                    setOrderPopup(!orderPopup)
          }
          return (
                    <div className=' text-black dark:text-white  dark:bg-gray-900 duration-300'>
                              <Navigation handleOrderPopup={handleOrderPopup} />
                              <Home handleOrderPopup={handleOrderPopup} />
                              <Category />
                              <Services />
                              <Banner />
                              <Products />
                              <Banner2 />
                              <Blogs />
                              <Partners />
                              <Footer />
                              <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />


                    </div>
          )
}

export default App
