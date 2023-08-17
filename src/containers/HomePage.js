import { useState, useEffect } from "react";

function HomePage() {
    const [name, setName] = useState('Unknown');

    return (
        <>
            <h1>Welcome {name} To Your HomePage</h1>
            
        </>
    );
}

export default HomePage;