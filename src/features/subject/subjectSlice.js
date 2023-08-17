import { createSlice } from "@reduxjs/toolkit";


const subjectReducer = createSlice({
    name: "subject",
    initialState: [],
    reducers: {
        addSubject: (state, action) => {
            const {id, name, professor, grades} = action.payload;
            state.push({id: id, name: name, professor: professor, grades: grades});
        },
        deleteSubject: (state, action) => {
            const {id} = action.payload;
            return state.filter((subject) => subject.id !== id);
        },
        editSubjectName: (state, action) => {
            const {id, name} = action.payload
            const subject = state.find((subject) => subject.id === id);
            subject.name = name;
        },
        editSubjectProfessor: (state, action) => {
            const {id, professor} = action.payload;
            const subject = state.find((subject) => subject.id === id);
            subject.professor = professor;
        }, 
        addSubjectGrade: (state, action) => {
            const {id, grades} = action.payload;
            const subject = state.find((subject) => subject.id === id);
            subject.grades.push(grades);
        }
    }
});


export const getSubjects = (state) => state.subject;

export const { addSubject, deleteSubject, editSubjectName, editSubjectProfessor, addSubjectGrade } = subjectReducer.actions;
export default subjectReducer.reducer;