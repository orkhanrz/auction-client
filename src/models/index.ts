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

export interface IFilter {
	label: string;
	name: string;
}
