import type { Resonators } from "@features/types/CharacterTypes";

interface CardProps {
	item?: Resonators | undefined;
	isCenter?: boolean;
}

const Card = ({ item }: CardProps) => {
	return (
		<div className={`card items w-60! h-100 relative rounded-xl duration-250 transition-all ease-in-out`}>
			{/* bg theme */}
			<img className="bgTheme object-cover object-center absolute rounded-xl inset-0 shadow-[0px_0px_20px_7px_#00000024]" src="/img/bgTheme.png" />

			<div className={`${item?.bgColor} absolute bgColor z-0 top-0 left-1/2 -translate-x-1/2 w-34.5 h-full overflow-hidden`} />

			{/* character image z-40*/}
			<div className={`${item?.class} character transform-none -translate-y-10 pointer-events-none z-60!`}>
				<img className={` object-cover object-center translate-y-25 absolute opacity-100! z-40! -translate-x-1 w-full scale-150`} src={item?.image} />
			</div>

			<div
				className="absolute bgDark inset-0 z-50 rounded-xl "
				style={{
					background: "radial-gradient(250% 150% at 50% 3%, transparent 47%, #2c2c2c 55%)",
				}}
			/>

			<div>
				<h1 className={`absolute bottom-3.5 left-1/2 -translate-x-1/2 z-100 text-[27px] font-bold inline-block ${item?.textColor}`}>{item?.name}</h1>
				<img className="absolute transition-none bottom-1 left-1/2 -translate-x-1/2 opacity-50 z-90 scale-150 w-23 object-cover object-center" src="/img/logo.png" />
			</div>
		</div>
	);
};

export default Card;
