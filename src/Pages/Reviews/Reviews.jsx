import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import '@smastrom/react-rating/style.css'
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://bangladashi-colleges-server.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <h1 className='text-center my-6 text-2xl font-bold text-purple-700'>Reviews</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center  mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-4">{review.details}</p>
                            <h3 className="text-2xl text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Reviews;