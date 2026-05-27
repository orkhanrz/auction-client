import Button from "../ui/shared/button";

type Props = {
	currentBid: number;
	numberOfBids: number;
	timeLeft: string;
	watchers: number;
	increment: number;
};

export default function AuctionCurrentBid({
	currentBid,
	numberOfBids,
	timeLeft,
	watchers,
	increment,
}: Props) {
	const minimumBid = currentBid + increment;

	return (
		<div className="bid-info border border-border rounded-xl p-5">
			<h3 className="text-2xs uppercase text-text-3 font-bold mb-3">
				Current bid
			</h3>

			<h2 className="text-4xl text-lime font-black mb-3">${currentBid}</h2>

			<div className="flex gap-1 text-sm text-text-3 mb-3">
				<p>{numberOfBids}</p>
				<p>
					Ends in <span>{timeLeft}</span>
				</p>
			</div>

			<div className="bg-surface-2 px-4 py-3 rounded-lg border-border-2 mb-4">
				<div className="flex justify-between items-center mb-1">
					<p className="text-2xs text-text-3 uppercase font-black">Time left</p>
					<p className="text-2xs text-text-3 uppercase font-black">Watchers</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="text-md text-text font-black">{timeLeft}</p>
					<p className="text-md text-text font-black">{watchers}</p>
				</div>
			</div>

			<div className="flex justify-between gap-2 mb-2">
				<input
					type="text"
					placeholder={`Enter ${minimumBid} or more`}
					className="text-sm text-text bg-surface-2 outline-0 w-full px-4 rounded-lg border-border"
				/>
				<Button
					style={{
						minWidth: "max-content",
						fontSize: "12px",
						fontWeight: "bolder",
					}}
				>
					Bid now
				</Button>
			</div>

			<p className="text-2xs text-text-3">
				Minimum bid: ${minimumBid} Increment: ${increment}
			</p>
		</div>
	);
}
