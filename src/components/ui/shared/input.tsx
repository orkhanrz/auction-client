type Props = {
	label?: string;
	placeholder?: string;
	type?: React.HTMLInputTypeAttribute;
	className?: string;
};

export default function Input({
	label,
	placeholder,
	className,
	type = "text",
}: Props) {
	return (
		<div className={className || ""}>
			{label && (
				<label className="text-xs text-text-2 font-medium">{label}</label>
			)}
			<input
				type={type}
				placeholder={placeholder || ""}
				className="border border-border-2 bg-surface-2 w-full rounded-md py-2 px-3 text-sm mt-1 outline-none text-text"
			/>
		</div>
	);
}
