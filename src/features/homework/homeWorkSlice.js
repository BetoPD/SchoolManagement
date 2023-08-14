import { createSlice } from '@reduxjs/toolkit';

const homeWorkReducer = createSlice({
    name: 'homeWork',
    initialState: [],
    reducers: {
        addHomeWork: (state, action) => {
            return [...state, action];
        },
        deleteHomeWork: (state, {id}) => {
            return state.filter(item => item.id !== id);
        },
        editHomeWork: (state, {id, subjectId, grade, theme, dueDate, done: done}) => {
            const index = state.findIndex(item => item.id === id);
            state[index] = {id: id, subjectId: subjectId, grade: grade, theme: theme, dueDate: dueDate, done: done};
        },
        addGrade: (state, {id, grade}) => {
            const index = state.findIndex(item => item.id === id);
            state[index].grade = grade;
        },
        markHomeWorkAsDone: (state, {id}) => {
            const index = state.findIndex(item => item.id === id);
            state[index].done = true;
        },
        markHomeWorkAsNotDone: (state, {id}) => {
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
