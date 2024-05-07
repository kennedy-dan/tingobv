import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer';
// import useWindowDimension from "@hooks/useWindowDimension";

const HomeLayout = ({children}) => {

  return (
    <>
        <NavBar />
        <div
        // style={{
        //   height: width > 450 ? "calc(100vh - 11rem)" : "calc(100vh - 8rem)",
        //   overflowY: "auto",
        // }}
      >
        <main className='font-urbanist'>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default HomeLayout