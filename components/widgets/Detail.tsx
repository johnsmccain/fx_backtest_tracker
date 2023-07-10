import React from "react";
import { WrapInputStyle, innerWrapStyle, inputStyle, wrapStyle } from "./style";
import { useSelector } from "react-redux";

const Detail = () => {
	const data = useSelector((state: any) => state.compute);
	return (
		<div className={`${wrapStyle} lg:w-[20%] w-full`}>
			<div className={`${innerWrapStyle} flex-col w-full `}>
				<div className="mb-3  w-full">
					<div className=" flex justify-between">
						<div className="">Balance:</div>
						<div className="">
							{Number(data.capital) + Number(data.profits)}
						</div>
					</div>
					<hr />
					<div className="flex justify-between my-3">
						<div className="">
							<div className="">Profit Score</div>
							<div
								className={`${
									(data.profits / data.capital) * 100 > 0
										? "text-green-600"
										: "text-red-600"
								} `}>
								{((data.profits / data.capital) * 100).toFixed(2)}%
							</div>
						</div>
						<div className="">
							<div className="">Profit Factor </div>
							<div
								className={`${
									data.profits > 0 ? "text-green-600" : "text-red-600"
								} text-center`}>
								{data.profits}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
