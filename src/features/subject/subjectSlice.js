import { createSlice } from "@reduxjs/toolkit";


const subjectReducer = createSlice({
    name: "subject",
    initialState: [],
    reducers: {
        addSubject: (state, {id, name, professor, grades}) => {
            state.push({id: id, name: name, professor: professor, grades: grades});
        },
        deleteSubject: (state, {id}) => {
            return state.filter((subject) => subject.id !== id);
        },
        editSubjectName: (state, {id, name}) => {
            const subject = state.find((subject) => subject.id === id);
            subject.name = name;
        },
        editSubjectProfessor: (state, {id, professor}) => {
            const subject = state.find((subject) => subject.id === id);
            subject.professor = professor;
        }, 
        addSubjectGrade: (state, {id, grades}) => {
            const subject = state.find((subject) => subject.id === id);
            subject.grades.push(grades);
        }
    }
});


export const getSubjects = (state) => state.subject;
export const getProfessors = (state) => state.subject.map((subject) => subject.professor);
export const getSubjectGrade = (state, id) => state.subject.find((subject) => subject.id === id).grades.avarage();


export const { addSubject, deleteSubject, editSubjectName, editSubjectProfessor, addSubjectGrade } = subjectReducer.actions;
export default subjectReducer.reducer;