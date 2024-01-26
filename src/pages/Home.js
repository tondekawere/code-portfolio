import React from 'react'
import Banner from '../components/Banner'
import Work from '../components/Work'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Tools from '../components/Tools'
import About from '../components/About'

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Work />
      <Tools />
      <Contact />
    </>
  );
}

export default Home