import React from "react";
import { WrapInputStyle, innerWrapStyle, inputStyle, wrapStyle } from "./style";
import { useDispatch } from "react-redux";
import { reset, saveToStorage } from "../../redux/slice";
const ActionBtns = () => {
	const dispatch = useDispatch();
	return (
		<div className={`${wrapStyle} w-fit `}>
			<div className={innerWrapStyle}>
				<button
					onClick={() => dispatch(saveToStorage())}
					className=" bg-blue-600 py-1 px-4 rounded active:bg-blue-500">
					save
				</button>
				<button
					onClick={() => dispatch(reset())}
					className="bg-gray-600 py-1 px-4 rounded active:bg-slate-500">
					reset
				</button>
			</div>
		</div>
	);
};

export default ActionBtns;
