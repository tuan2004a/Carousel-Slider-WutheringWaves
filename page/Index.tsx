"use client";

import BackGround from "@/components/BackGround";
import CarouselSlider from "@/components/CarouselSlider/CarouselSlider";
import { useCharacterContext, CharacterProvider } from "@/context/CharacterContext";

import React from "react";


const IndexContent = () => {
	
	return (
		<div className="h-screen  max-w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-[url(/img/background.png)]">
			<BackGround />
			<section className="size-full ">
				{/* <Carousel3D /> */}
				<CarouselSlider />
			</section>
		</div>
	);
};

const Index = () => {
	return (
		<CharacterProvider>
			<IndexContent />
		</CharacterProvider>
	);
};
export default Index;
