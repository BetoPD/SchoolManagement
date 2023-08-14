import { createSlice } from "@reduxjs/toolkit";

const socialServiceReducer = createSlice({
    name: 'socialService',
    initialState: {},
    reducers: {
        addSocialService: (state, action) => {
            state = action;
        },
        editPreviousSocialService: (state, action) => {
            return {...state, pastSocialService: action.payload};
        },
        editCurrentSocialService: (state, action) => {
            return {...state, currentSocialService: action.payload};
        }
    }
})

export const getSocialService = (state) => state;
export const getPastSocialService = (state) => state.pastSocialService;
export const getCurrentSocialService = (state) => state.currentSocialService;

export const { addSocialService, editCurrentSocialService, editPreviousSocialService } = socialServiceReducer.actions;
export default socialServiceReducer.reducer;
