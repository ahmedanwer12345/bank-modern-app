import React from 'react'
import Navbar from './compponent/Navbar'
import styles from './styles';
import Hero from './compponent/Hero';
import Stats from './compponent/Stats';
import Business from './compponent/Business';
import Billing from './compponent/Billing';
import CardDeal from './compponent/CardDeal';
import Testimonials from './compponent/Testimonials';
import Clients from './compponent/Clients';
import CTA from './compponent/CTA';
import Footer from './compponent/Footer';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} text-white`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default App