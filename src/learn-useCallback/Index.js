import React, { useState, useCallback } from 'react';
import "./Index.css"
const functionsCounter = new Set()

export default function Index() {
    const [count, setCount] = useState(0);
    const [otherCounter, setOtherCounter] = useState(0);

    const countUp = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const countDown = useCallback(() => {
        setCount(count - 1);
    }, [count]);
    const incrementOtherCounter = useCallback(() => {
        setOtherCounter(otherCounter + 1);
    }, [otherCounter]);

    functionsCounter.add(countUp);
    functionsCounter.add(countDown);
    functionsCounter.add(incrementOtherCounter);

    console.log(functionsCounter.size);

    return (
        <div className="Main">
            <p className="Text">useCallback</p>
            <p>Kelompok 1</p>

            <p className="Text">{count}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={countUp}>
                        Up
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={countDown}>
                        Down
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={incrementOtherCounter}>
                        otherCounter
                    </button>
                </div>
            </div>
        </div>
    );
}