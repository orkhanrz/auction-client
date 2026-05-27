import { BsArrowRight } from "react-icons/bs";
import { FcFolder } from "react-icons/fc";
import CreateAuctionStep from "../components/auction/create-auction-step";
import CreateAuctionStepLabel from "../components/auction/create-auction-step-label";
import BackToBtn from "../components/ui/shared/back-to-btn";
import Button from "../components/ui/shared/button";
import Container from "../components/ui/shared/container";
import Content from "../components/ui/shared/content";
import Input from "../components/ui/shared/input";
import Dropdown from "../components/ui/shared/dropdown";
import {
	categoryFilters,
	conditionFilters,
	endingFilters,
	estimatedDelivers,
} from "../data";
import FileInput from "../components/ui/shared/file-input";

export default function CreateAuction() {
	return (
		<div className="bg-surface">
			<Container>
				<Content className="max-w-135 py-11 mx-auto">
					<BackToBtn label="Back" to=".." />

					<h3 className="text-text text-2xl mb-1 font-extrabold">
						List an item
					</h3>

					<p className="text-xs text-text-3 mb-8">
						Most items sell within 24 hours. No seller fees on your first 3
						listings.
					</p>

					<CreateAuctionStep>
						<CreateAuctionStepLabel step={1} label="Photos" textClass="mb-4" />
						<FileInput />
					</CreateAuctionStep>

					<CreateAuctionStep>
						<CreateAuctionStepLabel step={2} label="Item details" />

						<Input
							label="Title *"
							placeholder="e.g Sony WH-1000XM5 Headphones"
						/>
						<Dropdown
							name="category"
							label="Category *"
							placeholder="Select category"
							options={categoryFilters}
						/>
						<Input
							label="Description *"
							placeholder="Condition, what's included, any defects..."
						/>
						<Dropdown
							name="condition"
							label="Condition"
							placeholder="Select condition"
							options={conditionFilters}
						/>
					</CreateAuctionStep>

					<CreateAuctionStep>
						<CreateAuctionStepLabel step={3} label="Auction settings" />

						<div className="flex gap-3">
							<Input
								label="Starting bid ($) *"
								placeholder="0.01"
								className="flex-1"
								type="number"
							/>
							<Input
								label="Reserve price ($) *"
								placeholder="0.01"
								className="flex-1"
								type="number"
							/>
						</div>
						<div className="flex gap-3">
							<Dropdown
								name="duration"
								label="Duration *"
								placeholder="Select duration"
								options={endingFilters}
								className="flex-1"
							/>
							<Input
								label="Bid increment ($) *"
								placeholder="1.00"
								className="flex-1"
								type="number"
							/>
						</div>
					</CreateAuctionStep>

					<CreateAuctionStep>
						<CreateAuctionStepLabel step={4} label="Shipping" />

						<div className="flex gap-3">
							<Input
								label="Shipping cost ($)"
								placeholder="0.01"
								className="flex-1"
								type="number"
							/>
							<Input
								label="Ships from"
								placeholder="Arkansas"
								className="flex-1"
							/>
						</div>

						<Dropdown
							name="estimated_delivery"
							label="Estimated delivery *"
							placeholder="Select estimated delivery"
							options={estimatedDelivers}
						/>
					</CreateAuctionStep>

					<Button
						icon={<BsArrowRight />}
						iconPosition="right"
						type="submit"
						fullWidth
					>
						Launch auction
					</Button>
				</Content>
			</Container>
		</div>
	);
}
