type Props = {
	step: number;
	label: string;
	textClass?: string;
};

export default function CreateAuctionStepLabel({
	step,
	label,
	textClass,
}: Props) {
	return (
		<h4
			className={`text-sm text-text font-semibold flex items-center gap-1.5 ${textClass || ""}`}
		>
			<span className="text-2xs rounded-sm bg-accent text-accent-inv w-5 h-5 flex justify-center items-center">
				{step}
			</span>{" "}
			{label}
		</h4>
	);
}
