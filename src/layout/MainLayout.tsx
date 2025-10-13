import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/main-layout.css';

type MainLayoutProps = {
    children: React.ReactNode;
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div className='page-background'>
        <Navbar/>
        <div className="eclipsed-bg"></div>
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default MainLayout