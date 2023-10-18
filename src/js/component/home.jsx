import React from "react";
import { useState } from "react";


const Home = () => {

	const[lightColor,setLightColor] = useState ("");

	return (
		<div className="contenedor">
			<div className="palito"></div>
			<div className="semaforo">
				<div onClick={()=> setLightColor("red")} className={ `  light red ${ lightColor ==="red" ? "glow" : "" }` }></div>
				<div onClick={()=> setLightColor("yellow")} className={`  light yellow ${ lightColor ==="yellow" ? "glow" : "" }`}></div>
				<div onClick={()=> setLightColor("green")} className={ `  light green ${ lightColor ==="green" ? "glow" : "" }`}></div>
			</div>
		</div>
	);
};

export default Home;
