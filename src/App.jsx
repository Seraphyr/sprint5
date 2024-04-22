import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Info from './components/Info'
import Testimonials from './components/Testimonials'
import GetEarly from './components/GetEarly'
import Footer from './components/Footer'
import './App.css'


export default function App() {
    return (
        <>
            <Nav />
            <Hero />
            <Features />
            <Info />
            <Testimonials />
            <GetEarly />
            <Footer />
        </>
    )
}