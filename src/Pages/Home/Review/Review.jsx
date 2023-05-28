import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

const Review = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mx-10'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='p-10 mx-10 text-center flex flex-col items-center'>
                            <div className='mb-4'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>

                            <p>{review.details}</p>
                            <div>
                                <h3 className='text-center font-semibold text-red-600 mt-4 text-2xl'>{review.name}</h3>
                            </div>

                        </div>

                    </SwiperSlide>)
                }



            </Swiper>
        </div>
    );
};

export default Review;