import Header from "./components/Header";
import Home from "./pages/Home";
import ErrorPage from "./error-page";
import VerVideo from "./pages/VerVideo";
import AddFormulario from "./pages/AddVideo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/add-video" element={<AddFormulario/>} />
				<Route path="/ver" element={<VerVideo/>} />
				<Route path="*" element={<ErrorPage/>} />
			</Routes>
		</Router>
	);
}

export default App;
