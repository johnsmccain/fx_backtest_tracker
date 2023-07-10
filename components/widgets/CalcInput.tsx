import React, { useState } from "react";
import { WrapInputStyle, innerWrapStyle, inputStyle, wrapStyle } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	saveToStorage,
	setInitial,
} from "../../redux/slice";
const CalcInput = () => {
	const [capital, setcapital] = useState<number>();
	const [risk, setrisk] = useState<number>();
	const [reward, setreward] = useState<number>();
	const dispatch = useDispatch();
	const data = useSelector((state: any) => state.compute);
	// console.log(data);
	// console.log(JSON.parse(localStorage.getItem("compute") || ""));
	// localStorage.clear();
	// console.log(risk);

	return (
		<div className={`${wrapStyle} lg:w-fit w-full flex  justify-center`}>
			<div className={innerWrapStyle}>
				<div className="flex gap-3 flex-col">
					<form
						className="flex gap-2"
						onSubmit={(e: any) => {
							e.preventDefault();
							dispatch(setInitial({ capital, reward, risk }));
							dispatch(saveToStorage());
						}}>
						<div className={WrapInputStyle}>
							<input
								type="number"
								className={inputStyle}
								required
								placeholder="Capital"
								min={1}
								onChange={(e: any) => setcapital(e.target.value)}
							/>

							<button
								disabled={!capital}
								// onClick={() => {
								// 	// dispatch(setCapital(initialRef?.current.value));
								// 	// dispatch(setrisk(riskRef?.current.value));
								// 	// dispatch(setreward(rewardRef?.current.value));

								// }}
								className="bg-blue-600 rounded active:bg-blue-500 disabled:bg-slate-500 disabled:cursor-not-allowed">
								Set Initial
							</button>
						</div>
						<div className={WrapInputStyle}>
							{/* <input
								type="number"
								className={inputStyle}
								required
								placeholder="Reward"
								min={1}
							/> */}
							<select
								name="risk"
								id="risk"
								onChange={(e: any) => setreward(e.target.value)}
								defaultValue={"reward"}>
								<option value="reward" disabled>
									Risk 2 Reward
								</option>
								<option value="1">1:1</option>
								<option value="2">1:2</option>
								<option value="3">1:3</option>
								<option value="4">1:4</option>
								<option value="5">1:5</option>
								<option value="6">1:6</option>
								<option value="7">1:7</option>
								<option value="8">1:8</option>
							</select>
							<button
								disabled={!data.capital}
								onClick={() => dispatch(increment())}
								className="bg-green-600 rounded active:bg-green-500 disabled:bg-slate-500 disabled:cursor-not-allowed">
								+ Add Profit
							</button>
						</div>
						<div className={WrapInputStyle}>
							{/* <input
								type="number"
								className={inputStyle}
								// required
								min="0.25 - 0.5"
								// max={3}
								placeholder="Risk"
								onChange={(e: any) => setrisk(e.target.value)}
							/> */}
							<select
								name="risk"
								id="risk"
								onChange={(e: any) => setrisk(e.target.value)}
								defaultValue={"risk"}>
								<option value="risk" disabled>
									Risk per Trede
								</option>
								<option value="0.12">0.12%</option>
								<option value="0.25">0.25%</option>
								<option value="0.50">0.50%</option>
								<option value="1">1%</option>
								<option value="2">2%</option>
								<option value="3">3%</option>
								<option value="4">4%</option>
								<option value="5">5%</option>
							</select>
							<button
								disabled={!data.capital}
								onClick={() => dispatch(decrement())}
								className={
									"bg-red-600 rounded active:bg-red-500 disabled:bg-slate-500 disabled:cursor-not-allowed"
								}>
								- Add Loss
							</button>
						</div>
					</form>
					<div className="">
						<button className="bg-slate-600 active:bg-slate-500 rounded w-full">
							Undo
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CalcInput;
