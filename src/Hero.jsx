import React, {useeFFECT} from 'react'
import Logo from '/images/logo.png'
import Tea from '/images/tea.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Hero() {
AOS.init()

  return (
    <div data-aos="zoom-in"
    data-aos-delay="50"
    data-aos-duration="1000">
        
        <nav className="flex flex-col md:flex-row justify-center md:justify-between items-center px-4">
            <img src={Logo} className="w-20" alt="" />
            <ul className="flex justify-between items-center gap-5 text-[#87551C] font-regular" >
                <li>Home</li>
                <li>About us</li>
                <li>Testimoinal</li>
                <li>Contact Us</li>
            </ul>
            <button className="hidden md:block p-3 bg-[#A97543] text-white rounded-[10px]">Sign Up</button>
        </nav>
        <div className="hero text-center flex flex-col items-center justify-center w-full">
            <h1 className="h1 text-[55px] md:text-[117px] font-bold text-[#976236]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000">Tea Time Hub</h1>
            <p className="text-[14px] md:text-[22px] md:w-1/2 p-2 text-[#7E5D35]"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000">From the rolling hils of Darjeeling to the lush gardens of Japan, our teas encapsulate
            the essence of their origins, offering a moment of tranquility in every sip</p>

            <button className="block p-3 bg-[#87551C] text-white rounded-[10px] w-max"
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="1000">Sign Up</button>
                <div className="flex justify-center items-center"
                data-aos="zoom-in"
                data-aos-delay="1500"
                data-aos-duration="1000">
                    <img src={Tea} className="w-1/2" alt="" />
                </div>
        </div>
    </div>
  )
}

export default Hero