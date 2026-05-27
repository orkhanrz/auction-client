import { useRef, useState, type ChangeEvent } from "react";
import { FcFolder } from "react-icons/fc";
import { FaCheckSquare } from "react-icons/fa";

export default function FileInput() {
	const inputRef = useRef<HTMLInputElement>(null);
	const [selectedImages, setSelectedImages] = useState<File[] | null>(null);

	const onOpen = () => {
		inputRef.current?.click();
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const images = Array.from(e.target.files || []);

		if (images.length) {
			setSelectedImages(images);
		} else {
			setSelectedImages(null);
		}
	};

	return (
		<div
			className="border border-dotted border-border-2 rounded-lg flex flex-col items-center p-8 cursor-pointer hover:bg-lime-bg hover:border-lime"
			onClick={onOpen}
		>
			{selectedImages ? (
				<FaCheckSquare size={24} className="mb-1.5 text-green-600" />
			) : (
				<FcFolder size={32} className="mb-1.5" />
			)}

			{selectedImages ? (
				<p className="text-sm text-lime font-bold mb-1">
					{selectedImages.length} photos uploaded
				</p>
			) : (
				<p className="text-sm text-text-3 mb-1">
					<span className="text-lime font-bold">Click to upload</span> or drag &
					drop
				</p>
			)}

			<p className="text-xs text-text-3">
				{selectedImages ? "Click to add more" : "JPG or PNG · up to 8 photos"}
			</p>

			<input
				type="file"
				name="photo"
				accept="image/*"
				multiple
				hidden
				ref={inputRef}
				onChange={onChange}
			/>
		</div>
	);
}
