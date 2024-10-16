import { ToastContainer } from "react-toastify";

const Body = ({ children }) => {
	return (
		<div className="w-full h-full">
			<ToastContainer
				position="bottom-center"
				autoClose={2000}
				newestOnTop={true}
				closeOnClick
				className="text-gray-900"
				rtl={false}
				theme="light"
				pauseOnFocusLoss={false}
				draggable={true}
				pauseOnHover={false}
				style={{
					zIndex: 100,
				}}
			/>
			{children}
		</div>
	);
};

export default Body;
