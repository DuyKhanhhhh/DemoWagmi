'use client'

import './globals.css'
import Login from "@/components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import CardProduct from '@/components/CardProduct'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart" element={<CardProduct />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
