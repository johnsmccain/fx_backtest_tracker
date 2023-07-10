import React from "react";
import { WrapInputStyle, innerWrapStyle, inputStyle, wrapStyle } from "./style";

const Detail = () => {
	return (
		<div className={`${wrapStyle} lg:w-[20%] w-full`}>
			<div className={`${innerWrapStyle} flex-col w-full `}>
				{[12, 3, 4, 4, 2].map((_, id) => (
					<div className="mb-3  w-full" key={id}>
						<div className="">Profit</div>
						<hr />
						<div className="flex justify-between">
							<div className="">
								<div className="">Profit Factor</div>
								<div className="">0.83</div>
							</div>
							<div className="">
								<div className="">Edge Score</div>
								<div className="">68.30</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Detail;
