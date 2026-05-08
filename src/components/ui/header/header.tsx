import { Link } from "react-router-dom";
import Container from "../container";
import Content from "../content";
import SearchInput from "./search-input";
import SettingsButton from "./settings/settings-btn";
import ToggleButton from "./toggle";

export default function Header() {
	return (
		<>
			<div className="text-center text-xs font-bold py-2 bg-topbar-bg text-topbar-text tracking-wide">
				Free listing this week — no seller fees on your first 3 items
			</div>

			<header className="bg-accent-inv border-b border-border sticky top-0 z-50">
				<Container>
					<Content className="flex items-center justify-between py-3">
						<div className="flex flex-1 items-center gap-4">
							<Link to="/" className="text-xl font-extrabold text-text">
								Bid<span className="text-lime">Vault</span>
							</Link>

							<SearchInput />
						</div>

						<div className="flex items-center gap-3">
							<ToggleButton />
							<SettingsButton />
						</div>
					</Content>
				</Container>
			</header>
		</>
	);
}
