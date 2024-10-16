import React, { useState } from "react";
import axios from "axios";
import router from "next/router";
import { toast } from "react-toastify";

const HomeComponent = () => {
	const [val, setVal] = useState("");
	const createNew = async () => {
		const response = await axios.post("/api/createProject", { fileName: val });
		if (response.status) {
			toast.success("Huhu welcome");
			router.push("/projects/" + val);
		} else {
			toast.error("Error in creating project");
		}
	};

	return (
		<div
			className="w-full h-screen flex flex-col justify-center items-center space-y-2"
			style={{ scrollBehavior: "smooth" }}
		>
			<input
				className="outline-none focus:outline-none p-3 w-80 border border-gray-200 rounded-md my-2"
				onChange={(e) => setVal(e.target.value)}
				placeholder="What do you want to create"
			/>
			<button
				onClick={createNew}
				className="w-auto h-10 rounded-xl hover:underline"
			>
				Create {val}
			</button>
		</div>
	);
};

export default HomeComponent;
