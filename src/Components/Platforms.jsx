import React from 'react'
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
  { name: 'Visa', logo: visacard },
  { name: 'Mastercard', logo: mastercardcard },
  { name: 'Pawa AI', logo: pawaicard },
  { name: 'M-pesa2', logo: mpesa2card },
  { name: 'FlutterWave', logo: flutterwavecard },
];

const Card = ({ logo, name }) => (
  <div class="logo-card">
    <img src={logo} alt={`${name} Logo`} class="h-32" />
  </div>
);

const Platforms = () => {
  return (
  <div class=" flex items-center justify-center font-sans mt-20 px-10">

    <div class="bg-white p-8 md:p-12 m-4 mx-auto w-full">
        <div class="main-grid grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div class="flex flex-col items-start text-center md:text-left">
                <h1 class="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
                    All Our Connected Platforms
                </h1>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                    These business tools and many more to come, work well with Tuli Books
                </p>
                <button class="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                    Explore integration
                </button>
            </div>

            <div class="logo-grid grid grid-cols-4 gap-6">
              {companies.map((company) => (
                <Card key={company.name} logo={company.logo} name={company.name} />
              ))}
            </div>
        </div>
    </div>

</div>
  )
}

export default Platforms