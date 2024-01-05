import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const coffeeLogo = `https://png.pngtree.com/template/20190323/ourmid/pngtree-coffee-logo-design-image_82183.jpg`;

function App() {
	const [counter, setCounter] = useState(0);

	const incrementCounter = () => {
		if (counter < 20) setCounter((pre) => pre + 1);
	};

	const decrementCounter = () => {
		if (counter > 0) setCounter((pre) => pre - 1);
		else setCounter((pre) => pre * 0);
	};

	return (
		<>
			<div>
				<a href="https://www.buymeacoffee.com" target="_blank">
					<img src={coffeeLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Coffe With React</h1>
			<h2>Counter value: {counter}</h2>

			<button onClick={incrementCounter}>Increment</button>
			<button onClick={decrementCounter}>Decrement</button>
		</>
	);
}

export default App;
