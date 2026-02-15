import type { ButtonHTMLAttributes } from "react";

interface BtnControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isPrev?: boolean;
}

const BtnControl = ({ isPrev, className = "", ...rest }: BtnControlProps) => {
	return (
		<button {...rest} className={`absolute bg-white z-50 shadow-[-10px_-10px_30px_4px_rgba(162,162,162,0.25),10px_10px_30px_4px_rgba(135,105,194,0.5)] text-white size-12 rounded-full cursor-pointer disabled:opacity-35 disabled:shadow-none disabled:cursor-not-allowed flex items-center justify-center ${isPrev ? "left-4" : "right-4"} ${className}`}>
			<img src="/img/BtnArrrow.png" alt={isPrev ? "Previous" : "Next"} className={`size-5 object-contain ${isPrev ? "rotate-180" : ""}`} />
		</button>
	);
};

export default BtnControl;
