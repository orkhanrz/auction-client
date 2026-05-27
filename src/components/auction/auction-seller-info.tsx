import { BiCheck } from "react-icons/bi";
import Img from "../../assets/images/sony-headphones.jpg";

type Props = {
	username: string;
	rating: number;
	isVerified?: boolean;
	isTrusted?: boolean;
};

export default function AuctionSellerInfo({
	username,
	rating,
	isVerified,
	isTrusted,
}: Props) {
	return (
		<div className="seller-info flex items-center justify-between py-3.5 px-3 bg-surface-2 rounded-lg border border-border mb-5">
			<div className="flex items-center gap-2">
				<img
					src={Img}
					alt="headphones"
					className="w-8 h-8 object-cover rounded-md"
				/>

				<div>
					<h4 className="text-sm text-text font-bold">{username}</h4>
					<p className="text-2xs text-text-3">
						★ {rating} {isVerified ? "· Verified seller" : ""}
					</p>
				</div>
			</div>

			{isTrusted && (
				<p className="flex items-center text-xs text-green font-bold">
					<BiCheck /> Trusted
				</p>
			)}
		</div>
	);
}
