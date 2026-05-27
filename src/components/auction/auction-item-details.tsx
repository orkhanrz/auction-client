type Props = {
	category: string;
	title: string;
	description: string;
};

export default function AuctionItemDetails({
	category,
	title,
	description,
}: Props) {
	return (
		<div>
			<h3 className="text-2xs uppercase text-text-3 font-bold tracking-widest mb-1">
				{category}
			</h3>
			<h2 className="text-text text-2xl font-extrabold mb-2">{title}</h2>
			<p className="text-sm text-text-2 mb-5 leading-6">{description}</p>
		</div>
	);
}
