import React from "react";
import { WrapInputStyle, innerWrapStyle, inputStyle, wrapStyle } from "./style";
import { useSelector } from "react-redux";
const Sumary = () => {
	const data = useSelector((state: any) => state.compute);
	return (
		<div className={`${wrapStyle} lg:w-[50%]  w-full`}>
			<div className={`${innerWrapStyle} w-full flex  justify-between`}>
				<div className="">
					<div className="text-center">Winrate</div>
					<div
						className={`${
							(data.profits_no / data.count) * 100 > 0
								? "text-green-600"
								: "text-red-600"
						} text-center`}>
						{((data.profits_no / data.count) * 100).toFixed(0)}%
					</div>
				</div>
				<div className="">
					<p className="text-center">PnL</p>
					<div className="text-center">
						<span
							className={`${
								(Number(data.losses_no) / Number(data.profits_no)) * 1 > 0
									? "text-green-600"
									: "text-red-600"
							} text-center`}>
							{((Number(data.losses_no) / Number(data.profits_no)) * 1).toFixed(
								2
							)}
							%
						</span>
					</div>
				</div>
				<div className="">
					<div className="text-center">Total Trades</div>
					<div className="text-center">{data.count}</div>
				</div>
				<div className="">
					<div className="text-center">Wins / Losses</div>
					<div className="text-center">
						<span className="text-green-600">{data.profits_no}W</span>/
						<span className="text-red-600">{data.losses_no}L</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sumary;
