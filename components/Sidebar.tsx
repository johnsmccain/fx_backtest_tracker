import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	saveToStorage,
	setInitial,
} from "../redux/slice";

function handleButton(type: string, amount: number) {
	if (type === "profit") {
	} else if (type === "loss") {
	}
}
const inputStyle = `outline-none  w-full text-black px-3 py-1`;
const textInputWrapper = `mt-3`;
function Sidebar() {
	// const [capital, setcapital] = useState();
	// const [risk, setrisk] = useState();
	// const [reward, setreward] = useState();

	// const dispatch = useDispatch();
	// const data = useSelector((state: any) => state.compute);

	return (
		<div className="gap-2 w-[90%]">
			<nav className="">
				<div className="">Logo</div>
				<ul className="">
					<li className="cursor-pointer hover:bg-slate-800">Backtest</li>
				</ul>
			</nav>
		</div>
	);
}

export default Sidebar;
