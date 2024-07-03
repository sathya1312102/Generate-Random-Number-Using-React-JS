import { useState } from "react";
import "./Counter.css";

function Counter() {
    const [random, setCount] = useState(0);

    function RandomNum() {
        const randomnumber = Math.floor(Math.random() * 10);
        setCount(randomnumber);
    }

    return (
        <div className="counter-container">
            <h1 className="random-number">{random}</h1>
            <button className="random-button" onClick={RandomNum}>Generate Random Number</button>
        </div>
    );
}

export default Counter;
