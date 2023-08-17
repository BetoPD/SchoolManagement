import { addSubject, getSubjects } from "../features/subject/subjectSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function AddSubject() {
    const [id, setId] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [teacher, setTeacher] = useState('');
    const subjects = useSelector(getSubjects);
    const dispatch = useDispatch();
    const subject = {};

    const handleSubmit = (e) => {
        e.preventDefault();

        const repeatedValue = subjects.find(subject => subject.id === id);

        if (!repeatedValue) {

            if (id && subjectName && teacher) {
                subject.id = id;
                subject.name = subjectName;
                subject.teacher = teacher;
                subject.grades = [];

                dispatch(addSubject(subject));
                setId('')
                setSubjectName('')
                setTeacher('')
            }

        } else {

            alert('Subject id already in use');

        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Id">ID</label>
                <input
                    className="Id"
                    type="text"
                    required
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <label htmlFor="SubjectName">Subject Name</label>
                <input
                    className="SubjectName"
                    type="text"
                    required
                    value={subjectName}
                    onChange={e => setSubjectName(e.target.value)} 
                />
                <label htmlFor="TeacherName">Teacher Name</label>
                <input
                    className="TeacherName"
                    type="text"
                    required
                    value={teacher}
                    onChange={e => setTeacher(e.target.value)} 
                />
                <button>Add Subject</button>
            </form>
        </>
    );
}

export default AddSubject;