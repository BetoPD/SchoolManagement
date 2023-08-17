import { Link } from "react-router-dom";

function SubjectPreview({ id, name }) {
    return (
        <li>
            <Link to={`/subject/${id}`}>
                <h3>{name}</h3>
            </Link>
            <h6>{id}</h6>
        </li>
    );
}

export default SubjectPreview;