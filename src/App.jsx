import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import TechStack from './components/TechStack/TechStack'
import MyWork from './components/MyWork/MyWork'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <TechStack />
        <MyWork />
      </main>
      <Footer />
    </>
  )
}

export default App