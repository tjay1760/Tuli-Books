import React from 'react'
import { motion, scale } from 'motion/react';
import googlecard from '../assets/images/google-card.png'
import kcbcard from '../assets/images/kcb-card.png'
import stripecard from '../assets/images/stripe-card.png'
import equitycard from '../assets/images/equity-card.png'
import whatsappcard from '../assets/images/whatapp-card.png'
import mpesacard from '../assets/images/mpesa-card.png'
import paypalcard from '../assets/images/paypal-logo.png'
import microsoftcard from '../assets/images/windows-card.png'
import onedrivecard from '../assets/images/onedrive-card.png'
import dropboxcard from '../assets/images/dropbox-card.png'
import visacard from '../assets/images/visa-card.png'
import mastercardcard from '../assets/images/master-card.png'
import pawaicard from '../assets/images/pawa-ai-card.png'
import mpesa2card from '../assets/images/mpesa-card2.png'
import flutterwavecard from '../assets/images/flutterwave.png'


const companies = [
  { name: 'Google', logo: googlecard },
  { name: 'KCB', logo: kcbcard },
  { name: 'Stripe', logo: stripecard },
  { name: 'Equity', logo: equitycard },
  { name: 'Whatsapp', logo: whatsappcard },
  { name: 'M-Pesa', logo: mpesacard },
  { name: 'Microsoft', logo: microsoftcard },
  { name: 'OneDrive', logo: onedrivecard },
  { name: 'Dropbox', logo: dropboxcard },
  { name: 'Paypal', logo: paypalcard },
  { name: 'Paypal', logo: paypalcard },
  { name: 'Visa', logo: visacard },
  { name: 'Mastercard', logo: mastercardcard },
  { name: 'Pawa AI', logo: pawaicard },
  { name: 'M-pesa2', logo: mpesa2card },
  { name: 'FlutterWave', logo: flutterwavecard },
];
const topRow = companies.slice(0, 2);
const middleRow = companies.slice(2, companies.length - 2);
const bottomRow = companies.slice(companies.length - 2);

   const cardVariants = {
    initial: { opacity: 0, scale: 0.5, y: 40 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
  };

  const transitionProps = (delay) => ({
    duration: 0.8,
    ease: [0.25, 0.8, 0.25, 1], // A smooth cubic-bezier easing curve
    delay: delay,
  });
  
const Card = ({ logo, name, }) => (
  <motion.div
    className="max-w-32 max-h-32 logo-card hover:scale-110 transition-transform duration-100 flex items-center justify-center border border-gray-50 rounded-lg shadow-md bg-white"
    variants={cardVariants}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true, amount: 0.3 }}
    transition={transitionProps(Math.random() * 0.5)} // Random delay for staggered effect
  >
    <img src={logo} alt={`${name} Logo`} className="object-contain" />
  </motion.div>
);

const Platforms = () => {
  return (
  <div className=" flex items-center justify-center font-sans mt-20 px-10 max-w-7xl mx-auto">

    <div className="bg-white p-8 md:p-12 m-4 mx-auto w-full">
        <div className="main-grid grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="flex flex-col items-start text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0957FF] mb-4 leading-tight">
                    All Our Connected Platforms
                </h1>
                <p className="text-xl text-gray-900 mb-8 leading-relaxed font-semibold">
                    These business tools and many more to come, <br /> work well with Tuli Books
                </p>
                <button className="bg-[#0957FF] text-white text-2xl py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                    Explore integration
                </button>
            </div>

<div className="flex gap-2 flex-col">
<div className="logo-grid grid grid-cols-4 gap-6">
  {topRow.map((company, idx) => (
    <div
      key={company.name}
      className={idx === 0 ? "col-start-2" : ""}
    >
      <Card logo={company.logo} name={company.name} />
    </div>
  ))}
</div>

            <div className="logo-grid grid grid-cols-4 gap-6">
              {middleRow.map((company) => (
                <Card key={company.name} logo={company.logo} name={company.name} />
              ))}
            </div>
<div className="logo-grid grid grid-cols-4 gap-6">
  {bottomRow.map((company, idx) => (
    <div
      key={company.name}
      className={idx === 0 ? "col-start-2" : ""}
    >
      <Card logo={company.logo} name={company.name} />
    </div>
  ))}
</div>

</div>

        </div>
    </div>

</div>
  )
}

export default Platforms