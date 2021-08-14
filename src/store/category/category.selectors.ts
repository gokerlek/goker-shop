import { createSelector } from "reselect";
import { AppState } from "../app-state.interface";
import { CategoryState } from "./category.interface";

export const getCategoryState = (state: AppState) => state.category;
export const getCategory = createSelector(
     getCategoryState,
     (categoryState: CategoryState) => categoryState.data
);
