import type { CharacterProps } from "@/features/CarouselV2/types/CharacterTypes";

const Character = ({ item }: CharacterProps) => {

	return (
		<div className={`charName absolute transform-none  pointer-events-none z-40!`}>
			<img className={` object-cover object-center translate-y-15 opacity-100! z-50! -translate-x-1 w-full scale-150`} src={item?.image} />
		</div>
	);
};

export default Character;
