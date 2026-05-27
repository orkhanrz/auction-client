import type { IAuction, ICategory, IOption } from "./models";

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
		value: "electronics",
	},
	{
		label: "Appliances",
		value: "appliances",
	},
	{
		label: "Fashion",
		value: "fashion",
	},
	{
		label: "Furniture",
		value: "furniture",
	},
	{
		label: "Collectibles",
		value: "collectibles",
	},
];

export const conditionFilters = [
	{
		label: "New",
		value: "new",
	},
	{
		label: "Like new",
		value: "likeNew",
	},
	{
		label: "Good",
		value: "good",
	},
	{
		label: "Fair",
		value: "fair",
	},
];

export const endingFilters: IOption[] = [
	{
		label: "1 day",
		value: "1",
	},
	{
		label: "3 days",
		value: "3",
	},
	{
		label: "5 days",
		value: "5",
	},
	{
		label: "7 days",
		value: "7",
	},
];

export const estimatedDelivers = [
	{
		label: "2-3 business day",
		value: "2-3",
	},
	{
		label: "3-5 business day",
		value: "3-5",
	},
	{
		label: "5-7 business day",
		value: "5-7",
	},
	{
		label: "1-2 weeks",
		value: "7-14",
	},
	{
		label: "Local pickup only",
		value: "local",
	},
];

export const auctionBidHistoryItems = [
	{
		id: 1,
		username: "orkhan_rz",
		time: "2h 14m",
		price: 163,
	},
	{
		id: 2,
		username: "tale_agalarov",
		time: "3h 10m",
		price: 158,
	},
	{
		id: 3,
		username: "omar_bayramli",
		time: "4h 10m",
		price: 153,
	},
];
