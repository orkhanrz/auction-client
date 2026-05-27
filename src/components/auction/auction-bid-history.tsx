import { FaArrowUp } from "react-icons/fa";
import Img from "../../assets/images/sony-headphones.jpg";
import type { IAuctionBidHistoryItem } from "../../models";
import AuctionBidHistoryItem from "./auction-bid-history-item";

type Props = {
	items: IAuctionBidHistoryItem[];
};

export default function AuctionBidHistory({ items }: Props) {
	return (
		<div className="bid-history">
			<h3 className="text-text text-sm font-extrabold mb-4">
				Bid history (2 bids)
			</h3>

			<div>
				{items.map((item) => (
					<AuctionBidHistoryItem
						username={item.username}
						time={item.time}
						price={item.price}
					/>
				))}
			</div>
		</div>
	);
}
