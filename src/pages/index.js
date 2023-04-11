import { useState } from "react";

const User = ({ name }) => {
	return <p>My name is {name}</p>;
};

export default function Home() {
	const [state, setState] = useState("Bronto");

	const handleChange = () => {
		setState("T-Rex");
	};
	return (
		<>
			<div>
				<User name={state} />
				<button className="bg-slate-800 p-4 rounded-lg text-white" onClick={handleChange}>
					Click Me!
				</button>
			</div>
		</>
	);
}
