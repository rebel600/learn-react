import { useState } from "react";
import Button from "./components/Button";

const App = () => {
	const [color, setColor] = useState("olive");
	return (
		<div
			className="w-full h-screen duration-200"
			style={{ backgroundColor: color }}
		>
			<div className="fixed bottom-48 inset-x-0 px-2 mx-12 flex flex-wrap justify-center rounded-lg">
				<div className=" px-3 py-3 flex flex-wrap justify-center bg-white rounded-3xl">
					<Button color={"red"} setColor={setColor} />
					<Button color={"green"} setColor={setColor} />
					<Button color={"blue"} setColor={setColor} />
					<Button color={"yellow"} setColor={setColor} />
					<Button color={"pink"} setColor={setColor} />
					<Button color={"orange"} setColor={setColor} />
					<Button color={"black"} setColor={setColor} />
					<Button color={"white"} setColor={setColor} />
				</div>
			</div>
		</div>
	);
};

export default App;
