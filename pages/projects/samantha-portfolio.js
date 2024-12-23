import { ActionIcon, Avatar, Slider } from "@mantine/core";
import gsap from "gsap";
import { GithubIcon, Laptop2Icon, RssIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import colors from "tailwindcss/colors";

const SamanthaPortfolio = () => {
	const [val, setVal] = useState(Number(0));

	const getColor = () => {
		if (val === 0) return colors.white;
		if (val <= 5) return colors.gray[50];
		if (val <= 10) return colors.gray[100];
		if (val <= 20) return colors.gray[200];
		if (val <= 30) return colors.gray[300];
		if (val <= 40) return colors.gray[400];
		if (val <= 50) return colors.gray[500];
		if (val <= 60) return colors.gray[600];
		if (val <= 60) return colors.gray[700];
		if (val <= 80) return colors.gray[800];
		if (val <= 90) return colors.gray[900];
		if (val <= 100) return colors.black;
		return colors.gray[800];
	};

	useEffect(() => {
		getColor();
	}, [val]);

	return (
		<div className="flex justify-center items-center h-full w-full flex-col bg-whiteBg text-gray-900">
			<div className="md:w-full mx-auto">
				<div>
					<img src="/avatar.png" size="lg" className="w-20 h-20 my-4" />
					<p className="text-left">
						<span
							className="group relative"
							onMouseEnter={() => {
								gsap.fromTo(
									".avatar",
									{ rotate: 180, opacity: 0 },
									{ opacity: 1, rotate: 0 }
								);
							}}
							onMouseLeave={() => {
								gsap.fromTo(
									".avatar",
									{ rotate: 0, opacity: 1 },
									{ opacity: 0, rotate: 45 }
								);
							}}
						>
							<p className="text-4xl font-mono my-4">Samantha </p>
							<div className="text-left">
								<p className="text-md font-serif">
									Samantha is a skilled UI/UX designer who has a keen eye for
									detail and aesthetics. She works closely with developers to
									bring designs to life and is always exploring new design
									trends and tools. Samantha prefers platforms that offer
									customizable and theme-able options, allowing her to ensure
									consistency across various projects.
								</p>
								<p className="text-md font-serif my-2">
									She values clean design, responsive layouts, and accessibility
									in her work. Samantha is also interested in learning more
									about front-end technologies to better collaborate with her
									development team.
								</p>
							</div>
						</span>
					</p>{" "}
				</div>
				<div className="gap-2 my-2">
					<div className="group relative hover:underline cursor-pointer hover:px-6 px-4 duration-100 transition-all ease-in-out hover:bg-gray-100 hover:text-white border-t border-b border-gray-200 hover:rounded-xl py-2 gap-2 flex justify-start items-center">
						<span className="cursor-pointer w-4 h-4 transition-all duration-100">
							<svg
								role="img"
								viewBox="0 0 24 24"
								fill={colors.indigo[600]}
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>X</title>
								<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
							</svg>
						</span>
						<a className="text-indigo-500 hover:underline">Twitter</a>
					</div>
					<span className="group cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-gray-100 border-t border-b my-2 border-gray-200 py-2 gap-1 flex justify-start items-center">
						<span className="cursor-pointer transition-all duration-100">
							<GithubIcon color={colors.pink[600]} size={20} />
						</span>
						<a className="text-pink-500 hover:underline">Github</a>
					</span>
					<span className="group hover:bg-gray-100 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out border-t border-b my-2 border-gray-200 py-2 gap-1 flex justify-start items-center">
						<span className="cursor-pointer transition-all duration-100">
							<Laptop2Icon color={colors.orange[600]} size={20} />
						</span>
						<a className="text-orange-500 hover:underline">Website</a>
					</span>

					<span>
						<span className="group hover:bg-gray-100 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out border-t border-b my-2 border-gray-200 py-2 gap-1 flex justify-start items-center">
							<span className="cursor-pointer transition-all duration-100">
								<FaYoutube color={colors.red[600]} />
							</span>
							<a className="text-red-500 hover:underline">Youtube</a>
						</span>
					</span>
					<span>
						<span className="group hover:bg-gray-100 hover:translate-x-4 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out border-t border-b my-2 border-gray-200 py-2 gap-1 flex justify-start items-center">
							<span className="cursor-pointer transition-all duration-100 ">
								<RssIcon color={colors.green[600]} size={20} />
							</span>
							<a className="text-green-500 hover:underline">Medium</a>
						</span>
					</span>
				</div>
			</div>
		</div>
	);
};
export default SamanthaPortfolio;
