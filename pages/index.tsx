import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.m`odule.css";
import { useEffect, useRef, useState } from "react";
import {
	ActionBtns,
	CalcInput,
	Chart,
	Detail,
	Sidebar,
	Sumary,
	Widget,
} from "../components";
import { useDispatch } from "react-redux";
import { getFromStorage } from "../redux/slice";

export default function Home() {
	const [pickUpStyle, setPickUpStyle] = useState("bg-red-600 text-white");
	const [pickUpBtnText, setPickUpBtnText] = useState("Find Bike");
	const fromLocationRef = useRef<any>();
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch(getFromStorage());
		return () => {};
	}, []);
	const wrapStyle = `p-4`;
	const innerWrapStyle = `p-4 bg-slate-900 w-fit flex gap-3 rounded`;
	const inputStyle = `w-24`;
	const WrapInputStyle = `flex gap-3 flex-col`;
	return (
		<div className="flex flex-col justify-center items-center  bg-slate-300 ">
			<Head>
				<title>Forex Backtest</title>
				<meta name="desdivcription" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="bg-black w-full h-full text-gray-100 flex justify-center">
				<main className="container  h-full lg:flex   py-3">
					<div className="hidden lg:flex lg:w-52 shadow-sm">
						<Sidebar />
					</div>
					<div className=" w-full ">
						<div className="flex justify-between flex-wrap w-full">
							<ActionBtns />
							<CalcInput />
							<Sumary />
						</div>
						<div className="lg:flex  justify-between flex-wrap ">
							<div className={`${wrapStyle} lg:w-[75%] w-full`}>
								<div className={`${innerWrapStyle} w-full`}>
									<Chart />
								</div>
							</div>
							<Detail />
						</div>

						{/* <Widget /> */}
					</div>
				</main>
			</div>
		</div>
	);
}
