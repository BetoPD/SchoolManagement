import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navBar">
            <h1 className='logo'><Link to='/'>Welcome back</Link></h1>
            <ul>
                <Link to='/subject'>Subject</Link>
                <Link to='/homework'>Homework</Link>
                <Link to='/socialservice'>Social Service</Link>
            </ul>
        </div>
    );
}

export default NavBar;