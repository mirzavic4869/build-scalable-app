import React, { useState } from "react";

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

// Conditional Rendering
const Message = ({ result }) => {
	return <div>{result == 20 ? <h1 className="text-teal-500">Jawabanmu Benar</h1> : <h1 className="text-red-600">Maaf, jawabanmu salah</h1>}</div>;

	// if (result) {
	// 	if (result == 20) {
	// 		return <h1 className="text-teal-500">Jawabanmu Benar</h1>;
	// 	} else {
	// 		return <h1 className="text-red-600">Maaf, jawabanmu salah</h1>;
	// 	}
	// } else {
	// 	return <div />;
	// }
};

// Form

export default function Home() {
	const [state, setState] = useState("Bronto");
	const [message, setMessage] = useState("");
	const [result, setResult] = useState(0);
	const [fillForm, setFillForm] = useState("");

	const handleChange = (a) => {
		setState(a);
	};

	const getName = (name) => {
		setState(name);
	};

	const handleAnswer = (e) => {
		setMessage(e.target.value);
	};

	const handleClick = () => {
		setResult(message);
	};

	const handleFormChange = (e) => {
		setFillForm(e.target.value);
	};

	const handleSubmit = () => {
		alert(`Hello ${fillForm}`);
	};

	const fileInput = React.createRef();

	const handleSubmitFile = (e) => {
		e.preventDefault;
		alert(`Name File : ${e.fileInput.currentFile[0].name}`);
	};

	return (
		<>
			<div className="p-24">
				<User name={state} send={getName} />
				<button className="bg-slate-800 px-4 py-2 rounded-lg text-white" onClick={() => handleChange("T-Rex")}>
					Click Me!
				</button>
			</div>
			{/* Conditional Rendering */}
			<div className="p-24">
				<p>Hello Dev, Berapa hasil penjumlahan 10 + 10 ?</p>
				<fieldset>
					<legend>Quiz</legend>
					<input type="number" value={message} onChange={handleAnswer} />
					<button className="bg-slate-800 px-4 py-2 rounded-lg text-white" onClick={handleClick}>
						Answer
					</button>
				</fieldset>
				<Message result={result} />
			</div>
			{/* Form */}
			<div className="p-24">
				<form onSubmit={handleSubmit}>
					<label>
						Name : <input value={fillForm} onChange={handleFormChange} />
					</label>
					<input className="bg-slate-800 px-4 py-2 rounded-lg text-white" type="submit" value="Submit" />
				</form>
				<form onSubmit={handleSubmitFile}>
					<label>
						Pilih file: <input type="file" ref={fileInput} />
					</label>
				</form>
			</div>
		</>
	);
}
