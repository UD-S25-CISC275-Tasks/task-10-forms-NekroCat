import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestAmount, setRequestAmount] = useState<string>("");

    const handleUse = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGain = () => {
        const amount = parseInt(requestAmount, 10);
        if (!isNaN(amount) && amount > 0) {
            setAttemptsLeft(attemptsLeft + amount);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestAmount}
                onChange={(e) => {
                    setRequestAmount(e.target.value);
                }}
                placeholder="Enter attempts"
            />
            <button onClick={handleUse} disabled={attemptsLeft <= 0}>
                Use
            </button>
            <button onClick={handleGain}>Gain</button>
        </div>
    );
}
