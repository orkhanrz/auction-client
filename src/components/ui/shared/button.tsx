import type React from "react";

type Props = {
	children: React.ReactNode;
	icon?: React.ReactNode;
	iconPosition?: "left" | "right";
	style?: React.CSSProperties;
	type?: "button" | "submit" | "reset";
	fullWidth?: boolean;
	variant?: "primary" | "secondary" | "tertiary";
};

export default function Button({
	children,
	icon,
	iconPosition = "left",
	style,
	fullWidth = false,
	variant = "primary",
}: Props) {
	const btnClasses = `${
		variant === "primary"
			? "bg-topbar-bg border-topbar-bg"
			: variant === "secondary"
				? "bg-surface border-border-2"
				: "bg-surface-2 border-border-2"
	}  ${fullWidth ? "w-full" : ""}`;

	const textClr = `${variant === "primary" ? "text-accent-inv" : "text-text"}`;

	return (
		<button
			className={`${textClr} ${btnClasses} flex items-center justify-center gap-1 border rounded-lg text-sm font-semibold py-2.5 px-7 cursor-pointer`}
			style={style}
		>
			{icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
			{children}
			{icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
		</button>
	);
}
