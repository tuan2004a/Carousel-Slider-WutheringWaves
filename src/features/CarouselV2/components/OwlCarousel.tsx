import { Card } from "./Card/index";
import useFetch from "../queries/useFetch";
import { useOwlCarousel } from "../shared/ui/Slider";
import BtnControl from "../shared/common/BtnControl";
import "../shared/style/Carouse.css";

const OwlCarousel = () => {
	const { data } = useFetch();

	const { active, handleNext, handlePrev, itemRefs } = useOwlCarousel(data);

	return (
		<div className="flex items-center justify-center size-full relative overflow-hidden ">
			{data?.map((item, index) => (
				<div
					key={item.id}
					ref={(el) => {
						itemRefs.current[index] = el;
					}}
					style={{ transition: "all 0.5s ease" }}
					className="absolute"
				>
					<Card item={item} />
				</div>
			))}

			<BtnControl onClick={handlePrev} disabled={active === 0} isPrev />
			<BtnControl onClick={handleNext} disabled={active === (data?.length || 0) - 1} />
		</div>
	);
};

export default OwlCarousel;
