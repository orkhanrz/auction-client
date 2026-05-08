import type { IAuctionItem } from "../../models";
import AuctionItem from "./auction-item";

type Props = {
	items: IAuctionItem[];
	className?: string;
};

export default function Auctionitems({ items, className }: Props) {
	return (
		<div className={`grid gap-4 ${className || ""}`}>
			{items.map((item) => (
				<AuctionItem key={item.id} item={item} />
			))}
		</div>
	);
}
