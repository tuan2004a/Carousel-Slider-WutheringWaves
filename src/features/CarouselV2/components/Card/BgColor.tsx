import type { CharacterProps } from "@/features/CarouselV2/types/CharacterTypes";

const BgColor = ({ item }: CharacterProps) => {
	return <div className={`${item?.bgColor} absolute bgColor z-30 top-0 left-1/2 -translate-x-1/2 w-34.5 h-full overflow-hidden`} />;
};

export default BgColor;
