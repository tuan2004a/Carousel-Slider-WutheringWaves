import React from "react";

const Card = () => {
	return (
		<div className="card w-60 h-100 relative rounded-xl duration-250 transition-all ease-in-out  ">
			{/*  */}
			<img className="bgTheme absolute rounded-xl inset-0 shadow-[0px_0px_20px_7px_#00000024]" src="/img/bgTheme.png" alt="" />

			<div className="absolute bgColor z-30 top-0 left-1/2 -translate-x-1/2 w-34.5 h-full bg-linear-to-b from-[#90b9bc] to-[#c5cad0] overflow-hidden"/>

			{/* character image z-40*/}
			<div className="character transform-none pointer-events-none">
				<img className="absolute !z-40 translate-y-13 -translate-x-1 w-full scale-175 " src="/img/Jinhsi.png" alt="" />
			</div>

			<div
				className="absolute bgDark inset-0 z-50 rounded-xl "
				style={{
					background: "radial-gradient(250% 150% at 50% 3%, transparent 47%, #2c2c2c 55%)",
				}}
			/>

			<div>
				<h1 className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-100 text-[30px] font-bold inline-block text-transparent bg-linear-to-t from-[#90b9bc] from-25% to-white to-50% bg-clip-text">Jinhsi</h1>
				<img className="absolute transition-none bottom-[4px] left-1/2 -translate-x-1/2 opacity-30 z-90 scale-150 w-23 object-cover object-center" src="/img/logo.png" alt="" />
			</div>
		</div>
	);
};

export default Card;
