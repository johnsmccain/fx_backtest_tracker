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
	const [capital, setcapital] = useState();
	const [risk, setrisk] = useState();
	const [reward, setreward] = useState();
	const dispatch = useDispatch();
	const data = useSelector((state: any) => state.compute);

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
							<input
								type="number"
								className={inputStyle}
								required
								placeholder="Reward"
								min={1}
								onChange={(e: any) => setreward(e.target.value)}
							/>
							<button
								disabled={!data.capital}
								onClick={() => dispatch(increment())}
								className="bg-green-600 rounded active:bg-green-500 disabled:bg-slate-500 disabled:cursor-not-allowed">
								+ Add Profit
							</button>
						</div>
						<div className={WrapInputStyle}>
							<input
								type="number"
								className={inputStyle}
								required
								placeholder="Risk"
								onChange={(e: any) => setrisk(e.target.value)}
							/>
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
