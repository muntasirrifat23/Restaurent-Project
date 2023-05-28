import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../../src/assets/home/slide1.jpg'
import slide2 from '../../../../src/assets/home/slide2.jpg'
import slide3 from '../../../../src/assets/home/slide3.jpg'
import slide4 from '../../../../src/assets/home/slide4.jpg'
import slide5 from '../../../../src/assets/home/slide5.jpg'

import homeCataloge from '../../../../src/assets/home/chef-service.jpg';
import MenuItem from '../../Shared/MenuItem';

import FeatureItems from '../../../../src/assets/home/featured.jpg'
import Review from '../Review/Review';

const Catagory = () => {
    // PopularMenu
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const polularItem = data.filter(items =>
                    items.category === 'popular')
                setMenu(polularItem)
            })
    }, [])


    return (
        <div className='mb-10'>
            <div className='text-center mx-auto my-10 border-y-4 md:w-3/12 sm:w-5/12 lg:w-3/12'>
                <p className='text-red-600 font-semibold italic'>---- From 1:00Pm to 9:00Pm ----</p>
                <h3 className='uppercase text-4xl font-bold'>Order Online</h3>
            </div>

            {/* Swiper Slides */}
            <div>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={false}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className='text-4xl uppercase text-center text-black -mt-16'>Salad
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className='text-4xl uppercase text-center text-white -mt-16'>Pizza
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className='text-4xl uppercase text-center text-black -mt-16'>Soup
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className='text-4xl uppercase text-center text-black  -mt-16'>Cake
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className='text-4xl uppercase text-center text-black -mt-16'>Salad
                        </h3>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Chef Service */}
            <div className='mt-10 mx-auto'>
                <div className="hero min-h-screen h-32" style={{ backgroundImage: `url(${homeCataloge})` }}>
                    <div className='bg-white py-36 px-10 w-9/12 text-center rounded-xl'>
                        <h3 className='text-4xl uppercase'>Bistro Boss</h3>
                        <p className='mt-4 p-18'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>

            {/* Popular Menu */}
            <div>
                <div className='text-center mx-auto my-10 border-y-4 md:w-3/12 sm:w-5/12 lg:w-3/12'>
                    <p className='text-red-600 font-semibold italic'>---- Visit Our Menu ----</p>
                    <h3 className='uppercase text-4xl font-bold'>Our Menu</h3>
                </div>
            </div>

            {/* MenuBar */}
            <div className=' grid md:grid-cols-2 gap-4'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>

            {/*Chef Recommends */}
            <div>
                <div className='text-center mx-auto my-10 border-y-4 md:w-3/12 sm:w-5/12 lg:w-3/12 mt-10'>
                    <p className='text-red-600 font-semibold italic'>---- Must Try Item ----</p>
                    <h3 className='uppercase text-4xl font-bold'>Chef Recommends</h3>
                </div>
            </div>

            <div className='md:flex justify-center mt-10 gap-4 text-center'>
                <div className='flex justify-center'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4 text-center">
                        <figure><img src={slide2} alt="Shoes" className='rounded-lg' /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-semibold uppercase">Pizza</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken <p> Breast Fillets.</p></p>
                            <div className="card-actions justify-center ">
                                <button className="bg-white text-black border-red-600 btn btn-primary 
                                border-0 border-b-4 border-red-800 text-red-600">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4 text-center">
                        <figure><img src={slide2} alt="Shoes" className='rounded-lg' /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-semibold uppercase">Pizza</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken <p> Breast Fillets.</p></p>
                            <div className="card-actions justify-center ">
                                <button className="bg-red-800 text-white-600 btn btn-primary ">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4 text-center">
                        <figure><img src={slide2} alt="Shoes" className='rounded-lg' /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-semibold uppercase">Pizza</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken <p> Breast Fillets.</p></p>
                            <div className="card-actions justify-center ">
                                <button className="bg-white text-red-600 border-0 border-b-4 border-red-800 btn btn-primary">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured items section */}
            <div>
                <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${FeatureItems})` }}>
                    <div className="hero-overlay bg-opacity-70"></div>

                    <div>
                        <div>
                            <div className='text-center mx-auto my-10 border-y-4 md:w-3/12 sm:w-5/12 lg:w-3/12'>
                                <p className='text-red-600 font-semibold italic'>---- Check It Out ----</p>
                                <h3 className='uppercase text-4xl font-bold text-white'>From Our Menu</h3>
                            </div>
                        </div>
                        <div className='text-center flex justify-center'>
                            <div className='w-4/12'>
                                <img src={FeatureItems} alt="" />
                            </div>

                            <div className="hero-content text-neutral-content">
                                <div className="max-w-md ClassProperties text-left">
                                    <h1 className="mb-2 text-xl font-bold">Where can I get food?</h1>
                                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi deserunt voluptatem explicabo doloribus eos inventore cumque et minima repellendus.</p>
                                    <button className="btn btn-primary bg-white text-red-600 border-0 border-b-4 border-red-800">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Testimonial */}
            <div>
                <div>
                <div className='text-center mx-auto my-10 border-y-4 md:w-3/12 sm:w-5/12 lg:w-3/12 mt-10'>
                    <p className='text-red-600 font-semibold italic'>----- What Our Clients Say-----</p>
                    <h3 className='uppercase text-4xl font-bold'>Reviews</h3>
                </div>

                <div>
                    <Review></Review>
                </div>
                </div>
            

            </div>


        </div>
    );
};

export default Catagory;