import { BsStarFill } from "react-icons/bs";
import Image from "../assets/images/sony-headphones.jpg";

export default function ProfileDetails() {
	return (
		<div className="flex items-center gap-4 border-b border-b-border pb-5 mb-8">
			<img
				src={Image}
				alt="profile-image"
				className="w-15 h-15 rounded-lg object-cover"
			/>

			<div>
				<h3 className="text-2xl text-text font-bold mb-1">Alex Johson</h3>

				<div className="flex items-center gap-2 mb-3">
					<p className="flex items-center text-xs text-text-3 gap-0.5">
						<BsStarFill />
						<span>4.97</span>
					</p>
					<p className="text-xs text-text-3">143 reviews</p>
					<p className="text-xs text-text-3">Member since 2022</p>
				</div>

				<div className="flex items-center gap-6">
					<p className="text-lg text-text font-black">
						28{" "}
						<span className="block text-2xs uppercase text-text-3 font-normal">
							Sold
						</span>
					</p>
					<p className="text-lg text-text font-black">
						14{" "}
						<span className="block text-2xs uppercase text-text-3 font-normal">
							Active bids
						</span>
					</p>
					<p className="text-lg text-text font-black">
						6{" "}
						<span className="block text-2xs uppercase text-text-3 font-normal">
							Won
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
