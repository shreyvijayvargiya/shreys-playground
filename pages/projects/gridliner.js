import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { CrossIcon } from "lucide-react";

const images = [
	{ id: 1, src: "img-1.jpg" },
	{ id: 2, src: "img-2.jpg" },
	{ id: 3, src: "img-3.jpg" },
	{ id: 4, src: "img-4.jpg" },
	{ id: 5, src: "img-5.jpg" },
	{ id: 6, src: "img-6.jpg" },
	{ id: 7, src: "img-7.jpg" },
	{ id: 8, src: "img-8.jpg" },
	{ id: 9, src: "img-9.jpg" },
	{ id: 10, src: "img-10.jpg" },
	{ id: 11, src: "img-11.jpg" },
	{ id: 12, src: "img-12.jpg" },
	{ id: 13, src: "img-13.jpg" },
	{ id: 14, src: "img-14.jpg" },
	{ id: 15, src: "img-15.jpg" },
	{ id: 16, src: "img-16.jpg" },
	{ id: 17, src: "img-17.jpg" },
	{ id: 18, src: "img-18.jpg" },
];
const gridSize = 36;
const imagePositions = [1, 3, 7, 10, 14, 17, 20, 24, 30, 34, 36];

const Gridliner = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
		tl.to(".grid-container", {
			x: `-=300`,
			delay: 1,
			duration: 20,
			ease: "linear",
		});
	}, []);

	const openModal = (imageSrc) => {
		setSelectedImage(imageSrc);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};

	return (
		<div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
			<div
				className="grid-container grid grid-cols-12 justify-center items-center mx-auto"
				style={{
					opacity: selectedImage ? 0.2 : 1,
				}}
			>
				{Array.from({ length: gridSize }).map((_, idx) => (
					<div
						key={idx}
						className="w-32 h-32 p-1 flex items-center justify-center border boder-gray-200"
					>
						{imagePositions.includes(idx + 1) ? (
							<div
								className="cursor-pointer"
								onClick={() =>
									openModal(
										`/clothes/${images[imagePositions.indexOf(idx + 1)].src}`
									)
								}
							>
								<img
									src={`/clothes/${
										images[imagePositions.indexOf(idx + 1)].src
									}`}
									alt={`Clothes ${idx + 1}`}
									className="w-28 h-28"
								/>
							</div>
						) : null}
					</div>
				))}
			</div>

			<div
				className="fixed inset-0 z-50 h-screen py-4 overflow-scroll"
				style={{
					position: "fixed",
					top: selectedImage ? "50%" : "0%",
					left: "50%",
					minHeight: "80vh",
					width: selectedImage ? "100%" : "0%",
					opacity: selectedImage ? 1 : 0,
					transform: "translate(-50%, -50%)",
					transition: "all 0.5s ease",
				}}
			>
				<div className="relative mx-auto md:w-1/2 sm:w-full xs:w-full xxs:w-full flex flex-col justify-center overflow-scroll items-center gap-4 space-y-2">
					<button
						onClick={closeModal}
						className="bg-gray-50 hover:p-4 transition-all duration-100 ease-in rotate-45 transform w-auto text-black p-2 rounded-full"
					>
						<CrossIcon />
					</button>
					<img
						src={selectedImage}
						alt="Selected"
						className="object-contain max-h-[70vh] w-full h-1/2 rounded-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default Gridliner;
