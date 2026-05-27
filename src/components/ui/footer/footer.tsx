import Container from "../shared/container";
import Content from "../shared/content";
import FooterColumn from "./footer-column";

const footerColumns = {
	MarketPlace: [
		{ name: "Browse auctions", href: "#" },
		{ name: "Ending soon", href: "#" },
		{ name: "New listings", href: "#" },
		{ name: "Featured items", href: "#" },
	],
	Sellers: [
		{ name: "Start selling", href: "#" },
		{ name: "Seller guide", href: "#" },
		{ name: "Fees & pricing", href: "#" },
		{ name: "Seller protection", href: "#" },
	],
	Company: [
		{ name: "Help center", href: "#" },
		{ name: "Contact us", href: "#" },
		{ name: "Privacy policy", href: "#" },
		{ name: "Terms of service", href: "#" },
	],
};

export default function Footer() {
	return (
		<footer className="bg-surface border-t border-t-border">
			<Container>
				<Content className="md:px-8">
					<div className="grid grid-cols-16 gap-6 py-10">
						<div className="col-span-8 md:col-span-6">
							<h3 className="text-lg font-extrabold text-text mb-2">
								Bid<span className="text-lime">Vault</span>
							</h3>
							<p className="text-xs text-text-3 font-extralight leading-6 max-w-3/5 lg:max-w-2/5">
								A modern auction marketplace for buying and selling electronics,
								fashion, appliances and more.
							</p>
						</div>

						{Object.keys(footerColumns).map((key) => (
							<FooterColumn
								key={key}
								columnTitle={key}
								links={footerColumns[key as keyof typeof footerColumns]}
								className="col-span-8 md:col-span-3"
							/>
						))}
					</div>

					<div className="flex flex-col items-center justify-between gap-6 py-6 border-t border-border md:flex-row">
						<h4 className="text-xs text-text-3 font-extralight">
							© 2026 BidVault, Inc. All rights reserved.
						</h4>

						<div className="flex items-center gap-4">
							<p className="text-xs text-text-3 font-extralight">SSL Secured</p>
							<p className="text-xs text-text-3 font-extralight">
								Buyer Protection
							</p>
							<p className="text-xs text-text-3 font-extralight">
								24/7 Support
							</p>
						</div>
					</div>
				</Content>
			</Container>
		</footer>
	);
}
