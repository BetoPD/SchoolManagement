import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteSubject, editSubjectName, editSubjectProfessor, addSubjectGrade, getSubjects} from "./subjectSlice";
import { useParams, useNavigate } from "react-router-dom";

function Subject() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const subjects = useSelector(getSubjects);
    const currentSubject = subjects.find((subject) => subject.id === id);
    const [name, setName] = useState('');
    const [professor, setProfessor] = useState('');
    const [grades, setGrades] = useState([]);

    useState(() => {
        if (currentSubject) {
            setName(currentSubject.name);
            setProfessor(currentSubject.professor);
            setGrades(currentSubject.grades);
        } else {
            navigate('/subject');
        }
    }, []);



    return (
        <div>
            <h1>{name}</h1>
            <h2></h2>
        </div>
    );
};

export default Subject;