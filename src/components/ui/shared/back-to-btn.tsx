import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {
	label: string;
	to: string;
};

export default function BackToBtn({ label, to }: Props) {
	return (
		<Link
			to={to}
			className="text-xs text-text-3 flex items-center gap-1 mb-6 cursor-pointer"
		>
			<BsArrowLeft /> {label}
		</Link>
	);
}
