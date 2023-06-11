import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeVacancy } from "../../types";

const LS_FAVORITE_KEY = 'favk'

interface JobState {
    favorites: TypeVacancy[]
}


const initialState:JobState = {
  favorites: JSON.parse(localStorage.getItem(LS_FAVORITE_KEY) ?? '[]')
}


export const jobSlice = createSlice({
    name:'super',
    initialState,
    reducers:{
        addFavorite(state, action:PayloadAction<TypeVacancy>){
            state.favorites.push(action.payload)
            localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(state.favorites))

        },
        removeFavorite(state, action:PayloadAction<TypeVacancy>) {
            state.favorites = state.favorites.filter(f => f.id !== action.payload.id)
            localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(state.favorites))

        }
    }
})


export const superJobActions = jobSlice.actions
export const superJobReducer = jobSlice.reducer