import React, { useState } from 'react';
import Card from "./Card";
import { useCharacterContext } from '@/context/CharacterContext';
import BtnArrow from '../common/BtnArrow';

const CarouselSlider = () => {

    const { resonators } = useCharacterContext();
	const resonatorsData = resonators || null || [];

    const [indexActive, setIndexActive] = useState(0);

    const nextSlide = () => {
		setIndexActive((prev) => (prev + 1) % resonatorsData.length);
	};

    const prevSlide = () => {
		setIndexActive((prev) => (prev - 1 + resonatorsData.length) % resonatorsData.length);
	};

    const getVisibleItems = () => {
		const result = [];
		for (let i = -2; i <= 2; i++) {
			const index = (indexActive + i + resonatorsData.length) % resonatorsData.length;
			result.push({
				...resonatorsData[index],
				position: i, // vị trí tương đối (-2,-1,0,1,2)
			});
		}
		return result;
	};

    return (
		<div className="flex-center size-full duration-200 transition-all ease-in-out">
			{resonatorsData.length > 0 &&
				getVisibleItems().map((resonator, index) => {
					const { position } = resonator;

					// hiệu ứng vị trí 3D
					const baseX = 200; // giảm từ 220 xuống 200
					const farX = 150; // dùng cho ±2 (gần hơn)
					const translateX = Math.abs(position) === 2 ? position * farX : position * baseX;
					const rotateY = position * -20;
					const scale = position === 0 ? 1 : 0.85 - Math.abs(position) * 0.05;
					const zIndex = 10 - Math.abs(position);

					return (
						<div
							key={index}
							className="absolute transition-all duration-700 ease-in-out"
							style={{
								transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
								zIndex,
								// opacity: 1 - Math.abs(position) * 0.3,
							}}
						>
							<div className="">
								<Card items={resonator} isCenter={position === 0} />
							</div>
						</div>
					);
				})}

			<div>
				<BtnArrow className="left-5" onClick={prevSlide}>
					<img className="rotate-180 size-20" src="/img/BtnArrrow.png" alt="" />
				</BtnArrow>
				<BtnArrow className="right-5" onClick={nextSlide}>
					<img className=" size-20" src="/img/BtnArrrow.png" alt="" />
				</BtnArrow>
			</div>
		</div>
	);
}

export default CarouselSlider
