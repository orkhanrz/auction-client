import { BsArrowRight } from "react-icons/bs";
import AuctionCategories from "./components/auction/auction-categories";
import Auctionitems from "./components/auction/auction-items";
import HotItems from "./components/hot-items";
import StatisticsButton from "./components/statistics-btn";
import Button from "./components/ui/button";
import Container from "./components/ui/container";
import Content from "./components/ui/content";
import Footer from "./components/ui/footer/footer";
import Header from "./components/ui/header/header";
import { auctionItems, categories } from "./data";

export default function App() {
  return (
    <>
      <Header />

      <section className="bg-surface border-b border-b-border">
        <Container>
          <Content className="pt-16 pb-23 flex flex-col items-center gap-16 md:flex-row">
            <div className="flex-1 w-full text-center md:flex-8 md:text-left">
              <div className="border-b border-border">
                <h2 className="uppercase text-xs font-bold tracking-widest text-lime mb-4">
                  Live auctions, real deals
                </h2>
                <h1 className="text-5xl text-text font-extrabold tracking-tight mb-5 md:max-w-sm">
                  The auction platform that{" "}
                  <span className="text-lime">works for you</span>
                </h1>
                <p className="text-text-2 mb-1">
                  Buy and sell electronics, appliances, fashion and more.
                </p>
                <p className="text-text-2 mb-8">No fluff, just winning bids.</p>
                <div className="flex justify-center gap-2 mb-10 md:justify-start">
                  <Button>Start selling</Button>
                  <Button variant="secondary">Browse auctions</Button>
                </div>
              </div>
              <div className="flex justify-center gap-8 py-8 md:justify-start">
                <StatisticsButton title="12k+" text="Live auctions" />
                <StatisticsButton title="89k" text="Active bidders" />
                <StatisticsButton title="$2.4M" text="Won this week" />
              </div>
            </div>

            <div className="flex-1 w-full bg-surface-2 rounded-xl p-6 h-min md:flex-4">
              <HotItems />
            </div>
          </Content>
        </Container>
      </section>

      <section>
        <Container>
          <Content className="py-11 md:px-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="text-xs font-bold uppercase text-text-3 mb-3">
                  Marketplace
                </h4>
                <h3 className="text-xl font-extrabold">Live auctions</h3>
              </div>

              <button className="flex items-center gap-1 text-sm text-text-2 border font-medium border-border px-3 py-1 rounded-md cursor-pointer">
                View all auctions
                <BsArrowRight />
              </button>
            </div>

            <AuctionCategories categories={categories} />

            <Auctionitems items={auctionItems} />
          </Content>
        </Container>
      </section>

      <Footer />
    </>
  );
}
