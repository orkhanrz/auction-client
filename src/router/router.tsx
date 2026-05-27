import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuctionDetails from "../pages/auction-details";
import Auctions from "../pages/auctions";
import Home from "../pages/home";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import CreateAuction from "../pages/create-auction";
import Profile from "../pages/profile";

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
			{
				path: "auctions/:auctionId",
				element: <AuctionDetails />,
			},
			{
				path: "signup",
				element: <SignUp />,
			},
			{
				path: "signin",
				element: <SignIn />,
			},
			{
				path: "create-auction",
				element: <CreateAuction />,
			},
			{
				path: "profile",
				element: <Profile />,
			},
		],
	},
]);
