const ShadowInset = () => {
	return (
	 	<div
			className="absolute bgDark inset-0 z-50 rounded-xl "
			style={{
				background: "radial-gradient(300% 150% at 50% 5%, transparent 50%, #2c2c2c 52%)",
			}}
		/>
	);
};

export default ShadowInset;
