import { useState } from "react";

const Body = () => {
    const [name, setName] = useState('John');
    const handleClick = () => {
        setName('Joshua')
    }
    return ( 
        <div>
            <h1 className="mt-10 text-center font-bold text-3xl">This is the Body</h1>
            <p>This is the supposed to change: <span className="font-bold">{name}</span></p>
            <button className="btn" onClick={handleClick}>Generate name</button>
        </div>
     );
}
 
export default Body;