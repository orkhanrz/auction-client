import type { IAuction, ICategory, IFilter } from "./models";

export const categories: ICategory[] = [
	{
		id: 1,
		name: "All",
	},
	{
		id: 2,
		name: "Electronics",
	},
	{
		id: 3,
		name: "Fashion",
	},
	{
		id: 4,
		name: "Home & Garden",
	},
	{
		id: 5,
		name: "Sports",
	},
];

export const auctionItems: IAuction[] = [
	{
		id: 1,
		title: "Sony WH-1000XM4 Wireless Headphones",
		image: "/images/sony-headphones.jpg",
		category: "Electronics",
		currentBid: 148,
		bidsCount: 23,
		timeLeft: "2h 14m",
	},
	{
		id: 2,
		title: "Sony WH-1000XM4 Wireless Headphones",
		image: "/images/sony-headphones.jpg",
		category: "Electronics",
		currentBid: 148,
		bidsCount: 23,
		timeLeft: "2h 14m",
	},
	{
		id: 3,
		title: "Sony WH-1000XM4 Wireless Headphones",
		image: "/images/sony-headphones.jpg",
		category: "Electronics",
		currentBid: 148,
		bidsCount: 23,
		timeLeft: "2h 14m",
	},
	{
		id: 4,
		title: "Sony WH-1000XM4 Wireless Headphones",
		image: "/images/sony-headphones.jpg",
		category: "Electronics",
		currentBid: 148,
		bidsCount: 23,
		timeLeft: "2h 14m",
	},
	{
		id: 5,
		title: "Sony WH-1000XM4 Wireless Headphones",
		image: "/images/sony-headphones.jpg",
		category: "Electronics",
		currentBid: 148,
		bidsCount: 23,
		timeLeft: "2h 14m",
	},
];

export const categoryFilters = [
	{
		label: "Electronics",
		name: "electronics",
	},
	{
		label: "Appliances",
		name: "appliances",
	},
	{
		label: "Fashion",
		name: "fashion",
	},
	{
		label: "Furniture",
		name: "furniture",
	},
	{
		label: "Collectibles",
		name: "collectibles",
	},
];

export const conditionFilters = [
	{
		label: "New",
		name: "new",
	},
	{
		label: "Like new",
		name: "likeNew",
	},
	{
		label: "Good",
		name: "good",
	},
	{
		label: "Fair",
		name: "fair",
	},
];

export const endingFilters: IFilter[] = [
	{
		label: "Withing 1 hour",
		name: "hour",
	},
	{
		label: "Within 24 hours",
		name: "day",
	},
	{
		label: "This week",
		name: "week",
	},
];
