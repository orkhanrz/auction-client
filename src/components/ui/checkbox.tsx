import type { IFilter } from "../../models";

export default function Checkbox({ name, label }: IFilter) {
	return (
		<li className="flex gap-2 mb-2.5">
			<input
				type="checkbox"
				id={name}
				name={name}
				className="cursor-pointer accent-lime"
			/>
			<label htmlFor={name} className="text-xs text-text-2">
				{label}
			</label>
		</li>
	);
}
