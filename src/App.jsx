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

const App = () => {

  return (
    <div className="App">
      <BlogProvider>
        <ToggleTheme />
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/blogs"} element={<Blogs />} />
          <Route path={"/authors"} element={<Authors />} />
          <Route path={"/authors-details"} element={<AuthorsDetails />} />
        </Routes>
      </BlogProvider>
    </div>
  );
}

export default App;
