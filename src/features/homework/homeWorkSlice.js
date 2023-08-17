import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const homeWorkReducer = createSlice({
    name: 'homeWork',
    initialState: [],
    reducers: {
        addHomeWork: (state, action) => {
            return [...state, action];
        },
        deleteHomeWork: (state, action) => {
            const {id} = action.payload;
            return state.filter(item => item.id !== id);
        },
        editHomeWork: (state, action) => {
            const {id, subjectId, grade, theme, dueDate} = action.payload;
            const index = state.findIndex(item => item.id === id);
            state[index] = {id: id, subjectId: subjectId, grade: grade, theme: theme, dueDate: dueDate, done: false};
        },
        addGrade: (state, action)  => {
            const {id, grade} = action.payload;
            const index = state.findIndex(item => item.id === id);
            state[index].grade = grade;
        },
        markHomeWorkAsDone: (state, action) => {
            const {id} = action.payload;
            const index = state.findIndex(item => item.id === id);
            state[index].done = true;
        },
        markHomeWorkAsNotDone: (state, action) => {
            const {id} = action.payload;
            const index = state.findIndex(item => item.id === id);
            state[index].done = false;
        }
    }
});

export const getHomeWorks = (state) => state;
export const getDoneHomeWorks = (state) => state.filter(subject => subject.done);
export const getNotDoneHomeWorks = (state) => state.filter(subject => !subject.done);

export const { addHomeWork, deleteHomeWork, editHomeWork, addGrade, markHomeWorkAsDone, markHomeWorkAsNotDone } = homeWorkReducer.actions;
export default homeWorkReducer.reducer;
