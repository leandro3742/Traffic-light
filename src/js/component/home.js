import React, { useState } from "react";

//create your first component
export function Home() {
	let rojoOff = "#FF6F6F";
	let amarilloOff = "#FCFC6E";
	let verdeOff = " #8AFC6E";

	const [rojo, SetRojo] = useState(rojoOff);
	const [amarillo, SetAmarillo] = useState(amarilloOff);
	const [verde, SetVerde] = useState(verdeOff);

	const botonRojo = {
		backgroundColor: rojo
	};

	const botonAmarillo = {
		backgroundColor: amarillo
	};

	const botonVerde = {
		backgroundColor: verde
	};

	const prender_rojo = () => {
		SetRojo("red");
		SetAmarillo(amarilloOff);
		SetVerde(verdeOff);
		console.log(rojo);
		if (rojo === rojoOff) {
			console.log("LLega?");
			setTimeout(() => {
				console.log("Y aca?");
				prender_verde();
			}, 3000);
		}
	};
	const prender_amarillo = () => {
		SetAmarillo("yellow");
		SetRojo(rojoOff);
		SetVerde(verdeOff);
		if (amarillo === amarilloOff) {
			console.log("LLega?");
			setTimeout(() => {
				console.log("Y aca?");
				prender_rojo();
			}, 3000);
		}
	};
	const prender_verde = () => {
		SetVerde("green");
		SetAmarillo(amarilloOff);
		SetRojo(rojoOff);
		if (verde === verdeOff) {
			console.log("LLega?");
			setTimeout(() => {
				console.log("Y aca?");
				prender_amarillo();
			}, 3000);
		}
	};

	return (
		<div className="d-flex justify-content-center">
			<div className="bg-dark col-1 mt-5 rounded d-flex flex-column align-items-center justify-content-center">
				<button
					style={botonRojo}
					onClick={prender_rojo}
					className="botones"
				/>
				<button
					style={botonAmarillo}
					onClick={prender_amarillo}
					className="botones"
				/>
				<button
					style={botonVerde}
					onClick={prender_verde}
					className="botones"
				/>
			</div>
		</div>
	);
}
