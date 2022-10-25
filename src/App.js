import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./Quiz";
import InfoPage from "./Infopage";
import { Chart } from "./Charts";
import Pass from "./pass";
function App() {
	
return ( 
	<>
	<BrowserRouter>
	<Routes>
		<Route exact path="/" element={<Home/>}/>
		<Route exact path="/about" element={<About/>}/>
		<Route exact path="/Info" element={<InfoPage/>}/>
		<Route exact path="/Chart" element={<Chart/>}/>
		<Route exact path="/Password" element={<Pass/>}/>


	</Routes>
	</BrowserRouter>
	</>
);
}

export default App;
