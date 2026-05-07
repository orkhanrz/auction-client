import type { IAuctionItem } from "../../models";
import AuctionItem from "./auction-item";

export default function Auctionitems({ items }: { items: IAuctionItem[] }) {
  return (
    <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {items.map((item) => (
        <AuctionItem key={item.id} item={item} />
      ))}
    </div>
  );
}
