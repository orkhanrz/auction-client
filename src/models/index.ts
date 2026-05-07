export interface IAuctionItem {
  id: number;
  image: string;
  category: string;
  title: string;
  currentBid: number;
  bidsCount: number;
  timeLeft: string;
}
