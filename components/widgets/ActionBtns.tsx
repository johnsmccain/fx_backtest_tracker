import React from "react";
import { WrapInputStyle, innerWrapStyle, inputStyle, wrapStyle } from "./style";
const ActionBtns = () => {
	return (
		<div className={`${wrapStyle} w-fit `}>
			<div className={innerWrapStyle}>
				<button className=" bg-blue-600 py-1 px-4 rounded active:bg-blue-500">
					save
				</button>
				<button className="bg-gray-600 py-1 px-4 rounded active:bg-slate-500">
					reset
				</button>
			</div>
		</div>
	);
};

export default ActionBtns;
