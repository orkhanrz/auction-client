import type { IFilter } from "../models";
import Checkbox from "./ui/shared/checkbox";

type Props = {
	title: string;
	items: IFilter[];
	className?: string;
};

export default function FilterCategory({ title, items, className }: Props) {
	return (
		<div className={className || ""}>
			<h5 className="text-xs text-text font-bold mb-3">{title}</h5>

			<ul>
				{items.map((item) => (
					<Checkbox label={item.label} name={item.name} />
				))}
			</ul>
		</div>
	);
}
