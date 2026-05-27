import { useNavigate } from "react-router-dom";

type Props = {
	icon: React.ReactNode;
	label: string;
	textClass?: string;
	itemClass?: string;
	linkTo: string;
	onClose: () => void;
};

export default function SettingsMenuItem({
	icon,
	label,
	textClass,
	itemClass,
	linkTo,
	onClose,
}: Props) {
	const navigate = useNavigate();

	const onClick = () => {
		navigate(linkTo);
		onClose();
	};

	return (
		<li className={itemClass || ""}>
			<button
				onClick={onClick}
				className="flex items-center gap-2 px-2 py-3 w-full rounded-md cursor-pointer hover:bg-surface-2"
			>
				{icon}
				<p className={`text-sm ${textClass || "text-text-2"}`}>{label}</p>
			</button>
		</li>
	);
}
