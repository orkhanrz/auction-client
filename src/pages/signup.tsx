import Button from "../components/ui/shared/button";
import Container from "../components/ui/shared/container";
import Content from "../components/ui/shared/content";
import { FcGoogle } from "react-icons/fc";
import Input from "../components/ui/shared/input";
import Checkbox from "../components/ui/shared/checkbox";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function SignUp() {
	return (
		<div className="bg-surface">
			<Container>
				<Content className="flex justify-center py-12">
					<div className="bg-surface rounded-xl py-9 px-4 sm:px-8 w-sm border border-border">
						<h3 className="text-lg font-extrabold text-text mb-2">
							Bid<span className="text-lime">Vault</span>
						</h3>

						<h4 className="text-xl text-text font-black mb-2">
							Create account
						</h4>

						<p className="text-text-3 text-xs mb-7">
							Join 89,000+ bidders and sellers today
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

						<div className="flex gap-3 mb-2">
							<Input label="First name" placeholder="Alex" />
							<Input label="Last name" placeholder="Johnson" />
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

						<Checkbox
							label="I agree to the Terms and Privacy Policy"
							name="agreement"
						/>

						<Button
							type="submit"
							fullWidth
							style={{ marginBottom: "12px", marginTop: "14px" }}
						>
							Create account
						</Button>

						<p className="text-xs text-text-3 text-center">
							Already have an acccount?{" "}
							<Link to={"/signin"} className="text-lime font-bold">
								Sign in <BsArrowRight className="inline" />
							</Link>
						</p>
					</div>
				</Content>
			</Container>
		</div>
	);
}
