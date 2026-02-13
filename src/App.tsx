import { CarouselSlider } from "@/features/CarouselV1/components";
import { OwlCarousel } from "@features/CarouselV2/components";

function App() {
	return (
		<div>
			<div className="w-full">
				<CarouselSlider />
			</div>
			<div className="w-full h-screen relative">
				<OwlCarousel />
			</div>
		</div>
	);
}

export default App;
