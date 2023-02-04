import React from 'react'
import Header from "../layouts/components/Header"
import Footer from "../layouts/components/Footer"
import { Card } from '../components/card'

const MyCourse = () => {
  return (
    <>
    <Header />
    <div>
    <h3 className="font-italic text-center mt-3 mb-3">You Purchased Courses !</h3>
    <Card />
    </div>
    <div>
    <h3 className="font-italic text-center mt-3 mb-3">You Published Courses !</h3>
    <Card />
    </div>  
    <Footer />
    </>
  )
}

export default MyCourse