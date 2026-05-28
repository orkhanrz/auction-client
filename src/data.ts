import type {
	IAuction,
	ICategory,
	ICheckboxItem,
	IDropdownItem,
} from "./models";

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

export const categoryOptions: IDropdownItem[] = [
	{
		id: 1,
		label: "Electronics",
		value: "electronics",
	},
	{
		id: 2,
		label: "Appliances",
		value: "appliances",
	},
	{
		id: 3,
		label: "Fashion",
		value: "fashion",
	},
	{
		id: 4,
		label: "Furniture",
		value: "furniture",
	},
	{
		id: 5,
		label: "Collectibles",
		value: "collectibles",
	},
];

export const conditionOptions: IDropdownItem[] = [
	{
		id: 1,
		label: "New",
		value: "new",
	},
	{
		id: 2,
		label: "Like new",
		value: "likeNew",
	},
	{
		id: 3,
		label: "Good",
		value: "good",
	},
	{
		id: 4,
		label: "Fair",
		value: "fair",
	},
];

export const endingOptions: IDropdownItem[] = [
	{
		id: 1,
		label: "1 day",
		value: "1",
	},
	{
		id: 2,
		label: "3 days",
		value: "3",
	},
	{
		id: 3,
		label: "5 days",
		value: "5",
	},
	{
		id: 4,
		label: "7 days",
		value: "7",
	},
];

export const categoryFilters: ICheckboxItem[] = [
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

export const conditionFilters: ICheckboxItem[] = [
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

export const endingFilters: ICheckboxItem[] = [
	{
		label: "1 day",
		name: "1",
	},
	{
		label: "3 days",
		name: "3",
	},
	{
		label: "5 days",
		name: "5",
	},
	{
		label: "7 days",
		name: "7",
	},
];

export const estimatedDelivers = [
	{
		id: 1,
		label: "2-3 business day",
		value: "2-3",
	},
	{
		id: 2,
		label: "3-5 business day",
		value: "3-5",
	},
	{
		id: 3,
		label: "5-7 business day",
		value: "5-7",
	},
	{
		id: 4,
		label: "1-2 weeks",
		value: "7-14",
	},
	{
		id: 5,
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
