"use client";

import BackGround from "@/components/BackGround";
import Card from "@/components/CarouselSlider/Card";

import React from "react";
// import TeamCarousel from "lightswind/components/team-carousel";


const IndexContent = () => {
	return (
		<div className="h-screen max-w-full overflow-hidden">
			<BackGround />
			<section className="size-full flex-center">
				<Card />
			</section>
		</div>
	);
};

const Index = () => {
	return <IndexContent />;
};
export default Index;
