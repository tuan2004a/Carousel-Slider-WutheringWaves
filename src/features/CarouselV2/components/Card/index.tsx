import { BgColor, BgTheme, Character, ShadowInset } from "./index";
import type { CharacterProps } from "@/features/CarouselV2/types/CharacterTypes";

const Card = ({ item }: CharacterProps) => {
	return (
		<div  className="item h-100 w-60 rounded-xl duration-250 transition-all ease-in-out ">
			<div className="relative size-full">
				<BgColor item={item} />
				<BgTheme item={item} />
				<Character item={item} />
				<ShadowInset />
			</div>
		</div>
	);
};

export default Card;
