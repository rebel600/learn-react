import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ path: "", element: <Home /> },
				{ path: "about", element: <About /> },
				{ path: "contact", element: <Contact /> },
				{ path: "user/:userid", element: <User /> },
			],
		},
	]);
	return router
};

export default App;