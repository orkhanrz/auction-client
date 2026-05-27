import type { IAuction } from "../../models";
import AuctionItem from "./auction-item";

type Props = {
	items: IAuction[];
	className?: string;
};

export default function AuctionItems({ items, className }: Props) {
	return (
		<div className={`grid gap-4 ${className || ""}`}>
			{items.map((item) => (
				<AuctionItem key={item.id} item={item} />
			))}
		</div>
	);
}
