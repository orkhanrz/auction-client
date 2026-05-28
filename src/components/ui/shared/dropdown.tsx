import type { IDropdownItem } from "../../../models";

type Props = {
	label?: string;
	placeholder?: string;
	className?: string;
	name: string;
	options: IDropdownItem[];
};

export default function Dropdown({
	label,
	placeholder,
	name,
	options,
	className,
}: Props) {
	return (
		<div className={className || ""}>
			{label && (
				<label className="text-xs text-text-2 font-medium">{label}</label>
			)}
			<select
				name={name}
				className={
					"border border-border-2 bg-surface-2 w-full rounded-md py-2 px-2 text-sm mt-1 outline-none text-text"
				}
			>
				{placeholder && <option>{placeholder}</option>}
				{options.map((option) => (
					<option value={option.value} key={option.id}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}
