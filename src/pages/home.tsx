import { BsArrowRight } from "react-icons/bs";
import AuctionCategories from "../components/auction/auction-categories";
import Auctionitems from "../components/auction/auction-items";
import HotItems from "../components/hot-items";
import StatisticsButton from "../components/statistics-btn";
import Button from "../components/ui/shared/button";
import Container from "../components/ui/shared/container";
import Content from "../components/ui/shared/content";
import { auctionItems, categories } from "../data";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<section className="bg-surface border-b border-b-border">
				<Container>
					<Content className="pt-16 pb-23 flex flex-col items-center gap-16 md:flex-row">
						<div className="flex-1 w-full text-center md:flex-8 md:text-left">
							<div className="border-b border-border">
								<h2 className="uppercase text-xs font-bold tracking-widest text-lime mb-4">
									Live auctions, real deals
								</h2>
								<h1 className="text-5xl text-text font-extrabold tracking-tight mb-5 md:max-w-sm">
									The auction platform that{" "}
									<span className="text-lime">works for you</span>
								</h1>
								<p className="text-text-2 mb-1">
									Buy and sell electronics, appliances, fashion and more.
								</p>
								<p className="text-text-2 mb-8">No fluff, just winning bids.</p>
								<div className="flex justify-center gap-2 mb-10 md:justify-start">
									<Link to="/sell">
										<Button>Start selling</Button>
									</Link>
									<Link to="/auctions">
										<Button variant="secondary">Browse auctions</Button>
									</Link>
								</div>
							</div>
							<div className="flex justify-center gap-8 py-8 md:justify-start">
								<StatisticsButton title="12k+" text="Live auctions" />
								<StatisticsButton title="89k" text="Active bidders" />
								<StatisticsButton title="$2.4M" text="Won this week" />
							</div>
						</div>

						<div className="flex-1 w-full bg-surface-2 rounded-xl p-6 h-min md:flex-4">
							<HotItems />
						</div>
					</Content>
				</Container>
			</section>

			<section className="bg-surface">
				<Container>
					<Content className="py-11 md:px-8">
						<div className="flex justify-between items-center mb-4">
							<div>
								<h4 className="text-xs font-bold uppercase text-text-3 mb-3">
									Marketplace
								</h4>
								<h3 className="text-text text-xl font-extrabold">
									Live auctions
								</h3>
							</div>

							<Link
								to="/auctions"
								className="flex items-center gap-1 text-sm text-text-2 border font-medium border-border px-3 py-1 rounded-md cursor-pointer"
							>
								View all auctions
								<BsArrowRight />
							</Link>
						</div>

						<AuctionCategories categories={categories} />

						<Auctionitems
							items={auctionItems}
							className="xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
						/>
					</Content>
				</Container>
			</section>
		</>
	);
}
