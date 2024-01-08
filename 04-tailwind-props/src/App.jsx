import "./App.css";
import Card from "./components/Card";

function App() {
	return (
		<div>
			<h1 className="bg-green-400 text-black rounded-xl p-4 mb-4">Tailwind Props</h1>
      <Card username="coffeeWithCode" btnTxt="Click me!" />
      <Card username="coffeeWithCode" />
		</div>
	);
}

export default App;
