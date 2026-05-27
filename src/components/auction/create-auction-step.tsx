type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function CreateAuctionStep({ children, className }: Props) {
	return (
		<div
			className={`border border-border rounded-xl p-5 mb-3 bg-accent-inv ${className || ""}`}
		>
			{children}
		</div>
	);
}
