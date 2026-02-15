import { OwlCarousel } from "@features/CarouselV2/components";

function App() {
	return (
		<div className="w-full h-screen relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/img/news-bg.jpg)' }}>
			<OwlCarousel />
		</div>
	);
}

export default App;
