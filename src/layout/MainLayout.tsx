import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type MainLayoutProps = {
    children: React.ReactNode;
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default MainLayout