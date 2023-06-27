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
	const [profit, setProfit] = useState();
	const [loss, setLoss] = useState();
	const [capital, setcapital] = useState();
	const [risk, setrisk] = useState();
	const [reward, setreward] = useState();
	const initialRef = useRef<any>();
	const rewardRef = useRef<any>();
	const riskRef = useRef<any>();
	const dispatch = useDispatch();
	const data = useSelector((state: any) => state.compute);

	return (
		<div className="gap-2 w-[90%]">
			<form onSubmit={(e: any) => e.preventDefault()}>
				<div className="  flex flex-wrap gap-1">
					<div className={textInputWrapper}>
						<label htmlFor="capital" className="capitalize">
							capital
						</label>
						<input
							type="number"
							className={inputStyle}
							placeholder="Intial Capital"
							required
							min={1}
							// ref={initialRef}
							onChange={(e: any) => setcapital(e.target.value)}
							id="capital"
						/>
						{/* <label htmlFor=""></label> */}
					</div>
					<div className={textInputWrapper}>
						<label htmlFor="" className="capitalize">
							Rist per trade
						</label>
						<input
							type="number"
							required
							className={inputStyle}
							placeholder="Rist per trade"
							// ref={rewardRef}
							onChange={(e: any) => setrisk(e.target.value)}
						/>
					</div>
					<div className={textInputWrapper}>
						<label htmlFor="" className="capitalize">
							Rist to Reward
						</label>
						<input
							type="number"
							required
							className={inputStyle}
							placeholder="Risk to Reward"
							// ref={rewardRef}
							onChange={(e: any) => setreward(e.target.value)}
						/>
					</div>
				</div>
				<div className="flex items-center justify-center mt-3">
					<button
						className="bg-orange-600 py-3 w-[80%]"
						onClick={() => {
							// dispatch(setCapital(initialRef?.current.value));
							// dispatch(setrisk(riskRef?.current.value));
							// dispatch(setreward(rewardRef?.current.value));
							dispatch(setInitial({ capital, reward, risk }));
							dispatch(saveToStorage());
						}}>
						Appy
					</button>
				</div>
				{/* {data} */}
				{data.capital && (
					<div className="flex flex-wrap mt-7 rounded items-center justify-evenly">
						<button
							onClick={() => dispatch(increment())}
							className=" bg-green-500  px-5 py-2">
							Profit
						</button>
						<button
							onClick={() => dispatch(decrement())}
							className="bg-red-600 py-2 px-5">
							Loss
						</button>
					</div>
				)}
			</form>
		</div>
	);
}

export default Sidebar;
