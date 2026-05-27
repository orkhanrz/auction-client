import AuctionBidHistory from "../components/auction/auction-bid-history";
import AuctionCurrentBid from "../components/auction/auction-current-bid";
import AuctionImageDetails from "../components/auction/auction-image-details";
import AuctionItemDetails from "../components/auction/auction-item-details";
import AuctionSellerInfo from "../components/auction/auction-seller-info";
import BackToBtn from "../components/ui/shared/back-to-btn";
import Container from "../components/ui/shared/container";
import Content from "../components/ui/shared/content";
import { auctionBidHistoryItems } from "../data";

export default function AuctionDetails() {
	return (
		<div className="bg-surface">
			<Container>
				<Content className="py-10 lg:px-22">
					<BackToBtn label="Back to home" to="/" />

					<div className="block lg:flex gap-10 mb-8">
						<div className="flex-1 mb-10">
							<AuctionImageDetails />
						</div>

						<div className="flex-1">
							<AuctionItemDetails
								category="Electronics"
								title="Sony WH-1000XM5 Headphones"
								description="Industry-leading noise cancelling. Barely used, 4 months old.
								All original accessories included."
							/>

							<AuctionSellerInfo
								username="techseller_mk"
								rating={4.9}
								isVerified
								isTrusted
							/>

							<AuctionCurrentBid
								currentBid={148}
								numberOfBids={23}
								timeLeft="2h 14m"
								increment={5}
								watchers={32}
							/>
						</div>
					</div>

					<AuctionBidHistory items={auctionBidHistoryItems} />
				</Content>
			</Container>
		</div>
	);
}
