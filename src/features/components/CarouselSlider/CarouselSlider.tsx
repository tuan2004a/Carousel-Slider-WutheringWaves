import Card from "./Card";
import useFetch from "@/features/queries/useFetch";
// import type { Resonators } from "@/features/types/CharacterTypes";

const CarouselSlider = () => {

	const { data } = useFetch();

	return (
		<div className="flex-center size-full duration-200 transition-all ease-in-out">
            <div className="focus-gallery">
				{data?.map((item) =>(
					<Card key={item.id} item={item}/>
				))}
            </div>
		</div>
	);
};

export default CarouselSlider;
