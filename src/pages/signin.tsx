import { BsArrowRight } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Button from "../components/ui/shared/button";
import Container from "../components/ui/shared/container";
import Content from "../components/ui/shared/content";
import Input from "../components/ui/shared/input";

export default function SignIn() {
	return (
		<div className="bg-surface">
			<Container>
				<Content className="flex justify-center py-12">
					<div className="bg-surface rounded-xl py-9 px-4 sm:px-8 w-sm border border-border">
						<h3 className="text-lg font-extrabold text-text mb-2">
							Bid<span className="text-lime">Vault</span>
						</h3>

						<h4 className="text-xl text-text font-black mb-2">Welcome back</h4>

						<p className="text-text-3 text-xs mb-7">
							Sign in to place bids and track auctions
						</p>

						<Button
							icon={<FcGoogle size={16} />}
							iconPosition="left"
							variant="tertiary"
							style={{ fontSize: "12px" }}
							fullWidth
						>
							Continue with Google
						</Button>

						<div className="flex items-center gap-2 my-4">
							<div className="h-px w-full bg-surface-3"></div>
							<p className="text-xs text-text-3">or</p>
							<div className="h-px w-full bg-surface-3"></div>
						</div>

						<Input
							label="Email address"
							placeholder="you@example.com"
							type="email"
							className="mb-2"
						/>

						<Input
							label="Password"
							placeholder="At least 8 characters"
							type="password"
							className="mb-3"
						/>

						<Button
							type="submit"
							fullWidth
							style={{ marginBottom: "12px", marginTop: "14px" }}
						>
							Sign in
						</Button>

						<p className="text-xs text-text-3 text-center">
							No account?{" "}
							<Link to={"/signup"} className="text-lime font-bold">
								Create one <BsArrowRight className="inline" />
							</Link>
						</p>
					</div>
				</Content>
			</Container>
		</div>
	);
}
