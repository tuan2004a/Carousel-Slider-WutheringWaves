import type { ButtonHTMLAttributes } from "react";

interface BtnControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isPrev?: boolean;
}

const BtnControl = ({ isPrev, className = "", ...rest }: BtnControlProps) => {
	return (
		<button {...rest} className={`absolute z-50 text-white size-10 rounded-full cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${isPrev ? "left-4" : "right-4"} ${className}`}>
			<img 
				src="/img/BtnArrrow.png" 
				alt={isPrev ? "Previous" : "Next"} 
				className={`size-5 object-contain ${isPrev ? "rotate-180" : ""}`}
			/>
		</button>
	);
};

export default BtnControl;
