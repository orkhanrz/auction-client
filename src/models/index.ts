export interface ICategory {
	id: number;
	name: string;
}

export interface IAuction {
	id: number;
	image: string;
	category: string;
	title: string;
	currentBid: number;
	bidsCount: number;
	timeLeft: string;
}

export interface IOption {
	label: string;
	value: string;
}

export interface IAuctionBidHistoryItem {
	username: string;
	time: string;
	price: number;
}
