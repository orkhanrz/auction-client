import { IoKey } from "react-icons/io5";
import { RiAuctionFill } from "react-icons/ri";
import SettingsMenuItem from "./settings-menu-item";

export default function SettingsMenu() {
  return (
    <div className="w-56 absolute top-12 right-0 border border-border bg-accent-inv rounded-xl shadow-md">
      <h3 className="text-sm font-medium text-text-2 border-b border-border px-4 py-2">
        Hello, visitor
      </h3>

      <ul className="p-2">
        <SettingsMenuItem
          icon={<IoKey className="text-text" />}
          label="Sign in / Sign up"
          textClass="font-bold text-lime"
          iconClass="text-lime"
        />
        <SettingsMenuItem
          icon={<RiAuctionFill className="text-text" />}
          label="All Auctions"
        />
      </ul>
    </div>
  );
}
