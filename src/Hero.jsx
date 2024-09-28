import React, { useeFFECT } from 'react'
import Logo from '/images/logo.png'
import Load from '/images/Load.png'
import Heart from '/images/heart.png'
import Search from '/images/search.png'
import Wallet from '/images/wallet.png'
import Sol from '/images/solana.png'
import User from '/images/Icon.png'
import Main from '/images/n1.png'
import Verify from '/images/Verify.png'
import Sub1 from '/images/sub1.png'
import Sub2 from '/images/sub2.png'
import Sub3 from '/images/sub3.png'
import Sub4 from '/images/sub4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Hero() {
    AOS.init()

    return (
        <div>
            <nav className="flex justify-between items-center p-2">
                <img src={Logo} alt='' />
                <ul className="hidden md:flex justify-between gap-10 items-center">
                    <li className="">Drop</li>
                    <li className="">Stats</li>
                    <li className="active bg-[#131615] p-2 rounded-md ">Mints</li>
                    <li className="">Create</li>
                </ul>

                <div className="hidden md:flex gap-3  bg-[#171717] p-2 rounded-sm items-center">
                    <img src={Search} className="w-5 h-5" alt="" />
                    <input type="text" placeholder="Search..." className="bg-transparent" />
                </div>
                <div className="hidden md:flex gap-5">
                    <img src={Wallet} className="" alt="" />
                    <img src={User} className="" alt="" />
                </div>
            </nav>

            <div className="flex flex-col lg:flex-row items-center justify-between w-full p-5 gap-5 md:gap-0">
                <div className="hero-left w-[60%] lg:w-[27%]"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000">
                    <img src={Main} alt='' className="" />
                </div>
                <div className="hero-right w-full md:w-[70%] flex flex-col items-centermd:items-start gap-4">
                    <div className="top flex justify-between items-center w-full"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="150"
                        data-aos-duration="1000">
                        <div className="text-center">
                            <h1 className="h1 text-[30px] md:text-[45px] lg:text-[60px] flex items-center gap-2">Digital Urban Elite<span><img src={Verify} alt="" /></span></h1>
                            <p className="h1 font-extralight text[15px] md:text-[20px] flex items-center gap-2 flex-wrap ">Created <span className="font-semibold ">Sat, 13 May 2024 13:15:12 GMT</span>  by<span className="text-[#2081E2] underline">CHOP...T23</span> on <img src={Sol} alt="" /> </p>
                        </div>
                        <div className="flex items-center justify-center mr-2 gap-2">
                            <img src={Heart} alt='' />
                            <span className="font-extralight">112</span>
                        </div>

                    </div>


                    <p className="h1 font-extralight w-full md:w-[70%] text-[18px]"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000">Digital Urban Elite is a limited-edition collection inspired by the fusion of modern art and urban culture, brought to life through cutting-edge technology. This hand-crafted NFT is designed to push the boundaries of digital identity, offering collectors a unique piece that stands out in the metaverse.</p>
                    <div className="flex justify-between items-center flex-col gap-5 md:gap-0 md:flex-row md:w-[70%]"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="1000">
                        <div className="flex flex-col items-center bg-[#161616] px-6 py-2 rounded-[10px]">
                            <h5 className="text-[18px]">Mint Price</h5>
                            <p className="flex gap-4 items-center">3.5 <span><img src={Sol} className="" /></span></p>
                        </div>
                        <div className="flex flex-col items-center bg-[#161616] px-6 py-2 rounded-[10px]">
                            <h5>Mint Per User</h5>
                            <p className="font-semibold">Unlimited</p>
                        </div>
                        <div className="flex flex-col items-center bg-[#161616] px-6 py-2 rounded-[10px]">
                            <h5>5.28% sold (176/3333)</h5>
                            <div className=" m-3 h-3 w-[240px] bg-[#212121] rounded-[10px]">
                                <div className=" h-3 w-[50px] bg-[#2081E2]  rounded-[10px]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="350"
                        data-aos-duration="1000">
                        <div className="bg-[#161616] mx-4 w-1/2 h-10 flex items-center justify-center rounded-lg">
                            <img src={Load} alt="" className="" />
                        </div>
                        <div className="flex gap-4">
                            <button className="px-5 py-1 bg-[#2081E2] rounded-md">Mint</button>
                            <h6 className="px-5 py-1 bg-[#161616] rounded-md">9</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relateed w-full"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000">
                <h1 className="text-[28px] font-semibold mb-2 mx-4">Minted NFTs</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 mx-5 gap-4">
                    <img src={Sub1} alt='' className="mb-2"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="400"
                        data-aos-duration="1000" />
                    <img src={Sub2} alt='' className="mb-2"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="450"
                        data-aos-duration="1000" />
                    <img src={Sub3} alt='' className="mb-2"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="500"
                        data-aos-duration="1000" />
                    <img src={Sub4} alt='' className="mb-2"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="550"
                        data-aos-duration="1000" />
                </div>
            </div>
        </div>
    )
}

export default Hero