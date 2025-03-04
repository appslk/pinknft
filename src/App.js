import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home";
 
function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>

					<Route path='/' element={<Home />} />
  
				</Routes>
			</BrowserRouter>
			<div>
		

			</div>
		</div>




	)
}


export default App;
