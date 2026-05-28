import AuctionItems from "../components/auction/auction-items";
import FilterCategory from "../components/filter-category";
import Container from "../components/ui/shared/container";
import Content from "../components/ui/shared/content";
import Dropdown from "../components/ui/shared/dropdown";
import {
	auctionItems,
	categoryFilters,
	categoryOptions,
	conditionFilters,
	conditionOptions,
	endingFilters,
	endingOptions,
} from "../data";

export default function Auctions() {
	return (
		<div className="bg-surface">
			<Container>
				<Content className="py-12 md:px-8">
					<div className="flex justify-between items-start mb-8">
						<div>
							<h3 className="text-text text-2xl font-black mb-2">
								All Auctions
							</h3>
							<p className="text-sm text-text-3">Showing 12 live listings</p>
						</div>

						<Dropdown
							name="sort_by"
							options={categoryOptions}
							placeholder="Sort by"
						/>
					</div>

					<div className="flex flex-col gap-6 sm:flex-row ">
						<div className="flex-2 border border-border h-min rounded-xl p-5 bg-surface">
							<h4 className="text-xs text-text-3 font-bold uppercase mb-4 tracking-wider ">
								Filters
							</h4>

							<FilterCategory
								title="Category"
								items={categoryFilters}
								className="mb-8"
							/>
							<FilterCategory
								title="Condition"
								items={conditionFilters}
								className="mb-8"
							/>
							<FilterCategory title="Ending" items={endingFilters} />
						</div>
						<div className="flex-10">
							<p className="text-xs text-text-3 mb-4">12 auctions found</p>

							<AuctionItems
								items={auctionItems}
								className="xs:grid-cols-1 sm:grid-cols-2"
							/>
						</div>
					</div>
				</Content>
			</Container>
		</div>
	);
}
