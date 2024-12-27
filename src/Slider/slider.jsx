import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './slider.css';


const Slider = () => {
    return (
        <div className="slider-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                speed={4000}
                loop
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="slide-content" style={{ backgroundImage: "url('/public/images/slider1.webp')" }}>
                        <div className="overlay">
                            <h1>Seamless capital market investment</h1>
                            <button className="cta-button">Open an Account Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="slide-content" style={{ backgroundImage: "url('/public/images/slider2.webp')" }}>
                        <div className="overlay">
                            <h1>Stock trade at the palm of your hand</h1>
                            <button className="cta-button">Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content" style={{ backgroundImage: "url('/public/images/slider3.jpg')" }}>
                        <div className="overlay">
                            <h1>Stock trade at the palm of your hand</h1>
                            <button className="cta-button">Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="slide-content" style={{ backgroundImage: "url('/public/images/slider2.webp')" }}>
                    <div className="overlay">
                        <h1>Stock trade at the palm of your hand</h1>
                        <button className="cta-button">Learn More</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-content" style={{ backgroundImage: "url('/public/images/slider1.webp')" }}>
                    <div className="overlay">
                        <h1>Stock trade at the palm of your hand</h1>
                        <button className="cta-button">Learn More</button>
                    </div>
                </div>
            </SwiperSlide>

                {/* Add more slides as needed */}
            </Swiper>
        </div>
    );
};

export default Slider;