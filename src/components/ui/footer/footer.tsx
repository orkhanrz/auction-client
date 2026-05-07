import Container from "../container";
import Content from "../content";
import FooterColumn from "./footer-column";

const footerColumns = {
  MarketPlace: [
    { name: "Browse auctions", href: "#" },
    { name: "Ending soon", href: "#" },
    { name: "New listings", href: "#" },
    { name: "Featured items", href: "#" }
  ],
  Sellers: [
    { name: "Start selling", href: "#" },
    { name: "Seller guide", href: "#" },
    { name: "Fees & pricing", href: "#" },
    { name: "Seller protection", href: "#" }
  ],
  Company: [
    { name: "Help center", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "Terms of service", href: "#" }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-surface">
      <Container>
        <Content>
          <div className="flex flex-wrap py-10">
            <div className="flex-6">
              <h3 className="text-lg font-extrabold text-text mb-2">
                Bid<span className="text-lime">Vault</span>
              </h3>
              <p className="text-sm text-text-3 max-w-1/3">
                A modern auction marketplace for buying and selling electronics,
                fashion, appliances and more.
              </p>
            </div>

            {Object.keys(footerColumns).map((key) => (
              <FooterColumn
                key={key}
                columnTitle={key}
                links={footerColumns[key as keyof typeof footerColumns]}
                className="flex-2"
              />
            ))}
          </div>

          <div className="flex items-center justify-between py-6 border-t border-border">
            <h4 className="text-xs text-text-3">
              © 2026 BidVault, Inc. All rights reserved.
            </h4>

            <div className="flex items-center gap-4">
              <p className="text-xs text-text-3">SSL Secured</p>
              <p className="text-xs text-text-3">Buyer Protection</p>
              <p className="text-xs text-text-3">24/7 Support</p>
            </div>
          </div>
        </Content>
      </Container>
    </footer>
  );
}
