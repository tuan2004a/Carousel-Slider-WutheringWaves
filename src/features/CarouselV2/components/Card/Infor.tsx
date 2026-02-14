import type { CharacterProps } from "@/features/CarouselV2/types/CharacterTypes";

const Infor = ({ item }: CharacterProps) => {
	return (
		<div>
			<h1 className={`absolute bottom-3.5 left-1/2 -translate-x-1/2 z-100 text-[27px] font-bold inline-block ${item?.textColor}`}>{item?.name}</h1>
			<img className="absolute transition-none bottom-1 left-1/2 -translate-x-1/2 opacity-50 z-90 scale-150 w-23 object-cover object-center" src="/img/logo.png" />
		</div>
	);
};

export default Infor;
