import AuctionItems from "../components/auction/auction-items";
import ProfileDetails from "../components/profile-details";
import BackToBtn from "../components/ui/shared/back-to-btn";
import Container from "../components/ui/shared/container";
import Content from "../components/ui/shared/content";
import { auctionItems } from "../data";

export default function Profile() {
	return (
		<div className="bg-surface">
			<Container>
				<Content className="max-w-214 mx-auto py-9">
					<BackToBtn label="Back" to="../" />

					<ProfileDetails />

					<AuctionItems
						items={auctionItems}
						className="grid-col-1 md:grid-cols-3"
					/>
				</Content>
			</Container>
		</div>
	);
}
