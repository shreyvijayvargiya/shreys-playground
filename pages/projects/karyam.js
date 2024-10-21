import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Modal } from "@mantine/core";
import { useState } from "react";
import Globe from "react-globe.gl";
import colors from "tailwindcss/colors";

const KaryamPage = () => {
	const globeEl = useRef();
	const [opened, setOpened] = useState({
		product: false,
		team: false,
		location: false,
	});

	useEffect(() => {
		gsap.fromTo(
			".karyam-title",
			{ opacity: 0, y: -50 },
			{ opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
		);
	}, []);

	useEffect(() => {
		const globe = globeEl.current;
		if (globe) {
			globe.pointOfView({ lat: 27.57103, lng: 76.61141, altitude: 1.5 }, 2000);
		}
	}, []);

	return (
		<div
			className="relative flex flex-col justify-center items-center min-h-screen text-center space-y-6"
			style={{
				opacity: opened.product || opened.team ? 90 : 100,
			}}
		>
			<h1 className="karyam-title text-7xl font-bold font-mono">Karyam</h1>

			<p className="text-xl md:text-xl text-gray-700">
				We build websites and mobile apps
			</p>

			<button className="bg-gray-900 text-white py-2 px-6 mt-4 rounded-md hover:bg-gray-800 transition duration-300">
				Contact Us
			</button>

			<div className="fixed bottom-4 left-0 right-0 w-96 mx-auto flex justify-center items-center gap-4">
				<button
					onClick={() => setOpened({ ...opened, product: true })}
					className="text-gray-700 hover:underline"
				>
					Product
				</button>
				<button
					onClick={() => setOpened({ ...opened, team: true })}
					className="text-gray-700 hover:underline"
				>
					Team
				</button>
				<button
					onClick={() => setOpened({ ...opened, location: true })}
					className="text-gray-700 hover:underline"
				>
					Location
				</button>
			</div>

			<Modal
				opened={opened.product}
				onClose={() => setOpened({ ...opened, product: false })}
				title="Our products"
				classNames={{
					modal:
						"shadow-none bg-gray-50 bg-opacity-10 rounded-2xl text-white p-5",
					root: "bg-gray-100 bg-opacity-10",
					close: "hidden",
				}}
				centered
			>
				<div className="">
					<img
						src="https://ihatereading.in/logo.png"
						className="w-20 h-20 rounded-full"
					/>
					<div className="p-2">
						<p className="text-xl">iHateReading</p>
						<p className="font-serif">
							Learn and build products with effective reading
						</p>
						<a href="https://ihatereading.in" target="_blank" rel="karyam.co">
							Website
						</a>
					</div>
				</div>
			</Modal>

			<Modal
				opened={opened.team}
				onClose={() => setOpened({ ...opened, team: false })}
				title="Meet the Team"
				centered
				classNames={{
					modal:
						"shadow-none bg-gray-50 bg-opacity-10 rounded-2xl text-white p-5",
					root: "bg-gray-100 bg-opacity-10",
					close: "hidden",
				}}
			>
				<div>
					<div className="my-8">
						<div className="flex justify-start items-center gap-10 flex-wrap">
							<div className="group hover:p-8 transition-all duration-150 ease-in rounded-md p-5 ">
								<img
									src="https://ihatereading.in/company/shrey-avatar.jpeg"
									className="w-20 h-20 rounded-full"
								/>
								<a
									href="https://www.linkedin.com/in/shrey-vijayvargiya-b62a3a105/"
									target="_blank"
									className="text-sm"
								>
									LinkedIn
								</a>
								<p className="font-semibold mb-0">Shrey Vijayvargiya</p>
								<span>Founder</span>{" "}
							</div>
							<div className="group hover:p-8 transition-all duration-150 ease-in rounded-md p-5 ">
								<img
									src="https://ihatereading.in/company/mayank-avatar.jpeg"
									className="w-20 h-20 rounded-full"
								/>
								<a
									href="https://www.linkedin.com/in/mayank-modi-209b56177/"
									target="_blank"
									className="text-sm"
								>
									LinkedIn
								</a>
								<p className="font-semibold mb-0">Mayank Modi</p>
								<span>Co-founder</span>
							</div>
						</div>
					</div>
				</div>
			</Modal>
			<Modal
				opened={opened.location}
				onClose={() => setOpened({ ...opened, location: false })}
				title="Our office"
				centered
				classNames={{
					modal:
						"shadow-none bg-gray-50 bg-opacity-10 rounded-2xl text-white p-5",
					root: "bg-gray-100 bg-opacity-10",
					close: "hidden",
				}}
			>
				<div>
					<div className="my-10 w-full flex justify-center text-white">
						<Globe
							ref={globeEl}
							globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
							backgroundColor="rgba(0,0,0,0)"
							showAtmosphere={true}
							animateIn={true}
							height={380}
							pointLabel={["Our office <br /> Kota, Rajasthan, India"]}
							pointsData={[{ lat: 27.57103, lng: 76.61141 }]}
							pointColor={() => colors.green[600]}
							pointAltitude={0.2}
							pointRadius={0.4}
						/>
					</div>
					<p>Kota, Rajasthan</p>
					<p>India</p>
					<p className="text-xs">324008</p>
				</div>
			</Modal>
		</div>
	);
};

export default KaryamPage;
