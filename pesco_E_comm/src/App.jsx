import React from 'react'
import { Route, Routes } from "react-router";

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home_01 from './pages/home01/Home_01'
import Home_02 from './pages/home02/Home_02'
import Login from './pages/login/Login'
import OurBlog from './pages/our-blog/OurBlog'
import BlogDetails from './pages/blog-details/BlogDetails'
import ProductsDetails from './pages/products-details/ProductsDetails'
import Profile from './pages/profile/Profile'
import Registeration from './pages/register/Registeration'
import ShopGride from './pages/shop-grid/ShopGride'
import WishList from './pages/wish-list/WishList'
import Card from './pages/card/Card'
import CheckOut from './pages/check-out/CheckOut'
import Contact from './pages/contact/Contact'

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home_01 />} />
        <Route path="/home02" element={<Home_02 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<OurBlog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/product" element={<ProductsDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/shop" element={<ShopGride />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}