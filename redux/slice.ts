import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ComputeState {
	capital: number;
	profits_no: number;
	losses_no: number;
	profits: number;
	losses: number;
	winrate: number;
	reward: number;
	risk: number;
	count: number;
}

const initialState: ComputeState = {
	capital: 0,
	profits_no: 0,
	losses_no: 0,
	profits: 0,
	losses: 0,
	winrate: 0,
	reward: 0,
	risk: 0,
	count: 0,
};

export const computeSlice = createSlice({
	name: "compute",
	initialState,
	reducers: {
		setInitial: (state, action) => {
			state.capital = action.payload.capital;
			state.risk = action.payload.risk;
			state.reward = action.payload.reward;
		},
		saveToStorage: state => {
			localStorage.setItem("compute", JSON.stringify(state));
		},
		increment: state => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.profits += (state.risk / 100) * state.capital * state.reward;
			state.profits_no += 1;
			state.count += 1;

			// state.profits += ((state.risk * 10) / state.capital) * state.reward;
		},
		decrement: state => {
			state.profits -= (state.risk / 100) * state.capital;
			state.losses -= (state.risk / 100) * state.capital;
			state.count += 1;
			state.losses_no -= 1;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, saveToStorage, setInitial } =
	computeSlice.actions;

export default computeSlice.reducer;
