import React, { } from 'react';

interface BtnArrow {
	children: React.ReactNode;
	onClick: () => void;
	className: string;
}

const BtnArrow: React.FC<BtnArrow> = ({ children, onClick, className }) => {
	return (
		<button onClick={onClick} className={`absolute -translate-y-1/2 z-20 rounded-full drop-shadow-lg drop-shadow-amber-400 ${className}`}>
			{children}
		</button>
	);
};

export default BtnArrow
