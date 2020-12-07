import React from 'react'
import Rendezvous from '../components/Rendezvous'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/Navbar'

const RendezvousPage = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Rendezvous />
        </>
    )
}

export default RendezvousPage