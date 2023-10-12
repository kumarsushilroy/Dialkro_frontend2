import React from 'react'
import Nav from '../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import CardSection from '../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../components/Body/Carousel/BannerCarousel'
const DoctorsPage = () => {
  const navigate = useNavigate()

  const category = 'hospital' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        <CardSection onClick={() => navigate('/hospitals/Product_Detail')} />
        <CardSection onClick={() => navigate('/hospitals/Product_Detail')} />
        <CardSection onClick={() => navigate('/hospitals/Product_Detail')} />
        <CardSection onClick={() => navigate('/hospitals/Product_Detail')} />
        <CardSection onClick={() => navigate('/hospitals/Product_Detail')} />
      </div>
      <Footer />
    </div>
  )
}

export default DoctorsPage
