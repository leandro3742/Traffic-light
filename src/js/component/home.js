import React, { useState } from "react";

//create your first component
export function Home() {
	let rojoOff = "#CB4444";
	let amarilloOff = "#D5DF37";
	let verdeOff = "#37DF3C";

	const [rojo, SetRojo] = useState(rojoOff);
	const [amarillo, SetAmarillo] = useState(amarilloOff);
	const [verde, SetVerde] = useState(verdeOff);

	const botonRojo = {
		width: "50px",
		height: "50px",
		backgroundColor: rojo,
		borderRadius: "100%",
		marginTop: "10px",
		marginBottom: "10px"
	};

	const botonAmarillo = {
		width: "50px",
		height: "50px",
		backgroundColor: amarillo,
		borderRadius: "100%",
		marginTop: "10px",
		marginBottom: "10px"
	};

	const botonVerde = {
		width: "50px",
		height: "50px",
		backgroundColor: verde,
		borderRadius: "100%",
		marginTop: "10px",
		marginBottom: "10px"
	};

	const prender_rojo = () => {
		SetRojo("red");
		SetAmarillo(amarilloOff);
		SetVerde(verdeOff);
	};
	const prender_amarillo = () => {
		SetAmarillo("yellow");
		SetRojo(rojoOff);
		SetVerde(verdeOff);
	};
	const prender_verde = () => {
		SetVerde("green");
		SetAmarillo(amarilloOff);
		SetRojo(rojoOff);
	};

	return (
		<div className="d-flex justify-content-center">
			<div className="bg-dark col-1 mt-5 rounded d-flex flex-column align-items-center justify-content-center">
				<button style={botonRojo} onClick={prender_rojo} />
				<button style={botonAmarillo} onClick={prender_amarillo} />
				<button style={botonVerde} onClick={prender_verde} />
			</div>
		</div>
	);
}
