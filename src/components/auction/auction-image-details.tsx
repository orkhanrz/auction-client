import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Img from "../../assets/images/sony-headphones.jpg";
import AuctionImages from "./auction-images";

export default function AuctionImageDetails() {
	return (
		<>
			<div className="image-wrapper relative rounded-xl overflow-hidden h-75 mb-2">
				<p className="absolute top-4 right-4 bg-surface text-text text-xs px-2 py-0.5 rounded-sm">
					1/5
				</p>

				<img
					src={Img}
					alt="headphones"
					className="w-full h-full object-cover"
				/>

				<div className="controls absolute top-1/2 w-full px-2 -translate-y-1/2 flex justify-between">
					<button className="cursor-pointer bg-surface text-text rounded-md p-1.5">
						<BiChevronLeft />
					</button>
					<button className="cursor-pointer bg-surface text-text rounded-md p-1.5">
						<BiChevronRight />
					</button>
				</div>

				<div className="indexing">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

			<AuctionImages />
		</>
	);
}
