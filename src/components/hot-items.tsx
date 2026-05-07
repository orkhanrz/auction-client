import SonyImg from "../assets/images/sony-headphones.jpg";

type HotItemType = {
  id: number;
  img: string;
  name: string;
  price: number;
  time: string;
};

const items: HotItemType[] = [
  {
    id: 1,
    img: SonyImg,
    name: "Sony WH-1000XM5 Headphones",
    price: 148,
    time: "2h 14m"
  },
  {
    id: 2,
    img: SonyImg,
    name: "Apple iPhone 13 Pro Max",
    price: 999,
    time: "1h 30m"
  },
  {
    id: 3,
    img: SonyImg,
    name: "Samsung Galaxy S21 Ultra",
    price: 899,
    time: "3h 45m"
  },
  {
    id: 4,
    img: SonyImg,
    name: "Dell XPS 13 Laptop",
    price: 1199,
    time: "4h 20m"
  }
];

function HotItem({ img, name, price, time }: HotItemType) {
  return (
    <li className="flex items-center justify-between py-2 border-b border-border last:border-0">
      <div className="flex items-center gap-4">
        <img className="w-9 h-9 object-cover" src={img} alt={name} />
        <div>
          <h3 className="text-xs font-semibold mb-1 text-text">{name}</h3>
          <p className="text-2xs text-text-3">23 buds - {time}</p>
        </div>
      </div>
      <div>
        <p className="text-md font-bold text-lime">${price}</p>
        <p className="text-2xs text-text-3">current</p>
      </div>
    </li>
  );
}

export default function HotItems() {
  return (
    <div>
      <h4 className="text-2xs uppercase text-text-3 font-semibold mb-6">
        Hot right now
      </h4>

      <ul>
        {items.map((item) => (
          <HotItem {...item} />
        ))}
      </ul>
    </div>
  );
}
