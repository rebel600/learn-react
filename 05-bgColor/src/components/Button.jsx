const Button = ({ color = "yellow", setColor }) => {
	return (
		<button
			onClick={() => setColor(color)}
			style={{ backgroundColor: color }}
			className={`font-bold ${
				color === "white" ? "text-black" : "text-white"
			}  border shadow-lg border-black rounded-xl p-3 m-3`}
		>
			{color}
		</button>
	);
};

export default Button;
