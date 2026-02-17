import { BgColor, BgTheme, Character, ShadowInset, Infor } from "./index";
import * as React from "react";
import type { CharacterProps } from "../../types/CharacterTypes.ts";

const Card = ({ item }: CharacterProps) => {
	void React;
	return (
		<div
			className={` item h-100 w-60 rounded-xl duration-250 transition-all ease-in-out relative`}
			style={
				{
					["--border-before"]: "#3b82f6",
					["--border-after"]: "#ef4444",
				} as React.CSSProperties
			}
		>
			<div className="relative size-full">
				<BgColor item={item} />
				<BgTheme item={item} />
				<Character item={item} />
				<ShadowInset />
				<Infor item={item} />
			</div>
		</div>
	);
};

export default Card;
