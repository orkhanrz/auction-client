import Img from "../../assets/images/sony-headphones.jpg";

export default function AuctionImages() {
	return (
		<div className="images flex gap-2 overflow-x-scroll">
			<img
				src={Img}
				alt="headphones"
				className="w-16 h-16 object-cover rounded-lg cursor-pointer border-2 border-lime"
			/>
			<img
				src={Img}
				alt="headphones"
				className="w-16 h-16 object-cover rounded-lg cursor-pointer"
			/>
			<img
				src={Img}
				alt="headphones"
				className="w-16 h-16 object-cover rounded-lg cursor-pointer"
			/>
			<img
				src={Img}
				alt="headphones"
				className="w-16 h-16 object-cover rounded-lg cursor-pointer"
			/>
			<img
				src={Img}
				alt="headphones"
				className="w-16 h-16 object-cover rounded-lg cursor-pointer"
			/>
		</div>
	);
}
