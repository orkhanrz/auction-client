import { FaArrowUp } from "react-icons/fa";
import Img from "../../assets/images/sony-headphones.jpg";
import type { IAuctionBidHistoryItem } from "../../models";

export default function AuctionBidHistoryItem({
	username,
	time,
	price,
}: IAuctionBidHistoryItem) {
	return (
		<div className="flex justify-between items-center py-3 border-b border-b-border">
			<div className="flex items-center gap-2">
				<img src={Img} alt="headphones" className="h-7 w-7 rounded-md" />
				<div>
					<h4 className="text-xs text-text">{username}</h4>
					<p className="text-2xs text-text-3">{time}</p>
				</div>
			</div>

			<p className="flex items-center font-extrabold text-lime text-sm">
				${price} <FaArrowUp />
			</p>
		</div>
	);
}
