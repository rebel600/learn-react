import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const OldApp = () => {
	const [amount, setAmount] = useState(1);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");
	const [convertedAmount, setConvertedAmount] = useState(0);
	const currency = useCurrencyInfo(from);

	const options = Object.keys(currency);

	const swap = () => {
		setFrom(to);
		setTo(from);
		setConvertedAmount(amount);
		setAmount(convertedAmount);
	};

	const onAmountChange = () => {};
	const onCurrencyChange = () => {};

	console.log(Object.values(currency));
	return (
		<div className="w-full h-screen bg-black">
			<div className="flex flex-col items-center justify-between">
				<h1 className="text-center font-bold text-3xl text-slate-300 mt-4 mb-4">
					Currency Converter!
				</h1>
				{/* label={data} */}
				<InputBox label="From" />
				<button
					onClick={swap}
					className="before:ease relative h-12 w-40 overflow-hidden border border-slate-300 text-slate-300 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-300 hover:text-black hover:shadow-slate-300 hover:before:h-64 hover:before:-translate-y-32"
				>
					<h2 className="relative z-10 font-bold text-2xl">SWAP</h2>
				</button>
				<InputBox label="To" />
			</div>
		</div>
	);
};

export default OldApp;
