import { BsArrowRight } from "react-icons/bs";
import Img from "../../assets/images/sony-headphones.jpg";
import type { IAuctionItem } from "../../models";
import AuctionImageBadge from "./auction-image-badge";

export default function AuctionItem({ item }: { item: IAuctionItem }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border cursor-pointer">
      <div className="image-wrapper relative">
        <img src={Img} alt="Auction Item" className="w-full object-cover" />
        <AuctionImageBadge
          title="HOT"
          className="top-2 left-2 text-green-700 bg-green-100"
        />
        <AuctionImageBadge
          title="ENDING"
          className="top-2 right-2 text-red-500 bg-red-100"
        />
        <AuctionImageBadge
          title="2h 14m"
          className="bottom-2 right-2 text-gray-600 bg-gray-200"
        />
      </div>

      <div className="p-4 bg-accent-inv">
        <h3 className="text-2xs font-bold text-text-3 uppercase mb-1">
          {item.category}
        </h3>
        <h2 className="text-xs text-text font-semibold mb-3">{item.title}</h2>
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-3xs text-text-3">Current bid</p>
            <p className="font-extrabold text-text">${item.currentBid}</p>
          </div>
          <p className="text-3xs text-text-3">{item.bidsCount} bids</p>
        </div>
        <button className="flex text-text text-xs font-bold p-2 border border-border rounded-md w-full justify-center items-center gap-1 bg-surface-2">
          Place bid <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
