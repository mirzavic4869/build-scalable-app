import { useState } from "react";

const User = ({ name, send }) => {
	const sendToParent = () => {
		send("Brachio");
	};
	return (
		<>
			<p>My name is {name}</p>
			<button className="bg-slate-800 px-4 py-2 rounded-lg text-white" onClick={sendToParent}>
				Get Name from Child
			</button>
		</>
	);
};

export default function Home() {
	const [state, setState] = useState("Bronto");

	const handleChange = () => {
		setState("T-Rex");
	};

	const getName = (name) => {
		setState(name);
	};

	return (
		<>
			<div className="p-24">
				<User name={state} send={getName} />
				<button className="bg-slate-800 px-4 py-2 rounded-lg text-white" onClick={handleChange}>
					Click Me!
				</button>
			</div>
		</>
	);
}
