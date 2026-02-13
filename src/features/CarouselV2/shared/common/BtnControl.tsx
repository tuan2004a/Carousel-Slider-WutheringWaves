import type { ButtonHTMLAttributes } from "react";

interface BtnControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isPrev?: boolean;
}

const BtnControl = ({ isPrev, className = "", ...rest }: BtnControlProps) => {
	return (
		<button
			{...rest}
			className={`absolute z-50 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
				isPrev ? "left-4" : "right-4"
			} ${className}`}
		>
			{isPrev ? "←" : "→"}
		</button>
	);
};

export default BtnControl;
