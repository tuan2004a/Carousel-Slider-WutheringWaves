const ShadowInset = () => {
	return (
		<div
			className="absolute bgDark inset-0 z-50 rounded-xl "
			style={{
				background: "radial-gradient(250% 150% at 50% 3%, transparent 47%, #2c2c2c 55%)",
			}}
		/>
	);
};

export default ShadowInset;
