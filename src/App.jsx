import React, { useState, useEffect } from 'react';
import "./App.css"
import './styles/main.scss';
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from './pages/Home/Home';
import ToggleTheme from './utils/ToggleTheme/ToggleTheme';
import {BlogProvider} from './BlogContext/BlogContext';
import Blogs from './pages/Blogs/Blogs';
import Authors from './pages/Authors/Authors';
import AuthorsDetails from './components/AuthorsDetails/AuthorsDetails';
import BlogItemDetails from './components/BlogItemDetails/BlogItemDetails';
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop"
import Wishlist from './components/Wishlist/Wishlist';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <div className="App">
      <BlogProvider>
        <ScrollToTop />
        <ToggleTheme />
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/blogs"} element={<Blogs />} />
          <Route path={"/blogs/:id"} element={<BlogItemDetails />} />
          <Route path={"/authors"} element={<Authors />} />
          <Route path={"/authors-details"} element={<AuthorsDetails />} />
          <Route path={"/wishlist"} element={<Wishlist />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
        <Footer />
      </BlogProvider>
    </div>
  );
}

export default App;
