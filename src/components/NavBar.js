import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <h1 className='logo'><Link to='/'>Welcome back</Link></h1>
            <ul>
                <Link to='/grades'>Grades</Link>
                <Link to='/homework'>Homework</Link>
                <Link to='/socialservice'>Social Service</Link>
            </ul>
        </>
    );
}

export default NavBar;