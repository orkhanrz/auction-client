import { Outlet } from "react-router-dom";
import Footer from "./components/ui/footer/footer";
import Header from "./components/ui/header/header";

export default function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
