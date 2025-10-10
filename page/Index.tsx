"use client";

import CarouselSlider from "@/components/CarouselSlider/CarouselSlider";
import { useCharacterContext, CharacterProvider } from "@/context/CharacterContext";

import React from "react";


const IndexContent = () => {
	
	return (
		<div className="h-screen  max-w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-[url(/img/background.png)]">
			<section className="size-full ">
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
