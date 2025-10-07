import React, { useState } from 'react'
import Card from './Card'

import { useCharacterContext } from "@/context/CharacterContext";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from 'swiper/modules';


const Carousel3D = () => {

	const { resonators } = useCharacterContext();
	const resonatorsData = resonators || null || [];

	const [activeIndex, setActiveIndex] = useState(0);

    return (
		<div className="size-full flex-center">
			{/* <div className="relative flex-center"> */}
				<Swiper
					modules={[EffectCoverflow]}
					slidesPerView={5}
					centeredSlides={true}
					effect="coverflow"
					grabCursor={true}
					loop={true}
					coverflowEffect={{
						rotate: 0,
						stretch: 50, // tạo khoảng cách giữa các slide
						depth: 200, // độ sâu 3D
						modifier: 1.2,
						slideShadows: false,
					}}
					onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
					className="overflow-hidden"
				>
					{resonatorsData.length > 0 &&
						resonatorsData.map((resonator, index) => (
							<SwiperSlide key={resonator.id}>
								<div className={`transition-all duration-500 ease-in-out ${index === activeIndex ? " z-20 drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]" : "scale-90 z-10"}`}>
									<Card items={resonator} />
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			{/* </div> */}
		</div>
	);
}

export default Carousel3D
