import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Auctions from "../pages/auctions";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "auctions",
				element: <Auctions />,
			},
		],
	},
]);
