import type { ReactElement } from "react";
import { FaDoorOpen, FaUser } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { IoKey } from "react-icons/io5";
import { RiAuctionFill } from "react-icons/ri";
import SettingsMenuItem from "./settings-menu-item";

type Props = {
	onClose: () => void;
};

type MenuItem = {
	icon: ReactElement;
	label: string;
	textClass?: string;
	itemClass?: string;
	linkTo: string;
};

const menuItems: { [key: string]: MenuItem[] } = {
	isLoggedOut: [
		{
			icon: <IoKey className="text-text" />,
			label: "Sign in / Sign up",
			textClass: "font-bold text-lime",
			linkTo: "/signin",
		},
		{
			icon: <RiAuctionFill className="text-text" />,
			label: "All Auctions",
			linkTo: "/auctions",
		},
	],
	isLoggedIn: [
		{
			icon: <FaUser className="text-text" />,
			label: "My Profile",
			linkTo: "/profile",
		},
		{
			icon: <IoMdAddCircle className="text-text" />,
			label: "List an item",
			linkTo: "/create-auction",
		},
		{
			icon: <RiAuctionFill className="text-text" />,
			label: "All auctions",
			linkTo: "/auctions",
		},
		{
			icon: <FaDoorOpen className="text-red" />,
			label: "Sign out",
			linkTo: "/sign-out",
			textClass: "text-red",
			itemClass: "border-t border-t-border",
		},
	],
};

export default function SettingsMenu({ onClose }: Props) {
	const isLoggedIn = true;
	const items = isLoggedIn ? menuItems.isLoggedIn : menuItems.isLoggedOut;

	return (
		<div className="w-56 absolute top-11 right-0 border border-border bg-accent-inv rounded-xl shadow-md">
			<h3 className="text-sm font-medium text-text-2 border-b border-border px-4 py-2">
				Hello, visitor
			</h3>

			<ul className="p-2">
				{items.map((item) => (
					<SettingsMenuItem
						label={item.label}
						icon={item.icon}
						linkTo={item.linkTo}
						textClass={item?.textClass || ""}
						itemClass={item?.itemClass || ""}
						onClose={onClose}
					/>
				))}
			</ul>
		</div>
	);
}
