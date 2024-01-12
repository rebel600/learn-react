import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/Layout";
import { About, Contact, Github, Home, User } from "./components/index.js";
import { gitHubInfo } from "./services/gitHub.js";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="github" element={<Github />} loader={gitHubInfo} />
			<Route path="user/:userid" element={<User />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
