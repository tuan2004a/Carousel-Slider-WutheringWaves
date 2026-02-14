import type { CharacterProps } from "@/features/CarouselV2/types/CharacterTypes";

const BgTheme = ({ }: CharacterProps) => {
	return (
		<div >
			<img className="bgTheme object-cover object-center absolute rounded-xl inset-0 shadow-[0px_0px_20px_7px_#00000024]" src="/img/bgTheme.png" />
		</div>
	);
};

export default BgTheme;
