import gsap from "gsap";
import { useEffect, useState } from "react";

const BreathingBackyard = () => {
	const images = [
		"/clothes/img-1.JPG",
		"/clothes/img-2.JPG",
		"/clothes/img-3.JPG",
		"/clothes/img-4.JPG",
		"/clothes/img-5.JPG",
		"/clothes/img-6.JPG",
		"/clothes/img-7.JPG",
		"/clothes/img-8.JPG",
		"/clothes/img-9.JPG",
		"/clothes/img-10.JPG",
	];

	const [index, setIndex] = useState(0);

	const tl = gsap.timeline();

	useEffect(() => {
		tl.fromTo(
			".img-container",
			{
				opacity: 0,
				scale: 0.98,
				x: index * 120 - 100,
				width: (index + 1) * 10 - 10 + "%",
			},
			{
				opacity: 1,
				scale: 1,
				x: index * 120 - 50,
				width: (index + 1) * 10 + "%",
				duration: 0.5,
			}
		).fromTo(
			".backyard",
			{
				opacity: 0,
				scale: 0.98,
				x: index * 120 - 10,
				filter: "blur(4px)",
				color: "gray",
			},
			{
				opacity: 1,
				x: index * 120 + 20,
				scale: 1,
				filter: "blur(0px)",
				color: "black",
				duration: 1.5,
				ease: "power2.out",
			}
		);

		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 1000);

		return () => clearInterval(interval);
	}, [index, images.length]);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<div className="flex justify-center items-center gap-1 group">
				<div className="img-container bg-white z-20 shadow-xl p-3 border border-gray-200 rounded-xl group-hover:p-8 transition-all duration-100 ease-in">
					<img
						src={images[index]}
						alt="Clothing"
						className="w-full h-full rounded-xl object-contain transition-all duration-100 ease-in"
					/>
				</div>
				<div>
					<p
						className="backyard h-screen border-l border-gray-400 flex jusitfy-center items-center font-mono group-hover:px-2 transition-all duration-100 ease-in"
						style={{
							fontSize: "200px",
						}}
					>
						backyard
					</p>
				</div>
			</div>
		</div>
	);
};

export default BreathingBackyard;
