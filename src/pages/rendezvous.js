import React from 'react'
import Rendezvous from '../components/Rendezvous'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RendezvousPage = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Rendezvous />
            <Footer />
        </>
    )
}

export default RendezvousPage