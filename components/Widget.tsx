import React from "react";
import { useSelector } from "react-redux";
import * as Chart from "echarts";
function Widget() {
	const data = useSelector((state: any) => state?.compute);
	const option = {
		xAxis: {
			type: "category",
			boundaryGap: false,
			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				data: [820, 932, 901, 934, 1290, 1330, 1320],
				type: "line",
				areaStyle: {},
			},
		],
	};
	return (
		<div className="h-full  w-full bg">
			<div className="h-1/2">
				<div className="">{data.capital}</div>
				<div className="">{data.risk}</div>
				<div className="">{data.reward}</div>
				{/* <Chart /> */}
			</div>
			<div className="flex justify-evenly flex-wrap">
				<div className="">Profits {data.profits}</div>
				<div className="">Losses {data.losses}</div>
				<div className="">
					Win Rate {((data.profits_no / data.count) * 100).toFixed(0)}%
				</div>
				<div className="">No. Trades {data.count}</div>
				<div className="">
					PnL {data.profits_no}/{data.losses_no}
				</div>
			</div>
		</div>
	);
}

export default Widget;
