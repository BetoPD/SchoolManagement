import { getSubjects } from "../features/subject/subjectSlice";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AddSubject from "../components/AddSubjects";
import SubjectPreview from "../components/SubjectPreview";

function Subjects() {

    const subjects = useSelector(getSubjects);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {

        if (!subjects.length) {

            setIsEmpty(true)

        } else {
            setIsEmpty(false)
        }

    },[subjects]);


    return (
        <>
            {!isEmpty ? <h1>Your subjects</h1> : <h1>Add some subjects</h1>}
            <ul className="subjects">
                {subjects.map(subject => <SubjectPreview id={subject.id} name={subject.name} />)}
            </ul>
            <AddSubject />
        </>
    );

}



export default Subjects;